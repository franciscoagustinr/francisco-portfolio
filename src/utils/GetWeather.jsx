import { fetchWeatherApi } from 'openmeteo';

const CACHE_KEY = 'francisco:weather';
const TTL_MS = 15 * 60 * 1000;

let inFlight = null;

const getFormattedTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

const readCache = () => {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed.at !== 'number') return null;
    if (Date.now() - parsed.at > TTL_MS) return null;
    return parsed.data ?? null;
  } catch (error) {
    return null;
  }
};

const writeCache = (data) => {
  try {
    window.localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ at: Date.now(), data })
    );
  } catch (error) {
  }
};

const fetchOnce = () => {
  if (inFlight) return inFlight;

  const params = {
    latitude: -34.6131,
    longitude: -58.3772,
    current: ['temperature_2m', 'is_day'],
    timeformat: 'unixtime',
  };
  const url = 'https://api.open-meteo.com/v1/gfs';

  inFlight = fetchWeatherApi(url, params)
    .then((responses) => {
      if (!responses || responses.length === 0) {
        console.error('No weather data available.');
        return null;
      }

      // Process first location. Add a for-loop for multiple locations or weather models
      const response = responses[0];
      if (!response) {
        console.error("No valid 'response' data available.");
        return null;
      }

      const current = response.current();
      if (!current || !current.variables) {
        console.error("No valid 'current' data available.");
        return null;
      }

      // // // Guardar los datos actualizados en el estado
      const data = {
        temperature2m: current.variables(0).value().toFixed(),
        isDay: current.variables(1).value(),
      };
      writeCache(data);
      return data;
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      return null;
    })
    .finally(() => {
      inFlight = null;
    });

  return inFlight;
};

export const GetWeather = async (setWeatherData) => {
  const cached = readCache();
  if (cached) {
    setWeatherData({ ...cached, time: getFormattedTime() });
    return;
  }

  const data = await fetchOnce();
  if (data) setWeatherData({ ...data, time: getFormattedTime() });
};
