import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCameraVideoFill } from "react-icons/bs";
const Schedule = () => {
  const meetingCard = [
    {
      key: 1,
    },
    {
      key: 2,
    },
    {
      key: 3,
    },
    {
      key: 4,
    },
  ];
  return (
    <div className="flex-1 flex flex-col items-center p-6 rounded-xl bg-white shadow-xl">
      <div className="flex justify-between items-center w-full bg-gray-200 p-1.5 px-2 rounded-md mb-5">
        <div className="flex gap-3 items-center">
          <IoCalendarOutline size={20}></IoCalendarOutline>
          <p className="">Monday, 14 October 2024</p>
          <MdKeyboardArrowDown></MdKeyboardArrowDown>
        </div>
        <div className="flex items-center gap-2">
          <FaArrowLeftLong className="text-gray-400"></FaArrowLeftLong>
          <FaArrowRightLong></FaArrowRightLong>
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-1">
        {meetingCard.map((card, index) => (
          <React.Fragment key={card.key}>
            <div className="flex justify-start items-center gap-4 mb-2 mt-2">
              <div className="flex flex-col">
                <p className="font-semibold text-lg">11:30 AM</p>
                <p className="text-gray-400 text-sm">11:30 AM</p>
              </div>
              <div className="w-[2px] h-[52px] bg-ccyan"></div>
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <p className="text-sm text-gray-400">{index === 0 ? "Live" : "Upcoming"}</p>
                  <BsCameraVideoFill className={`${index == 0 ? "text-red-500" : "text-blue-500"}`}></BsCameraVideoFill>
                </div>
                <h1 className="font-semibold text-lg">UX Webinar</h1>
              </div>
            </div>
            {index !== 3 && <hr className="text-gray-400" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
