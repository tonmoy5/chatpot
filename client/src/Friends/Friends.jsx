import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { SlMagnifier } from "react-icons/sl";
import Chat from "../Chat/Chat";
import userData from "../UserData/UserData";

const Friends = () => {
  const [selected, setSelected] = useState(1);
  const [chat, setChat] = useState(1);
  const [showChat, setShowChat] = useState(true);


  const handleCall = (id) => {
    console.log(id);
  };
  // console.log(chat);

  return (
    <div className=" flex">
      <div className={`${showChat ? 'right-[100vw] md:block ' : 'right-0 block'} md:static absolute duration-300 top-0 w-full h-screen pt-5 md:w-[358px] md:shadow z-[5] bg-white`}>

        {/* search */}
        <div className="w-full h-[42px] px-3 relative md:w-[301px] md:px-0 md:mx-auto ">
          <input
            className="w-full h-full bg-[#F3F3F3] rounded pl-4 pr-12"
            type="text"
            placeholder="Search"
          />
          <div className="absolute top-0 right-0 flex items-center justify-center h-full w-12 text-gray-500">
            <SlMagnifier />
          </div>
        </div>

        {/* friends list */}
        <div className="flex flex-col  mt-5">
          {userData.friends.map((friend) => {
            const status = friend.status ? "Online" : "Offline";
            //   console.log(status);
            return (
              <div
                onClick={() => {
                  const singleChat = userData.chatList.find(chat => chat.friend.id === friend.id);
                  setSelected(friend.id);
                  setChat(singleChat.id);
                  setShowChat((prevShowDiv1) => !prevShowDiv1)
                }}

                className={
                  friend.id === selected
                    ? "md:w-[358px] h-20 bg-[#E1F7FF] flex p-1 items-center cursor-pointer"
                    : "md:w-[358px] h-20 hover:bg-gray-100 flex p-1 items-center cursor-pointer"
                }
              >
                <div className="w-full md:w-[358px] ">
                  {/* friend pic and details and call icon */}
                  <div className="grid grid-cols-5 px-2">
                    {/* friend's pic */}
                    <div className="flex justify-start items-center">
                      <img
                        className="w-1h-16 h-16 rounded-full"
                        src={friend.avatar}
                        alt=""
                      />
                    </div>

                    {/* friend's details */}
                    <div className="flex flex-col justify-center col-span-3 pl-2">
                      <p className="text-lg font-semibold">{friend.name}</p>
                      <p className="text-xs text-[#797979]">
                        {friend.userName}
                      </p>
                      <p
                        className={
                          friend.status
                            ? "text-[#1D800D] font-bold text-xs"
                            : "text-[#A90000] font-bold text-xs"
                        }
                      >
                        {status}
                      </p>
                    </div>

                    {/* call icon */}
                    <div className="flex justify-center items-center">
                      <button
                        onClick={() => {
                          handleCall(friend.id);
                        }}
                        className="hover:scale-110 "
                      >
                        <IoIosCall className="text-2xl  text-[#797979] hover:text-[#404040]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* chat */}
      <div className={`${showChat ? 'block' : 'md:block hidden'} w-full relative`}>
        {<Chat chatID={chat} setShowChat={setShowChat} />}
      </div>
    </div>
  );
};

export default Friends;
