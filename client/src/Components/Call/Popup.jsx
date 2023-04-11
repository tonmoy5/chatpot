import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import userData from "../../Assets/UserData/UserData";

const Popup = (props) => {
  // set popup size
  const [popupSize, setPopupSize] = useState(
    "w-[calc(100vw-30px)] md:w-[300px] h-24 md:min-w-[400px] flex duration-300"
  );
  return (
    // call popup
    <div
      onClick={() =>
        setPopupSize(
          popupSize ===
            "w-[calc(100vw-30px)] md:w-[300px] h-24 md:min-w-[400px] flex duration-300"
            ? "w-[calc(100vw-30px)] md:w-[calc(40%-100px)] md:min-w-[400px] h-[calc(100vh-200px)] flex flex-col duration-300 py-20"
            : "w-[calc(100vw-30px)] md:w-[300px] h-24 md:min-w-[400px] flex duration-300"
        )
      }
      className={`${popupSize} cursor-pointer gap-3 p-3 items-center backdrop-blur-sm rounded-b-xl absolute z-10  top-0 left-1/2 transform -translate-x-1/2  shadow-xl justify-between `}
    >
      {/* caller info */}
      <div className={popupSize === 'w-[calc(100vw-30px)] md:w-[300px] h-24 md:min-w-[400px] flex duration-300' ? " flex gap-2" : "block mb-3"}>
        <img
          className={popupSize === 'w-[calc(100vw-30px)] md:w-[300px] h-24 md:min-w-[400px] flex duration-300' ? " rounded-full w-12 h-12" : "rounded-full w-28 h-28 mb-3"}
          src={userData.friends[0].avatar}
          alt=""
        />
        <div>
          <p className={popupSize === 'w-[calc(100vw-30px)] md:w-[300px] h-24 md:min-w-[400px] flex duration-300' ? " font-semibold" : "font-semibold text-center text-xl"}>{userData.friends[0].name}</p>
          <p className={popupSize === 'w-[calc(100vw-30px)] md:w-[300px] h-24 md:min-w-[400px] flex duration-300' ? " font-thin" : "font-thin text-center text-xl"}>Incoming call...</p>
        </div>
      </div>
      {/* call options */}
      <div onClick={(event) => { event.stopPropagation() }} className="flex justify-center items-center gap-3">

        {/* cancel button */}
        <button onClick={() => props.setIsIncomingCall(false)} className={popupSize === 'w-[calc(100vw-30px)] md:w-[300px] h-24 md:min-w-[400px] flex duration-300' ? "p-2 rounded-full hover:shadow-xl text-xl bg-red-400 text-white hover:scale-110 transition-all" : "p-2 rounded-full hover:shadow-xl text-3xl bg-red-400 text-white hover:scale-110 transition-all"}>
          <FiPhoneCall className="" />
        </button>

        {/* receive button */}
        <span class="relative flex justify-center items-center h-10 w-10">
          <span class="animate-ping hover:animate-none absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-8 w-8 justify-center items-center">
            <button className={popupSize === 'w-[calc(100vw-30px)] md:w-[300px] h-24 md:min-w-[400px] flex duration-300' ? "p-2 absolute rounded-full  hover:shadow-xl   text-xl bg-green-400 text-white hover:scale-110 transition-all" : "p-2 absolute rounded-full  hover:shadow-xl   text-3xl bg-green-400 text-white hover:scale-110 transition-all"}>

              {props.isAudioCall ? (
                <FiPhoneCall onClick={() => {
                  props.setCallerInfo(userData.friends[0])
                  props.setIsReceived(true)
                  props.setIsIncomingCall(false)
                }} />
              ) : (
                <HiOutlineVideoCamera onClick={() => {
                  props.setCallerInfo(userData.friends[0])
                  props.setIsReceived(true)
                  props.setIsIncomingCall(false)
                }} />
              )}
            </button>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Popup;
