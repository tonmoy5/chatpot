import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Popup from "../Components/Sidebar/Call/Popup";
import AudioCall from "../Components/Sidebar/Call/AudioCall";


const Main = () => {
  const [IsIncomingCall, setIsIncomingCall]=useState(true)
  const [callerInfo, setCallerInfo]=useState([])
  const isAudioCall = true;
  return (
    <div className="relative w-full h-screen md:flex">
      <Sidebar />

      {/* call popup */}
      {IsIncomingCall && <Popup setIsIncomingCall={setIsIncomingCall} isAudioCall={isAudioCall} setCallerInfo={setCallerInfo}/>}

      {/* audio call */}
      {!IsIncomingCall && <AudioCall callerInfo={callerInfo}/>}
      
      {/* Content area */}
      <main className="md:w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
