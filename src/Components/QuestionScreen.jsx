import React, { useState } from "react";
import mask from "../mask.png";
import a from "../1.jpg";
import b from "../2.jpg";
import c from "../3.jpg";
import d from "../4.jpg";

const QuestionScreen = () => {
  const [activeNavItem, setActiveNavItem] = useState(0);

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  const navItems = [
    { text: "Study" },
    { text: "Quiz" },
    { text: "Test" },
    { text: "Game" },
    { text: "Others" },
  ];

  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg mx-auto">
      <nav>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="md:flex items-center space-x-8 mx-auto">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="/#"
                  className={`${
                    activeNavItem === index
                      ? "text-blue-800 underline"
                      : "text-gray-600"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                  onClick={() => handleNavItemClick(index)}
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <img className="w-full" src={mask} alt="" />

      <div className="max-w-6xl mx-auto px-4 flex  justify-between h-16 md:flex items-center space-x-8">
        <div>
          <a href="/#">
            <img src={a} alt="" />
          </a>
        </div>
        <div>
          <a href="/#">
            <img src={b} alt="" />
          </a>
        </div>
        <div className="text-bold text-blue-800">01/10</div>
        <div>
          <a href="/#">
            <img src={c} alt="" />
          </a>
        </div>
        <div>
          <a href="/#">
            <img src={d} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;
