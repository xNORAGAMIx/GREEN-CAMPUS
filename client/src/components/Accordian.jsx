/* eslint-disable react/prop-types */
import { useState, useRef } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="w-full px-8 py-2">
      <button
        className={`w-full text-left lg:mr-96 text-2xl md:text-4xl py-6 md:py-12 px-4 md:px-6 bg-white focus:outline-none ${
          isOpen ? "rounded-t-3xl" : "rounded-3xl"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="float-right">
          {isOpen ? (
            <svg
              className="w-6 h-6 md:w-8 md:h-8"
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
              className="w-6 h-6 md:w-8 md:h-8"
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
        className={`accordion-content bg-white rounded-b-3xl -mt-10 px-4 md:px-6 overflow-hidden text-lg md:text-xl transition-max-height duration-300 ease-in-out`}
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
      <AccordionItem title="What is the Green Community Hub?">
        {"A vibrant platform for eco-conscious individuals!"}
      </AccordionItem>
    </div>
  );
};

const FAQ = () => {
  return (
    <div
      className={`bg-green-50 flex flex-col items-center py-8 px-4 md:px-8 lg:px-16 `}
    >
      <h1 className="font-extrabold text-2xl md:text-4xl lg:text-6xl mb-6 md:mb-10 lg:mb-14 text-center">
        Frequently Asked Questions
      </h1>
      <div className="w-full max-w-4xl">
        <Accordion
          title="What is the Green Community Hub?"
          content="A vibrant platform for eco-conscious individuals!"
        />
        <Accordion
          title="What is the Green Community Hub?"
          content="A vibrant platform for eco-conscious individuals!"
        />
        <Accordion
          title="What is the Green Community Hub?"
          content="A vibrant platform for eco-conscious individuals!"
        />
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
