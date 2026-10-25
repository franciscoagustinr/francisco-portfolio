import bubblePopButtons from '../assets/sounds/bubble-pop-buttons.mp3';
import bubblePopAvatar from '../assets/sounds/bubble-pop-avatar.mp3';
import clickButton from '../assets/sounds/click-button.mp3';
import elastic from '../assets/sounds/elastic.mp3';
import homeMusic from '../assets/sounds/home-music.mp3';
import pop from '../assets/sounds/pop.mp3';
import wooHoo from '../assets/sounds/woo-hoo.mp3';

const SOURCES = {
  'bubble-pop-buttons': bubblePopButtons,
  'bubble-pop-avatar': bubblePopAvatar,
  'click-button': clickButton,
  elastic,
  'home-music': homeMusic,
  pop,
  'woo-hoo': wooHoo,
};

const cache = new Map();
let howlerModule = null;
let howlerPromise = null;

const ensureHowler = () => {
  if (howlerModule) return Promise.resolve(howlerModule);
  if (!howlerPromise) {
    howlerPromise = import('howler').then((module) => {
      howlerModule = module;
      return module;
    });
  }
  return howlerPromise;
};

export const getSound = async (name, options = {}) => {
  const source = SOURCES[name];
  if (!source) return null;

  const { Howl } = await ensureHowler();

  let sound = cache.get(name);
  if (!sound) {
    sound = new Howl({
      src: [source],
      volume: options.volume ?? 1,
      loop: options.loop ?? false,
      rate: options.rate ?? 1,
      preload: true,
    });
    cache.set(name, sound);
    return sound;
  }

  if (options.volume !== undefined) sound.volume(options.volume);
  if (options.loop !== undefined) sound.loop(options.loop);
  if (options.rate !== undefined) sound.rate(options.rate);
  return sound;
};

export const playSound = (name, volume, options = {}) => {
  getSound(name, { ...options, volume })
    .then((sound) => {
      if (sound) sound.play();
    })
    .catch(() => {
    });
};
