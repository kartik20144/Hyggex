import React from "react";
import Faq from "./Faq";

const DisplayFaq = () => {
  return (
   
        <div>
            <div className="max-w-7xl mx-auto px-4 py-5 text-blue-800 font-bold text-4xl" >
      FAQ
    </div>
          <Faq
            question="Can education flashcards be used for all age groups?"
            answer="Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards for preschoolers, elementary school students, high school students, and even for college-level and adult learners."
          />
          <Faq
            question="How do education flashcards work?"
            answer="Education flashcards word by presenting a question or prompt on one side and the corresponding answer or information on the other. Users csn review the cards repeatedly, reinforcing their memory and enhancing through repetition."
          />
           <Faq
            question="Can education flashcards be used for test prepration?"
            answer="Absolutely, Flashcards are an existing tool for test prepration, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams."
          />
          
        </div>
  )
}

export default DisplayFaq