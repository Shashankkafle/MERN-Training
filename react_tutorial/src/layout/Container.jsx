import React from "react";

const Container = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-purple-600 min-h-screen flex justify-center items-center w-full">
      <div className="max-w-md bg-white p-8 rounded-md shadow-lg w-full h-auto">
        {children}
      </div>
    </div>
  );
};

export default Container;
