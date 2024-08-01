// src/Accordion.js
import  { useState, useRef } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="">
      <button
        className={`w-full text-left text-4xl py-12 px-6 mr-96 bg-white focus:outline-none ${isOpen ? 'rounded-t-3xl' : 'rounded-3xl'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="float-right">
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          )}
        </span>
      </button>
      <div
        ref={contentRef}
        className={`accordion-content bg-white rounded-b-3xl -mt-10  px-6 overflow-hidden text-xl transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0",
        }}
      >
        <div className="py-4">{children}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="max-w-4xl mx-auto mt-1 my-16">
      <AccordionItem 
        title="What is the Green Community Hub?">
        {"A vibrant platform for eco-conscious individuals!"}
      </AccordionItem>
      {/* Add more AccordionItem components as needed */}
    </div>
  );
};

export default Accordion;
