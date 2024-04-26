import React from "react";
import mask from "../mask.png";
import a from "../1.jpg";
import b from "../2.jpg";
import c from "../3.jpg";
import d from "../4.jpg";

const QuestionScreen = () => {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg mx-auto">
      <nav>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="md:flex items-center space-x-8 mx-auto">
              <a
                href="/#"
                className="text-blue-800  px-3 py-2 rounded-md text-sm font-medium underline"
              >
                Study
              </a>
              <a
                href="/#"
                className="text-gray-600  px-3 py-2 rounded-md text-sm font-medium"
              >
                Quiz
              </a>
              <a
                href="/#"
                className="text-gray-600  px-3 py-2 rounded-md text-sm font-medium"
              >
                Test
              </a>
              <a
                href="/#"
                className="text-gray-600  px-3 py-2 rounded-md text-sm font-medium"
              >
                Game
              </a>
              <a
                href="/#"
                className="text-gray-600  px-3 py-2 rounded-md text-sm font-medium"
              >
                Others
              </a>
            </div>
          </div>
        </div>
      </nav>
      <img className="w-full" src={mask} alt="" />

      <div className="max-w-6xl mx-auto px-4 flex  justify-between h-16 md:flex items-center space-x-8">
        <div>
          <img src={a} alt="" />
        </div>
        <div>
          <img src={b} alt="" />
        </div>
        <div className="text-bold text-blue-800">01/10</div>
        <div>
          <img src={c} alt="" />
        </div>
        <div>
          <img src={d} alt="" />
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
