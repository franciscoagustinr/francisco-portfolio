import React, { useEffect, useMemo, useRef, useState } from 'react';
import FranciscoWithBeto from '../../assets/images/FranciscoWithBeto.JPG';
import WavingHand from '../../assets/images/waving-hand.png';
import FlagArgentina from '../../assets/images/flag-argentina.png';
import Joystick from '../../assets/images/joystick.png';
import Palette from '../../assets/images/artist-palette.png';
import Sparkles from '../../assets/images/sparkles.png';
import HandPointingDown from '../../assets/images/backhand-pointing-down.png';
import Dog from '../../assets/images/dog.png';
import Dizzy from '../../assets/images/dizzy.png';
import Handshake from '../../assets/images/handshake.png';
import UpsideDownFace from '../../assets/images/upside-down-face.png';
import Rocket from '../../assets/images/rocket.png';
import GrinningFace from '../../assets/images/grinning-face.png';
import Star from '../../assets/images/star.png';
import Nerd from '../../assets/images/nerd-face.png';
import Rainbow from '../../assets/images/rainbow.png';
import FaceLove from '../../assets/images/smiling-face-love.png';
import SparklingHeart from '../../assets/images/sparkling-heart.png';
import { WorksContainer } from './WorksContainer';
import { usePopupStore } from '../../stores/usePopUp';
import gsap from 'gsap';

export const PopUpAbout = ({ hatName }) => {
  const popupRef = useRef();
  const closePopUp = usePopupStore((state) => state.closePopUp);
  const isPopUpOpen = usePopupStore((state) => state.isPopUpOpen);
  const isMobileXS = window.innerWidth <= 375;
  const is3XL = window.innerWidth >= 1920 && window.innerWidth <= 3999;
  const is4XL = window.innerWidth >= 4000;

  const closePopup = () => {
    if (popupRef.current) {
      gsap.to(popupRef.current, {
        top: '0.5rem',
        left: '0.5rem',
        scale: 0,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          closePopUp();
        },
      });
    }
  };

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    if (isPopUpOpen && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { scale: 0, opacity: 0, rotation: -180 },
        {
          scale: is3XL ? 1 : is4XL ? 2.5 : 1,
          opacity: 1,
          rotation: 0,
          duration: 1,
          ease: 'bounce.out',
        }
      );
    }
  }, [isPopUpOpen]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    isPopUpOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 bg-opacity-5 backdrop-blur-md">
        <div
          ref={popupRef}
          className={`no-scrollbar relative top-0 z-20 mx-1 h-[40rem] w-auto overflow-x-hidden overflow-y-scroll rounded-2xl border border-solid border-gray-100 bg-gray-600 bg-opacity-20 shadow-2xl will-change-transform md:h-[43rem] lg:top-2 4xl:!w-[70rem] ${isMobileXS && 'h-[36.5rem]'}`}
        >
          <IconCross
            className="absolute right-2 top-2 z-50 cursor-pointer"
            onClick={closePopup}
          />
          <div className="relative mx-4 flex min-h-full flex-col gap-1 pb-1 pt-2.5 md:flex-row lg:mr-8 lg:gap-4 4xl:justify-between">
            <div className="hidden flex-col justify-end gap-3 text-black md:flex md:w-[390px] lg:w-[440px] 4xl:flex-1">
              <ChatSimulator />
            </div>
            <div className="sticky top-8 flex h-full flex-col items-center justify-start rounded-lg lg:w-[450px]">
              <h2 className="relative -rotate-3 select-none pt-1 text-center font-RecoletaBlack text-6xl leading-[3rem] tracking-wider text-[#fff] lg:pt-0 lg:text-7xl lg:leading-[4.2rem]">
                {Array.from('Selected').map((letter, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-150 hover:scale-150 ${index % 2 === 0 ? 'hover:rotate-6' : 'hover:-rotate-12'} ${
                      [
                        'hover:text-[#f7d65f]',
                        'hover:text-[#e18754]',
                        'hover:text-[#54f0f0]',
                        'hover:text-[#db7c45]',
                        'hover:text-[#ef4d53]',
                        'hover:text-[#dd5ad9]',
                        'hover:text-[#d97e4a]',
                        'hover:text-[#eecb4b]',
                      ][index % 7]
                    }`}
                  >
                    {letter}
                  </span>
                ))}
                <br />
                {Array.from('Works').map((letter, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-150 hover:scale-150 ${index % 2 === 0 ? 'hover:rotate-6' : 'hover:-rotate-6'} ${
                      [
                        'hover:text-[#c0ef3d]',
                        'hover:text-[#fb8039]',
                        'hover:text-[#3effff]',
                        'hover:text-[#df4c51]',
                        'hover:text-[#f265ee]',
                      ][index % 5]
                    }`}
                  >
                    {letter}
                  </span>
                ))}
              </h2>
              <div className="mt-4 px-2 md:mt-8 lg:w-full lg:px-6 4xl:mt-6">
                <WorksContainer hatName={hatName} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export const ChatSimulator = () => {
  const messages = useMemo(
    () => [
      `Hi there! <img src=${WavingHand} class='3xl:w-6 inline-block w-5 aspect-square
object-contain animate-wavingHand'/> I’m Francisco Agustín Rodríguez —but you can call me Fran.`,
      `I’m a front-end developer hailing from Buenos Aires, Argentina <img src=${FlagArgentina} class='3xl:w-6 inline-block w-5 aspect-square
object-contain'/>`,
      `I bring websites to life by creating interactive <img src=${Joystick} class='3xl:w-6 inline-block w-5 aspect-square
object-contain animate-shake'/> visually stunning experiences <img src=${Palette} class='3xl:w-6 inline-block w-5 aspect-square
object-contain'/> with a focus on seamless motion and user-friendly design <img src=${Sparkles} class='3xl:w-6 inline-block w-5 aspect-square
object-contain animate-pulse'/>`,
      `This is my teammate <img src=${HandPointingDown} class='3xl:w-6 inline-block w-5 aspect-square
object-contain animate-bounce duration-150'/> <img src=${HandPointingDown} class='3xl:w-6 inline-block w-5 aspect-square
object-contain animate-bounce duration-150'/>`,
      'img',
      `Beto, my loyal sidekick <img src=${Dog} class='3xl:w-6 inline-block w-5 aspect-square
object-contain animate-shake'/>  He keeps the creativity flowing! <img src=${Dizzy} class='3xl:w-6 inline-block w-5 aspect-square
object-contain'/>`,
      `Let’s connect <img src=${Handshake} class='3xl:w-6 animate-bounce inline-block w-5 aspect-square
object-contain'/> share some laughs <img src=${UpsideDownFace} class='3xl:w-6 animate-spin inline-block w-5 aspect-square
object-contain'/> and turn your ideas into reality! <img src=${Rocket} class='3xl:w-6 inline-block w-5 aspect-square
object-contain'/> `,
    ],
    []
  );
  const [reactions, setReactions] = useState(
    messages.map(() => ({ emoji: null, count: 0 }))
  );
  const emojiReactions = [
    { id: 'grinningFace', src: `${GrinningFace}` },
    { id: 'star', src: `${Star}` },
    { id: 'nerd', src: `${Nerd}` },
    { id: 'rainbow', src: `${Rainbow}` },
    { id: 'faceLove', src: `${FaceLove}` },
    { id: 'sparklingHeart', src: `${SparklingHeart}` },
    { id: 'sparkles', src: `${Sparkles}` },
  ];
  const endOfMessagesRef = useRef();
  const [count, setCount] = useState(0);
  const [showTypingDots, setShowTypingDots] = useState(true);

  const handleReaction = (index) => {
    setReactions((prevReactions) => {
      return prevReactions.map((reaction, i) =>
        i === index
          ? {
              emoji: emojiReactions[index],
              count: reaction.count + 1,
            }
          : reaction
      );
    });
  };

  const visibleMessages = messages.slice(0, count);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < messages.length) {
        setCount((prevCount) => prevCount + 1);
        setShowTypingDots(false);
        setTimeout(() => setShowTypingDots(true), 400);
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [count, messages.length, visibleMessages.length]);

  useEffect(() => {
    if (endOfMessagesRef.current && visibleMessages) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [visibleMessages.length, showTypingDots]);

  return (
    <div className="flex h-full flex-col justify-end bg-transparent">
      {visibleMessages.map((message, index) => (
        <div
          key={index}
          className={`relative max-w-max animate-appear cursor-pointer select-none rounded-2xl rounded-bl-md bg-[#ffffff] py-2 pl-3 pr-2 font-KarlaLight text-sm shadow-sm transition-all duration-300 ease-in-out 3xl:text-base 4xl:text-xl ${
            reactions[index].emoji ? 'mb-5' : 'mb-2'
          } `}
          onClick={() => handleReaction(index)}
        >
          <div className="absolute -left-1 bottom-0 h-0 w-0 rotate-90 border-l-8 border-t-8 border-l-transparent border-t-white" />
          {message === 'img' ? (
            <div className="-ml-1 max-w-[340px]">
              <img
                src={FranciscoWithBeto}
                alt="Beto & Me"
                className="aspect-square w-full rounded-lg"
              />
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: message }} />
          )}
          {reactions[index].emoji && (
            <span className="absolute -bottom-3.5 right-2 flex animate-appear items-center justify-center rounded-full border border-gray-300 bg-white px-2 py-0.5 shadow-sm duration-0 3xl:px-2.5 3xl:py-1">
              {reactions[index].emoji.id === 'star' ? (
                Array.from({ length: 3 }).map((_, idx) => (
                  <img
                    key={`${index}-star-${idx}`}
                    src={reactions[index].emoji.src}
                    alt="emoji"
                    loading="eager"
                    className="mr-1 inline-block aspect-square w-4 object-contain 3xl:w-6"
                  />
                ))
              ) : (
                <img
                  src={reactions[index].emoji.src}
                  alt="emoji"
                  loading="eager"
                  className="inline-block aspect-square w-4 object-contain 3xl:w-6"
                />
              )}

              <span
                key={`${index}-${reactions[index].count}`}
                className="relative ml-0.5 animate-appear pl-0.5 text-xs text-gray-500 3xl:text-sm"
              >
                {reactions[index].count}
              </span>
            </span>
          )}
        </div>
      ))}
      {count < messages.length && showTypingDots && (
        <>
          <div className="relative my-2 max-w-16 animate-appear rounded-2xl rounded-bl-md bg-[#ffffff] p-0 text-sm">
            <span className="typing-animation flex items-center justify-center">
              <TypingDots />
            </span>
          </div>
        </>
      )}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export const IconCross = ({ className, onClick }) => {
  return (
    <>
      <svg
        className={`w-6 ${className} transition-all duration-150 hover:scale-150`}
        viewBox="0 -0.5 25 25"
        fill="#000"
        onClick={onClick}
      >
        <path
          d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
          fill="#fff"
        />
      </svg>
    </>
  );
};

export const TypingDots = () => {
  return (
    <>
      <svg height="30" width="40">
        <circle className="animate-blink" cx="10" cy="20" r="3" fill="grey" />
        <circle
          className="animate-blink delay-250ms"
          cx="20"
          cy="20"
          r="3"
          fill="grey"
        />
        <circle
          className="animate-blink delay-500ms"
          cx="30"
          cy="20"
          r="3"
          fill="grey"
        />
      </svg>
    </>
  );
};
