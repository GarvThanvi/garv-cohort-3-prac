import React from "react";

const ImageCard = () => {
  return (
    <div className="bg-white w-60 h-88 shadow-2xl rounded-2xl flex flex-col items-center p-5 pt-12 gap-2  xl:relative xl:bottom-44">
      <img
        src="/pfp.jpg"
        className="h-32 w-32 object-cover rounded-lg mb-2"
        alt=""
      />
      <p className="text-nblue font-bold">Prabhleen Kaur</p>
      <div className="flex flex-col items-center justify-center">
        <p className="text-gray-500">prabhleen@gmail.com</p>
        <p className="text-gray-500">9876989981</p>
      </div>
      <p className="text-gray-500">Delhi, India</p>
    </div>
  );
};

export default ImageCard;
