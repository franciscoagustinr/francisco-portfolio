import React, { useEffect, useMemo, useRef, useState } from "react";
import FranciscoWithBeto from "../assets/FranciscoWithBeto.JPG";

export const PopUpAbout = ({ isPopUpOpen, setIsPopUpOpen }) => {
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
      <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50">
        <div
          ref={popupRef}
          className="relative h-4/5 w-5/12 bg-sky-200 border border-solid border-sky-600 rounded-2xl z-20 overflow-y-scroll"
        >
          <IconCross
            className="absolute right-2 top-2 cursor-pointer z-50"
            onClick={handleClosePopUp}
          />
          <div className="flex gap-4 mt-2.5 mx-4 mr-12 pb-4">
            <div className="flex flex-col gap-3 flex-1 text-black ">
              <ChatSimulator />
            </div>
            <div className="flex flex-col bg-yellow-500 w-1/4">stats</div>
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
      "his name is Beto 🐶",
      "Let's chat, laugh and craft ideas together! 💡",
    ],
    []
  );
  const [reactions, setReactions] = useState(Array(messages.length).fill(null));
  const emojiReactions = ["😄", "⭐️⭐️⭐️", "🤓", "🌈", "😍", "💖", "✨"];

  const endOfMessagesRef = useRef();
  const [count, setCount] = useState(0);

  const handleReaction = (index) => {
    const emoji = emojiReactions[index] || "";
    setReactions((prevReactions) => {
      const newReactions = [...prevReactions];
      newReactions[index] = emoji;
      return newReactions;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < messages.length) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [count, messages.length]);

  const visibleMessages = messages.slice(0, count);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [visibleMessages]);

  return (
    <div>
      {visibleMessages.map((message, index) => (
        <div
          key={index}
          className="appear-animation relative rounded-2xl rounded-bl-md bg-[#ffffff] p-2 text-sm pl-3 my-4 cursor-pointer"
          onClick={() => handleReaction(index, emojiReactions[0])}
        >
          <div className="absolute bottom-0 -left-1 rotate-90 w-0 h-0 border-t-8 border-l-8 border-t-white border-l-transparent" />
          {message === "img" ? (
            <div className="-ml-1">
              <img
                src={FranciscoWithBeto}
                alt="Beto & Me"
                className="w-full rounded-lg"
              />
            </div>
          ) : (
            <span>{message}</span>
          )}
          {reactions[index] && (
            <span className="absolute border border-gray-300 -bottom-3.5 right-2 text-md bg-white py-0.5 px-2 rounded-full">
              {reactions[index]}
            </span>
          )}
        </div>
      ))}
      {count < messages.length && (
        <>
          <div className="relative rounded-2xl rounded-bl-md bg-[#ffffff] p-0.5q text-sm my-2 max-w-16">
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
        className={`w-6 ${className} `}
        viewBox="0 -0.5 25 25"
        fill="#000"
        onClick={onClick}
      >
        <path
          d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
          fill="#000"
        />
      </svg>
    </>
  );
};

export const TypingDots = () => {
  return (
    <>
      <svg height="30" width="40">
        <circle class="dot" cx="10" cy="20" r="3" fill="grey" />
        <circle class="dot" cx="20" cy="20" r="3" fill="grey" />
        <circle class="dot" cx="30" cy="20" r="3" fill="grey" />
      </svg>
    </>
  );
};
