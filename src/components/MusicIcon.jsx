import React, { useEffect, useRef, useState } from 'react';
import SoundOn from '../assets/Speaker.png';
import SoundOff from '../assets/SpeakerMuted.png';
import MusicalNote from '../assets/MusicalNote.png';
import { Howl } from 'howler';
import { useMusicPlaying } from '../stores/useMusicPlaying';
import gsap from 'gsap';

export const MusicIcon = () => {
  const isMusicPlaying = useMusicPlaying((state) => state.isMusicPlaying);
  const playMusic = useMusicPlaying((state) => state.playMusic);
  const stopMusic = useMusicPlaying((state) => state.stopMusic);
  const [sound, setSound] = useState();
  const noteRef = useRef(null); // Referencia para la nota musical
  const noteTwoRef = useRef(null); // Referencia para la nota musical

  const toggleMusic = () => {
    if (isMusicPlaying && sound) {
      sound.stop();
      stopMusic();
    } else {
      const newSound = new Howl({
        volume: 0.07,
        src: ['src/assets/home-music.mp3'],
        // src: ['src/assets/lofi-guitar.mp3'],
        // volume: 0.2,
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

        // Animación principal (movimiento y ondulación)
        tl.to(note, {
          y: -90,
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

        // Transición final (desvanecimiento y reducción de escala)
        tl.to(note, {
          y: -105,
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'power1.out',
        });

        // Restaurar al estado inicial antes de repetir
        tl.set(note, { scale: 0, opacity: 0 });
      };

      // Animar ambas notas
      animateNote(noteRef.current, 20, 0, 2);
      animateNote(noteTwoRef.current, 15, 2, 2);
    }
  }, [isMusicPlaying]);

  return (
    <>
      <img
        src={!isMusicPlaying ? SoundOff : SoundOn}
        className={`w-16 cursor-pointer ${isMusicPlaying && 'animate-pulse'} `}
        alt="Music On Icon"
        onClick={toggleMusic}
      />

      {isMusicPlaying && (
        <>
          <img
            ref={noteRef}
            src={MusicalNote}
            alt="Musical Note Icon"
            className="pointer-events-none absolute -left-4 bottom-20 w-7 opacity-0"
          />
          <img
            ref={noteTwoRef}
            src={MusicalNote}
            alt="Musical Note Icon"
            className="pointer-events-none absolute bottom-16 left-10 w-7 opacity-0"
          />
        </>
      )}
    </>
  );
};
