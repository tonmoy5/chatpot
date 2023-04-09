import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="relative w-full h-screen md:flex">
      <Sidebar />

      {/* Content area */}

      <main className="md:w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
