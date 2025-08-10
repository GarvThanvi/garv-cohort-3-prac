import React, { useState } from "react";
import { TiDeviceDesktop } from "react-icons/ti";
import { MdOutlineVideoSettings } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";

const Sidebar = () => {
  const [selected, setSelected] = useState(0); //index

  const sidebarOptions = [
    {
      text: "Home",
      icon: MdHomeFilled,
    },
    {
      text: "Webinars",
      icon: MdOutlineGroups,
    },
    {
      text: "Billing",
      icon: FaMoneyBillWave,
    },
    {
      text: "User Management",
      icon: FiUsers,
    },
    {
      text: "Settings",
      icon: LuSettings,
    },
  ];

  return (
    <div className="h-screen w-20 lg:w-84 p-5 lg:border lg:border-r-gray-300 transition-all delay-500">
      <div className="flex justify-between items-center mb-5">
        <div className="bg-nblue hidden lg:flex justify-center items-center gap-1 p-2 w-24 h-8 rounded-lg select-none">
          <div>
            <MdOutlineVideoSettings
              color="#2aa4a9"
              size={15}
            ></MdOutlineVideoSettings>
          </div>
          <div className="text-white text-[10px] tracking-wide">
            Webinar<span className="text-ccyan">.gg</span>
          </div>
        </div>
        <img
          src="/pfp.jpg"
          className="h-9 w-9 object-cover rounded-lg"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-2 font-medium">
        {sidebarOptions.map(({ text, icon: Icon }, index) => (
          <div
            key={index}
            className={`select-none flex justify-between items-center p-2 rounded-lg ${
              selected === index ? "bg-fblue" : "bg-white"
            }`}
            onClick={() => setSelected(index)}
          >
            <p
              className={`hidden lg:block ${
                selected === index ? "text-nblue" : "text-gray-400"
              } `}
            >
              {text}
            </p>
            <Icon color={selected == index ? "#002a5b" : "#cbd5e0"} size={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
