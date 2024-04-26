import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Faq = ({ question, answer }) => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? "display" : "hidden";
  const ansClass = `${expandClass} p-4`;

  return (
    <div className="max-w-4xl ml-32 border border-blue-500 rounded-lg overflow-hidden my-5">
      <div className="shadow rounded border border-gray-100 border-t-0">
        <div className="p-4 text-xl relative font-medium">
          <div className="w-5/6">{question}</div>
          <button
            aria-label="question-expander"
            className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
            onClick={() => setExpand(!expand)}
          >
            {expand ? (
              <FontAwesomeIcon icon={faChevronUp} className="w-5" />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} className="w-5" />
            )}
          </button>
        </div>
        <div className={ansClass}>{answer}</div>
      </div>
    </div>
  );
};

export default Faq;
