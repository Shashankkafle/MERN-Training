import React from "react";

const Button = ({ onButtonClick }) => {
  console.log("this is the fucntion passes as props >>>>>", onButtonClick);
  return (
    <button
      className="rounded border-black bg-slate-300 shadow p-3"
      onClick={onButtonClick}
    >
      Get Weather
    </button>
  );
};

export default Button;
