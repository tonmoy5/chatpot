import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AudioCall from "../Components/Call/AudioCall";
import Popup from "../Components/Call/Popup";
import Sidebar from "../Components/Sidebar/Sidebar";


const Main = () => {
  const [IsIncomingCall, setIsIncomingCall] = useState(true)
  const [isReceived, setIsReceived] = useState(false)
  const [callerInfo, setCallerInfo] = useState([])
  const isAudioCall = true;
  return (
    <div className="relative w-full h-screen md:flex">
      <Sidebar />

      {/* call popup */}
      {IsIncomingCall && <Popup setIsIncomingCall={setIsIncomingCall} isAudioCall={isAudioCall} setIsReceived={setIsReceived} setCallerInfo={setCallerInfo} />}

      {/* audio call */}
      {isReceived && <AudioCall callerInfo={callerInfo} setIsReceived={setIsReceived} />}

      {/* Content area */}
      <main className="md:w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
