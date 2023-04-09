import React, { useState } from "react";
import { MdCallMade, MdCallMissed, MdCallReceived } from "react-icons/md";

import { SlMagnifier } from "react-icons/sl";
import userData from "../../Assets/UserData/UserData";

const Calls = () => {
  const [selected, setSelected] = useState(1);
  const callIcons = {
    dialed: <MdCallMissed />,
    received: <MdCallMissed />,
    missed: <MdCallMissed />,
  };

  console.log(userData.callList);

  return (
    <div className="w-full h-screen pt-5  md:w-[358px] md:shadow">
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

      {/* call list */}
      <div className="flex flex-col  mt-5">
        {userData.callList.map((call, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setSelected(call.id);
              }}
              className={
                call.id === selected
                  ? "md:w-[358px] h-20 bg-[#E1F7FF] flex p-1 items-center cursor-pointer"
                  : "md:w-[358px] h-20 hover:bg-gray-100 flex p-1 items-center cursor-pointer"
              }
            >
              <div className="w-full md:w-[358px]">
                {/* friend pic and details and call details */}
                <div className="grid grid-cols-5 px-2">
                  {/* friend's pic */}
                  <div className="flex justify-start items-center">
                    <img
                      className="w-1h-16 h-16 rounded-full"
                      src={call.friend.avatar}
                      alt=""
                    />
                  </div>
                  {/* friend's details */}
                  <div className="flex flex-col justify-center col-span-3 pl-2">
                    <p className="text-lg font-semibold">{call.friend.name}</p>
                    <p className="text-xs text-[#797979]">
                      {call.friend.userName}
                      {call.time}
                    </p>
                    <p
                      className={
                        call._type === "dialed"
                          ? "text-[#00ACED] text-xs font-semibold"
                          : call._type === "received"
                          ? "text-[#1D800D] text-xs font-semibold"
                          : "text-red-600 text-xs font-semibold"
                      }
                    >
                      {call.time}
                      <span className="text-xs font-normal">
                        {call._type === "missed"
                          ? ""
                          : " (" + call.callDuration + ")"}
                      </span>
                    </p>
                  </div>
                  {/* call icon */}
                  <div className="flex justify-center items-center">
                    <button>
                      {call._type === "dialed" ? (
                        <MdCallMade className="text-[#00ACED]" />
                      ) : call._type === "received" ? (
                        <MdCallReceived className="text-[#1D800D]" />
                      ) : (
                        <MdCallMissed className="text-red-600" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calls;
