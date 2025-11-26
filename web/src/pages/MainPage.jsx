import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const MainPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-gray-50">
      
      <SideBar />

      {/* Contenido principal */}
      <div className="flex-1 md:ml-[260px] p-4">
        <Outlet /> 
      </div>
    </div>
  );
};

export default MainPage;
