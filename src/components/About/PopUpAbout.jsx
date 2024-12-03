import React, { useEffect, useMemo, useRef, useState } from 'react';
import FranciscoWithBeto from '../../assets/FranciscoWithBeto.JPG';
import { WorksContainer } from './WorksContainer';
import { usePopupStore } from '../../stores/usePopUp';
import gsap from 'gsap';

export const PopUpAbout = ({ hatName }) => {
  const popupRef = useRef();
  const closePopUp = usePopupStore((state) => state.closePopUp);
  const isPopUpOpen = usePopupStore((state) => state.isPopUpOpen);

  const closePopup = () => {
    if (popupRef.current) {
      // Animate to the target position
      gsap.to(popupRef.current, {
        top: '0.5rem', // Tailwind top-6
        left: '0.5rem', // Tailwind left-2
        scale: 0, // Optional: Shrink effect
        opacity: 0, // Fade out
        duration: 0.5, // Animation duration in seconds
        onComplete: () => {
          closePopUp(); // Hide the popup after animation
        },
      });
    }
  };

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      // closePopUp();
      closePopup();
    }
  };

  useEffect(() => {
    if (isPopUpOpen && popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { scale: 0, opacity: 0, rotation: -180 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: 'bounce.out' }
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
          className="relative top-0 z-20 mx-1 h-[45rem] w-auto overflow-x-hidden overflow-y-scroll rounded-2xl border border-solid border-gray-100 bg-gray-600 bg-opacity-20 shadow-2xl md:h-[43rem] lg:top-2 4xl:!w-[70rem] 4xl:scale-[2.9]"
        >
          <IconCross
            className="absolute right-2 top-2 z-50 cursor-pointer"
            onClick={closePopUp}
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
                      ][index % 7]
                    }`}
                  >
                    {letter}
                  </span>
                ))}
              </h2>
              <div className="mt-2 px-2 md:mt-8 lg:w-full lg:px-6">
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
      "Hi there! <span class='text-xl animate-wavingHand inline-block'>👋🏻</span> I’m Francisco Agustín Rodríguez —but you can call me Fran.",
      "I’m a front-end developer hailing from Buenos Aires, Argentina <span class='text-xl '>🇦🇷</span>",
      "I bring websites to life by creating interactive <span class='text-xl inline-block animate-shake'>🕹️</span> visually stunning experiences <span class='text-xl '>🎨</span> with a focus on seamless motion and user-friendly design <span class='text-xl '>✨</span>",
      "This is my teammate <span class='text-xl inline-block animate-bounce duration-150'>👇🏻</span><span class='text-xl inline-block animate-bounce delay-150 duration-300'>👇🏻</span>",
      'img',
      "Beto, my loyal sidekick <span class='text-2xl inline-block animate-shake '>🐶</span> He keeps the creativity flowing! <span class='text-xl '>💫</span>",
      "Let’s connect <span class='text-xl animate-bounce inline-block'>🤝🏻</span> share some laughs <span class='text-xl animate-spin inline-block'>🙂</span> and turn your ideas into reality! <span class='text-xl inline-block'>🚀</span> ",
    ],
    []
  );
  const [reactions, setReactions] = useState(
    messages.map(() => ({ emoji: null, count: 0 }))
  );
  const emojiReactions = ['😄', '⭐️⭐️⭐️', '🤓', '🌈', '😍', '💖', '✨'];

  const endOfMessagesRef = useRef();
  const [count, setCount] = useState(0);
  const [showTypingDots, setShowTypingDots] = useState(true);

  const handleReaction = (index) => {
    setReactions((prevReactions) => {
      return prevReactions.map((reaction, i) =>
        i === index
          ? {
              emoji: reaction.emoji || emojiReactions[index] || '',
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
        setShowTypingDots(false); // Ocultar typingDots mientras se muestra un mensaje
        setTimeout(() => setShowTypingDots(true), 400); // Mostrar typingDots después de un tiempo
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
          className={`appear-animation relative max-w-max cursor-pointer select-none rounded-2xl rounded-bl-md bg-[#ffffff] py-2 pl-3 pr-2 font-KarlaLight text-sm shadow-sm transition-all duration-300 ease-in-out hover:!scale-[1.009] 4xl:text-lg ${
            reactions[index].emoji ? 'mb-5' : 'mb-2'
          } `}
          onClick={() => handleReaction(index)}
        >
          <div className="absolute -left-1 bottom-0 h-0 w-0 rotate-90 border-l-8 border-t-8 border-l-transparent border-t-white" />
          {message === 'img' ? (
            <div className="-ml-1 max-w-[340px]">
              {/* <ArcCard /> */}
              <img
                src={FranciscoWithBeto}
                alt="Beto & Me"
                className="w-full rounded-lg"
              />
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: message }} />
          )}
          {reactions[index].emoji && (
            <span className="appear-animation text-md absolute -bottom-3.5 right-2 rounded-full border border-gray-300 bg-white px-2 py-0.5 shadow-sm duration-0">
              {reactions[index].emoji}
              <span
                key={`${index}-${reactions[index].count}`}
                className="appear-animation relative ml-0.5 pl-0.5 text-xs text-gray-500"
              >
                {reactions[index].count}
              </span>
            </span>
          )}
        </div>
      ))}
      {count < messages.length && showTypingDots && (
        <>
          <div className="appear-animation relative my-2 max-w-16 rounded-2xl rounded-bl-md bg-[#ffffff] p-0 text-sm">
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
