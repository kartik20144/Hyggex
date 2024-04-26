import React from "react";
import home from "../home.jpg";

const Path = () => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">
            <a href="/#">
              <img src={home} alt="home" />
            </a>
          </span>
          <span className="text-gray-600">{">"}</span>
          <a href="/#">
            <span className="text-gray-600">Flashcard</span>
          </a>
          <span className="text-gray-600">{">"}</span>
          <a href="/#">
            <span className="text-gray-600">Mathematics</span>
          </a>
          <span className="text-gray-600">{">"}</span>
          <a href="/#">
            <span className="text-blue-800 font-medium">
              Relations and Functions
            </span>
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 text-blue-800 font-bold text-4xl">
        Relations and Functions ( Mathematics )
      </div>
    </div>
  );
};

export default Path;
