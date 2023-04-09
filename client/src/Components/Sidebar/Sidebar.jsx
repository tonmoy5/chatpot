import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { MdAddCall } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navs = [
    {
      id: 1,
      navName: "/friends",
      icon: <FaUserFriends />,
    },
    {
      id: 2,
      navName: "chats",
      icon: <BsFillChatDotsFill />,
    },
    {
      id: 3,
      navName: "calls",
      icon: <MdAddCall />,
    },
    {
      id: 4,
      navName: "settings",
      icon: <FiSettings />,
    },
  ];

  return (
    <div className="w-full h-16 flex items-center justify-evenly text-xl bg-gray-100 fixed z-10 bottom-0 md:relative md:w-20 md:h-screen md:flex md:flex-col md:justify-normal md:gap-7 md:pt-10 md:text-3xl lg:text-4xl">
      {navs.map((nav,index) => (
        <NavLink
        key={index}
          to={nav.navName}
          className={({ isActive }) =>
            " transition duration-150 truncate " +
            (isActive
              ? "text-[#00ACED] p-2"
              : "text-[#707070] p-2 hover:text-[#404040]")
          }
        >
          {nav.icon}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
