import React, { useEffect, useRef } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosArrowBack, IoIosCall } from "react-icons/io";
import { SlMagnifier } from "react-icons/sl";
import userData from "../UserData/UserData";

const Chat = (props) => {
  const chatID = props.chatID;
  const divRef = useRef(null)
  console.log(chatID);
  const chat = userData.chatList.find((chat) => chat.id === chatID);
  const status = chat.friend.status ? "Online" : "Offline";
  const sortedMessages = [
    ...chat.messages.sender.me,
    ...chat.messages.sender.friend,
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

  console.log(sortedMessages);

  useEffect(() => {
    const objDiv = divRef.current
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [divRef, chatID])

  return (
    <div className="relative">
      {/* chat heder */}
      <div className="flex right-0 top-0 absolute w-full border-b bg-[#f0efef] items-center justify-between md:pl-5 pr-3 py-2 shadow-sm bg-slate-50/60 backdrop-blur-xl transition-colors duration-500 ">
        {/* friends profile */}
        <div className="grid grid-cols-5  ">

          {/* back arrow */}
          <div onClick={() => { props.setShowChat((prevShowDiv1) => !prevShowDiv1) }} className="flex justify-center items-center md:hidden hover:scale-105">
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
            <p className="text-lg font-semibold">{chat.friend.name}</p>
            <p className="text-xs text-[#797979]">{chat.friend.userName}</p>
            <p
              className={
                chat.friend.status
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
        <div ref={divRef} className="bg-[#EBEBEB] w-full h-screen py-20 px-2 overflow-y-auto">
          {sortedMessages?.map((message) => (
            <div>
              <div
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
            </div>
          ))}
        </div>
      </div>

{/* message input */}
<div className="absolute bottom-0 w-full bg-[#f0efef] px-3 py-2 flex items-center">
  <input
    type="text"
    placeholder="Type a message"
    className="flex-1 mr-2 bg-transparent outline-none"
    value={newMessage}
    onChange={(e) => setNewMessage(e.target.value)}
    onKeyPress={handleKeyPress}
  />
  <button
    className="text-blue-500 hover:text-blue-600"
    onClick={handleSend}
  >
    Send
  </button>
</div>

    </div>
  );
};

export default Chat;
