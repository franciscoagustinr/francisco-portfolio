import React, { useEffect, useMemo, useRef, useState } from "react";
import FranciscoWithBeto from "../assets/FranciscoWithBeto.JPG";
import { WorksContainer } from "./WorksContainer";

export const PopUpAbout = ({ isPopUpOpen, setIsPopUpOpen, hatName }) => {
  const popupRef = useRef();

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsPopUpOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    isPopUpOpen && (
      // <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50">
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-50 bg-opacity-5 backdrop-blur-md ">
        <div
          ref={popupRef}
          // className="relative h-4/5 w-auto bg-sky-200 border border-solid border-sky-600 rounded-2xl z-20 overflow-y-scroll"
          // className="relative top-2 h-auto w-auto bg-sky-200 border border-solid border-sky-600 rounded-2xl z-20 overflow-y-scroll"
          className="relative top-2 h-[43rem] w-auto bg-gray-600 bg-opacity-20 border border-solid border-gray-100 rounded-2xl z-20 overflow-y-scroll"
          // className="relative h-[calc(100%-5px)] w-[calc(100%-5px)] bg-sky-200 border border-solid border-sky-600 rounded-2xl z-20 overflow-y-scroll"
        >
          <IconCross
            className="absolute right-2 top-2 cursor-pointer z-50"
            onClick={handleClosePopUp}
          />
          <div className="relative flex gap-4 pt-2.5 mx-4 mr-8 pb-1 min-h-full">
            <div className="flex flex-col justify-end gap-3 text-black w-[440px]">
              <ChatSimulator />
            </div>
            <div className="sticky top-8 flex flex-col items-center justify-start w-[450px] rounded-lg h-full">
              {/* <h2 className=" select-none relative  text-center font-RampartOne text-7xl leading-[4rem] text-[#fff]"> */}
              <h2 className=" select-none relative  text-center font-RecoletaBlack text-7xl tracking-wide -rotate-3 leading-[4rem] text-[#fff]">
                Selected <br /> Works
              </h2>
              <div className=" w-full px-6 mt-6">
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
      "Hey there! My name is Francisco Agustín Rodríguez.",
      "I'm a front-end developer based in Buenos Aires (🇦🇷 AR)",
      "I specialize in crafting interactive, visually engaging websites with a strong emphasis on smooth motion and user experience.",
      "This is my teammate 👇🏻",
      "img",
      "His name is Beto 🐶",
      "Let's chat, laugh and craft ideas together! 💡",
    ],
    []
  );
  const [reactions, setReactions] = useState(
    messages.map(() => ({ emoji: null, count: 0 }))
  );
  const emojiReactions = ["😄", "⭐️⭐️⭐️", "🤓", "🌈", "😍", "💖", "✨"];

  const endOfMessagesRef = useRef();
  const [count, setCount] = useState(0);
  const [showTypingDots, setShowTypingDots] = useState(true);

  const handleReaction = (index) => {
    setReactions((prevReactions) => {
      return prevReactions.map((reaction, i) =>
        i === index
          ? {
              emoji: reaction.emoji || emojiReactions[index] || "",
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
    if (endOfMessagesRef.current) {
      visibleMessages >= 4 &&
        endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [visibleMessages.length, showTypingDots]);

  return (
    <div className="h-full flex flex-col justify-end bg-transparent">
      {visibleMessages.map((message, index) => (
        <div
          key={index}
          className={`appear-animation relative rounded-2xl rounded-bl-md bg-[#ffffff] py-2 text-sm pl-3 pr-2 cursor-pointer select-none max-w-max transition-all duration-300 ease-in-out
            hover:!scale-[1.009] font-KarlaLight ${
              reactions[index].emoji ? "mb-4" : "mb-2"
            } `}
          onClick={() => handleReaction(index)}
        >
          <div className="absolute bottom-0 -left-1 rotate-90 w-0 h-0 border-t-8 border-l-8 border-t-white border-l-transparent" />
          {message === "img" ? (
            <div className="-ml-1 max-w-[340px]">
              {/* <ArcCard /> */}
              <img
                src={FranciscoWithBeto}
                alt="Beto & Me"
                className="w-full rounded-lg"
              />
            </div>
          ) : (
            <span>{message}</span>
          )}
          {reactions[index].emoji && (
            <span className="appear-animation duration-0 absolute border border-gray-300 -bottom-3.5 right-2 text-md bg-white py-0.5 px-2 rounded-full">
              {reactions[index].emoji}
              <span
                key={`${index}-${reactions[index].count}`}
                className="ml-0.5 text-xs text-gray-500 appear-animation pl-0.5 relative"
              >
                {reactions[index].count}
              </span>
            </span>
          )}
        </div>
      ))}
      {count < messages.length && showTypingDots && (
        <>
          <div className="appear-animation relative rounded-2xl rounded-bl-md bg-[#ffffff] p-0 text-sm my-2 max-w-16">
            <span className="typing-animation flex justify-center items-center">
              <TypingDots />
            </span>
          </div>
        </>
      )}
      <div ref={endOfMessagesRef}></div>
    </div>
  );
};

export const IconCross = ({ className, onClick }) => {
  return (
    <>
      <svg
        className={`w-6 ${className} hover:scale-125 transition-all duration-150 `}
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
          className="animate-blink delay-250ms "
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

export const ArcCard = () => {
  const boundingRef = useRef();

  return (
    <div className="flex flex-col [perspective: 800px]">
      <div
        onMouseLeave={() => (boundingRef.current = null)}
        onMouseEnter={(ev) => {
          boundingRef.current = ev.currentTarget.getBoundingClientRect();
        }}
        onMouseMove={(ev) => {
          if (!boundingRef.current) return;
          const x = ev.clientX - boundingRef.current.left;
          const y = ev.clientY - boundingRef.current.top;
          const xPercentage = x / boundingRef.current.width;
          const yPercentage = y / boundingRef.current.height;
          const xRotation = (xPercentage - 0.5) * 20;
          const yRotation = (0.5 - yPercentage) * 20;

          ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
          ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
          ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
          ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
        }}
        className="group relative w-full rounded-xl bg-[#fff] p-1 transition-transform ease-out hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.03)]"
      >
        <div className="max-w-[340px]">
          <img
            src={FranciscoWithBeto}
            alt="Beto & Me"
            className="w-full rounded-lg"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.3)_20%,transparent_80%)]" />
      </div>
    </div>
  );
};
