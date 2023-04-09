import React, { useEffect, useRef, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import {
  IoIosArrowBack,
  IoIosAttach,
  IoIosCall,
  IoIosSend,
} from "react-icons/io";
import { SlMagnifier } from "react-icons/sl";
import { BsEmojiSmile } from "react-icons/bs";
import userData from "../../Assets/UserData/UserData";

const Chat = (props) => {
  const chatID = props.chatID;
  const divRef = useRef(null);
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const chat = userData.chatList.find((chat) => chat.id === chatID);
  const status = chat?.friend?.status ? "Online" : "Offline";

  const sortedMessages = [
    ...chat?.messages?.sender?.me,
    ...chat?.messages?.sender?.friend,
  ]
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
    .map((message) => {
      const senderType = chat.messages.sender.me.find(
        (m) => m.id === message.id
      )
        ? "me"
        : "friend";
      return { ...message, sender: senderType };
    });

  const handleMessage = (event) => {
    const input = inputRef.current;
    const newMessage = inputRef.current.value;
    const newMessageObj = {
      timestamp: new Date(),
      text: newMessage,
    };

    // Add the new message to the messages array
    chat?.messages?.sender?.me?.push(newMessageObj);
    setMessages([newMessageObj]);

    // Clear the input field
    input.value = "";
  };

  useEffect(() => {
    const objDiv = divRef.current;
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [divRef, chatID]);

  return (
    <div className="relative">
      {/* chat heder */}
      <div className="flex right-0 top-0 absolute w-full border-b items-center justify-between md:pl-5 pr-3 py-2 shadow-sm backdrop-blur-md transition-colors duration-500 ">
        {/* friends profile */}
        <div className="grid grid-cols-5  ">
          {/* back arrow */}
          <div
            onClick={() => {
              props.setShowChat((prevShowDiv1) => !prevShowDiv1);
            }}
            className="flex justify-center items-center md:hidden hover:scale-105"
          >
            <IoIosArrowBack className="text-xl" />
          </div>
          {/* friend's pic */}
          <div className="flex justify-start items-center">
            <img
              className="w-8 h-8 md:w-16 md:h-16 rounded-full"
              src={chat.friend.avatar}
              alt=""
            />
          </div>

          {/* friend's details */}
          <div className="flex flex-col justify-center col-span-2 pl-2">
            <p className="text-lg font-semibold">{chat.friend?.name}</p>
            <p className="text-xs text-[#797979]">{chat.friend?.userName}</p>
            <p
              className={
                chat.friend?.status
                  ? "text-[#1D800D] font-bold text-xs"
                  : "text-[#A90000] font-bold text-xs"
              }
            >
              {status}
            </p>
          </div>
        </div>

        {/* menu */}
        <div className=" flex gap-5 text-gray-500 ">
          <div className="flex justify-center items-center ">
            <SlMagnifier className="text-xl" />
          </div>

          <button
            onClick={() => console.log("calling")}
            className="hover:scale-110"
          >
            <IoIosCall className="text-xl text-[#797979] hover:text-[#404040]" />
          </button>

          <div className="flex justify-center items-center ">
            <CiMenuKebab className="text-xl" />
          </div>
        </div>
      </div>

      {/* chats */}
      <div>
        <div
          ref={divRef}
          className="bg-[#EBEBEB] w-full h-screen py-20 px-2 overflow-y-auto"
        >
          {sortedMessages?.map((message, index) => (
            <div
              key={index}
              className={
                message.sender === "me"
                  ? "flex justify-end"
                  : "flex justify-start"
              }
            >
              <p
                className={
                  message.sender === "me"
                    ? "bg-[#e8dcdc] rounded-full px-2 py-1 m-2 max-w-[500px] shadow"
                    : "bg-[#FFFFFF] rounded-full px-2 py-1 m-2  shadow"
                }
              >
                {message.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 w-5/6 md:w-1/2 md:min-w-[600px] h-10 md:h-14 rounded-full backdrop-blur-md pr-3 shadow-md bottom-20 md:bottom-5 flex justify-between items-center">
        <input
          className="w-3/4 h-full rounded-full pl-6 pr-12"
          type="text"
          ref={inputRef}
          placeholder="Type your message here"
        />
        <div className="flex items-center justify-center w-1/4 h-full">
          <span className="md:mr-4 mr-2 text-lg hover:scale-125 cursor-pointer transition-all">
            <IoIosAttach />
          </span>
          <span className="md:mr-4 mr-2 text-lg hover:scale-125 cursor-pointer transition-all">
            <BsEmojiSmile />
          </span>
          <button
            onClick={handleMessage}
            className="md:w-8 md:h-8 w-5 h-5 rounded-full md:bg-slate-200 flex items-center justify-center transition-all hover:scale-125"
          >
            <IoIosSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
