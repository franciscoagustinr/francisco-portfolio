import { fetchWeatherApi } from "openmeteo";

export const GetWeather = (setWeatherData) => {
  const params = {
    latitude: -34.6131,
    longitude: -58.3772,
    current: ["temperature_2m", "is_day"],
    timeformat: "unixtime",
  };
  const url = "https://api.open-meteo.com/v1/gfs";

  fetchWeatherApi(url, params)
    .then((responses) => {
      if (responses && responses.length > 0) {
        // Process first location. Add a for-loop for multiple locations or weather models
        const response = responses[0];

        if (response) {
          // Attributes for timezone and location
          const utcOffsetSeconds = response.utcOffsetSeconds();
          const current = response.current();

          if (current && current.variables) {
            // Obtener el valor de tiempo Unix
            const unixTime = Number(current.time()) + utcOffsetSeconds;

            // Convertir el tiempo Unix a formato AM/PM
            const date = new Date(unixTime * 1000); // Multiplicamos por 1000 para convertir segundos en milisegundos

            // const hours = date.getHours();
            // const minutes = date.getMinutes();
            // const ampm = hours >= 12 ? "PM" : "AM";
            // const formattedHours = hours % 12 || 12;
            // const formattedTime = `${formattedHours}:
            // ${minutes < 10 ? "0" : ""}
            // ${minutes} ${ampm}`;

            // // // Guardar los datos actualizados en el estado
            // const updatedWeatherData = {
            //   time: formattedTime,
            //   temperature2m: current.variables(0).value().toFixed(),
            //   isDay: current.variables(1).value(),
            // };

            function getFormattedTime() {
              const date = new Date();
              const hours = date.getHours();
              const minutes = date.getMinutes();
              const ampm = hours >= 12 ? "PM" : "AM";
              const formattedHours = hours % 12 || 12;
              const formattedMinutes = formatMinutes(minutes);
              const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
              return formattedTime;
            }

            function formatMinutes(minutes) {
              return minutes < 10 ? `0${minutes}` : minutes;
            }

            // // // Guardar los datos actualizados en el estado
            const updatedWeatherData = {
              time: getFormattedTime(),
              temperature2m: current.variables(0).value().toFixed(),
              isDay: current.variables(1).value(),
            };

            setWeatherData(updatedWeatherData);
          } else {
            console.error("No valid 'current' data available.");
          }
        } else {
          console.error("No valid 'response' data available.");
        }
      } else {
        console.error("No weather data available.");
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
};
