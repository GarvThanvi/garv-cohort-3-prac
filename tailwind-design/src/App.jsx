import React from "react";
import WebinarOptions from "./components/WebinarOptions";
import Sidebar from "./components/Sidebar";
import UpperText from "./components/UpperText";
import ImageCard from "./components/ImageCard";
import Schedule from "./components/Schedule";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar></Sidebar>
      <div className="h-screen flex-1 bg-black relative">
        <div className="absolute bottom-0 w-full h-10/12 p-8 pt-10 bg-white">
          <UpperText></UpperText>
          <div className="flex flex-col xl:flex-row flex-wrap gap-5 justify-between">
            <ImageCard></ImageCard>
            <Schedule></Schedule>
            <WebinarOptions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
