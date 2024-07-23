import React from "react";

const WeatherInfoCard = ({ data }) => {
  return (
    <div className="border rounded-md p-4 hover:bg-yellow-300 transition-colors bg-yellow-200 duration-300 ease-in-out flex justify-between ">
      <div>
        <span className="text-gray-900">
          <img src={data.current.condition.icon} alt="" />
        </span>
        <span className="text-gray-800 font-medium">
          {data.current.condition.text}
        </span>
      </div>
      <div className="flex justify-center items-center flex-col gap-2">
        <span className="text-gray-800 font-medium text-4xl">
          {data.current.temp_c}°C
        </span>
        <span> Feels like : {data.current.feelslike_c}°C</span>
      </div>
    </div>
  );
};

export default WeatherInfoCard;
