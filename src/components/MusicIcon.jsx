import React, { useEffect, useRef, useState } from 'react';
import SoundOn from '../assets/images/Speaker.png';
import SoundOff from '../assets/images/SpeakerMuted.png';
import MusicalNote from '../assets/images/MusicalNote.png';
import Dancing from '../assets/images/man-dancing.png';
import Seal from '../assets/images/seal.png';
import { Howl } from 'howler';
import { useMusicPlaying } from '../stores/useMusicPlaying';
import gsap from 'gsap';

export const MusicIcon = ({ setDialogText }) => {
  const isMusicPlaying = useMusicPlaying((state) => state.isMusicPlaying);
  const playMusic = useMusicPlaying((state) => state.playMusic);
  const stopMusic = useMusicPlaying((state) => state.stopMusic);
  const [sound, setSound] = useState();
  const noteRef = useRef(null);
  const noteTwoRef = useRef(null);
  const isMobile = window.innerWidth < 768;

  const toggleMusic = () => {
    if (isMusicPlaying && sound) {
      sound.stop();
      stopMusic();
    } else {
      const newSound = new Howl({
        volume: 0.07,
        src: ['assets/sounds/home-music.mp3'],
        loop: true,
        rate: 0.9,
      });
      newSound.play();
      setSound(newSound);
      playMusic();
    }
  };

  useEffect(() => {
    if (isMusicPlaying && noteRef.current && noteTwoRef.current) {
      const animateNote = (note, xAmplitude, delay, repeatDelay) => {
        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: repeatDelay,
          delay: delay,
        });

        tl.to(note, {
          y: isMobile ? -15 : -50,
          duration: 2,
          ease: 'power1.in',
          opacity: 1,
          scale: 1,
          onUpdate: function () {
            const progress = this.progress();
            const xMovement = Math.sin(progress * Math.PI * 4) * xAmplitude;
            gsap.set(note, { x: xMovement });
          },
        });

        tl.to(note, {
          y: isMobile ? -15 : -60,
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        });

        tl.set(note, { scale: 0, opacity: 0 });
      };

      animateNote(noteRef.current, 10, 0, 2);
      animateNote(noteTwoRef.current, 10, 2.5, 2);
    }
  }, [isMusicPlaying]);

  return (
    <>
      <img
        src={!isMusicPlaying ? SoundOff : SoundOn}
        className={`w-10 cursor-pointer md:w-12 lg:w-16 3xl:w-20 4xl:w-44 ${isMusicPlaying && 'animate-pulse'} transition-all hover:scale-125 active:scale-150`}
        alt="Music On Icon"
        onClick={toggleMusic}
        onMouseEnter={() => {
          setDialogText(
            !isMusicPlaying
              ? `Let the good vibes play! <img loading="eager" src=${Dancing} class='inline-block w-6 animate-shake'/>`
              : `Moment of calm? <img loading="eager" src=${Seal} class='inline-block w-6'/>`
          );
        }}
        onMouseLeave={() => {
          setDialogText('');
        }}
      />

      {isMusicPlaying && (
        <>
          <img
            ref={noteRef}
            src={MusicalNote}
            alt="Musical Note Icon"
            className="pointer-events-none absolute -left-4 bottom-7 w-5 opacity-0 md:bottom-20"
          />
          <img
            ref={noteTwoRef}
            src={MusicalNote}
            alt="Musical Note Icon"
            className="pointer-events-none absolute bottom-7 left-5 w-5 opacity-0 md:bottom-16 lg:left-10"
          />
        </>
      )}
    </>
  );
};
