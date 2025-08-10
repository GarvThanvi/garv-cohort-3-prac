import React from "react";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { PiFilmSlate } from "react-icons/pi";

const WebinarOptions = () => {
  return (
    <div className="bg-white w-[200px] sm:w-[320px] h-[280px] rounded-3xl shadow-xl grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 place-items-center p-5 sm:p-0">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="bg-cyan-300 h-16 w-16 rounded-xl flex items-center justify-center">
          <RiCalendarScheduleLine size={35} color="#002b5b" />
        </div>
        <p className="font-medium">Schedule a Webinar</p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="bg-cyan-300 h-16 w-16 rounded-xl flex items-center justify-center">
          <FaPlus size={35} color="#002b5b" />
        </div>
        <p className="font-medium">Join a Webinar</p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="bg-cyan-300 h-16 w-16 rounded-xl flex items-center justify-center">
          <PiFilmSlate size={35} color="#002b5b" />
        </div>
        <p className="font-medium">Open Recordings</p>
      </div>
    </div>
  );
};

export default WebinarOptions;
