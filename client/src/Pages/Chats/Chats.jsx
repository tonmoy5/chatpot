import React, { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import Chat from "../Chat/Chat";
import userData from "../../Assets/UserData/UserData";


// console.log(userData);

const Chats = () => {
  const [selected, setSelected] = useState(1);
  const [showChat, setShowChat] = useState(true);
  // console.log(selected);
  return (
    <div className="flex w-full relative">
      <div className={`${showChat ? 'right-[100vw] md:block ' : 'right-0 block'} md:static absolute duration-300 top-0 w-full h-screen pt-5 md:w-[358px] md:shadow z-[5] bg-white`}>
        {/* search */}
        <div className="w-full h-[42px] px-3 relative md:w-[301px]  md:px-0 md:mx-auto ">
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
          {userData.chatList.map((chat) => {
            return (
              <div
                onClick={() => {
                  setSelected(chat.id);
                  setShowChat((prevShowDiv1) => !prevShowDiv1)
                }}
                className={
                  chat.id === selected
                    ? "w-full h-20 flex items-center p-1 bg-[#E1F7FF] cursor-pointer md:w-[358px]"
                    : "w-full h-20 flex items-center p-1 hover:bg-gray-100 cursor-pointer md:w-[358px]"
                }
              >
                <div className="w-full md:w-[358px]">
                  {/* friend pic and details */}
                  <div className="grid grid-cols-5 px-2">
                    {/* friend's pic */}
                    <div className="flex justify-start items-center">
                      <img
                        className="w-16 h-16 rounded-full"
                        src={chat.friend.avatar}
                        alt=""
                      />
                    </div>

                    {/* friend's name and chat details */}
                    <div className="flex flex-col justify-center col-span-3 pl-2">
                      <p className="text-lg font-semibold">
                        {chat.friend.name}
                      </p>
                      <p className="text-xs text-[#545454]">
                        {chat.lastMessage}
                      </p>
                      <p className="text-xs text-[#8A8A8A]">{chat.time}</p>
                    </div>

                    {/* number of unseen messages */}
                    <div className="flex justify-center items-center">
                      <p
                        className={
                          chat.unseenMessages != 0
                            ? "flex justify-center items-center text-white text-xs bg-[#00ACED] w-5 h-5 rounded-full"
                            : ""
                        }
                      >
                        {chat.unseenMessages != 0 ? chat.unseenMessages : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* chat */}
      <div className={`${showChat ? 'block' : 'md:block block'} w-full relative`}>
        {<Chat chatID={selected} setShowChat={setShowChat} />}
      </div>
    </div>
  );
};

export default Chats;
