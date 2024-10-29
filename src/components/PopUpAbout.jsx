import React from "react";
import FranciscoPhoto from "../assets/francisco-photo.png";

export const PopUpAbout = ({ isPopUpOpen, setIsPopUpOpen }) => {
  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };
  return (
    isPopUpOpen && (
      <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50">
        <div className="relative h-2/3 w-5/12 bg-sky-200 border border-solid border-sky-600 rounded-2xl z-20">
          <IconCross
            className="absolute right-2 top-2 cursor-pointer z-50"
            onClick={handleClosePopUp}
          />
          <div className="z-30 relative flex justify-start items-center gap-5 mt-3 ml-7 pr-4">
            <div className="bg-[#E4C087] rounded-full ">
              <img src={FranciscoPhoto} alt="Francisco" className="w-32" />
            </div>
            <div className="flex flex-col font-Karla">
              <p>
                Hi! <span className="text-lg">👋🏻</span> I'm
              </p>
              <h1 className="font-Lilita text-3xl -mt-2">
                Francisco Agustín Rodríguez
              </h1>
              <p className="">Frontend Developer 🎨</p>
            </div>
          </div>
        </div>
      </div>
    )
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
