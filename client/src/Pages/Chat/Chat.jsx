import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react"; // import your emoji picker library
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
import chatBG from '../../Assets/img/chatBG.jpg'
import Popup from "../../Components/Sidebar/Call/Popup";

const Chat = (props) => {
  const chatID = props.chatID;
  const divRef = useRef(null);
  const inputRef = useRef(null);
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
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
    <div className="">
      {/* chat heder */}
      <div className="flex bg-chat-header right-0 top-0 absolute w-full border-b items-center justify-between md:pl-5 pr-3 py-2 shadow-sm backdrop-blur-md transition-colors duration-500 ">
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
                  ? "text-[#1D800D] font-bold text-xs flex items-center gap-2"
                  : "text-[#A90000] font-bold text-xs"
              }
            >
              {status}
              <span className={status=='Online'? 'relative mt-1 flex h-2 w-2':'hidden'}>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
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
      
      <div
        className=" h-[calc(100vh-60px)] md:h-[100vh] flex flex-col justify-between bg-center "
        onClick={() => isEmojiOpen && setIsEmojiOpen(false)}
        
      >
        {/* Top Section Start */}
        <div className="">
          <div
            ref={divRef}
            className=" w-full py-20 px-2 h-[calc(100vh-110px)] md:h-[calc(100vh-80px)] customScroll  overflow-y-scroll "
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
                      ? "bg-chat-receiver-text-bg rounded-full px-2 py-1 m-2 max-w-[500px] shadow-md"
                      : "bg-[#FFFFFF] rounded-full px-2 py-1 m-2  shadow-md"
                  }
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Top Section End */}

        {/* Input Section Start */}
        <div className="w-full flex items-center justify-center">
          <div className="mb-3 w-5/6 md:w-1/2 md:min-w-[600px] h-10 md:h-14 rounded-full backdrop-blur-md pr-3 shadow-md bottom-20 md:bottom-5 flex justify-between items-center">
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
              <span
                className="md:mr-4 mr-2 text-lg hover:scale-125 cursor-pointer transition-all"
                onClick={() => setIsEmojiOpen(!isEmojiOpen)}
              >
                <BsEmojiSmile className="relative" />
              </span>
              <button
                onClick={handleMessage}
                className="md:w-8 md:h-8 w-5 h-5 rounded-full md:bg-slate-200 flex items-center justify-center transition-all hover:scale-125"
              >
                <IoIosSend />
              </button>

              {/* emoji picker  starts */}

              <div className="absolute bottom-16 -right-3">
                {isEmojiOpen && (
                  <EmojiPicker
                    onEmojiClick={(event, emojiObject) => {
                      // handle emoji click here
                      console.log(emojiObject);
                    }}
                  />
                )}
              </div>
              {/* emoji picker ends  */}
            </div>
          </div>
        </div>


        <img className="absolute -z-10 opacity-20 w-full h-screen" src={chatBG} alt="" />
      </div>
    </div>
  );
};

export default Chat;
