import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

function AccordionBasicExample() {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <>
      <div id="accordionExample" className="w-full ">
        <div className="border-b border-[#D434FE] bg-[#150E28] mb-3">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${
                activeElement === "element1" && `text-primary`
              } group relative flex w-full items-center rounded-t-[15px] border-0 bg-[#150E28] px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  dark:text-white`}
              type="button"
              onClick={() => handleClick("element1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Can I work on a project I started before the hackathon?
              <span
                className={`${
                  activeElement === "element1"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529]  dark:fill-black`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-500 ease-in-out motion-reduce:transition-none `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#D434FE"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element1"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4 text-white">
              You do not a kyc verification to have an account on warm books ,
              all you need is your email and a verified phone number to get
              stated
            </div>
          </TECollapse>
        </div>
      </div>
      <div className="border-b border-[#D434FE] bg-[#150E28] mb-3">
        <h2 className="mb-0" id="headingTwo">
          <button
            className={`${
              activeElement === "element2"
                ? `text-primary`
                : `transition-none rounded-b-[15px]`
            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-[#150E28] px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  dark:text-white`}
            type="button"
            onClick={() => handleClick("element2")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What happens if I need help during the hackathon?
            <span
              className={`${
                activeElement === "element2"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#D434FE"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element2"}
          className="!mt-0 !rounded-b-none !shadow-none"
        >
          <div className="px-5 py-4 text-white">
            You do not a kyc verification to have an account on warm books , all
            you need is your email and a verified phone number to get stated
          </div>
        </TECollapse>
      </div>
      <div className="border-b border-[#D434FE] bg-[#150E28] mb-3">
        <h2 className="accordion-header mb-0" id="headingThree">
          <button
            className={`${
              activeElement === "element3"
                ? `text-primary`
                : `transition-none rounded-b-[15px]`
            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-[#150E28] px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  dark:text-white`}
            type="button"
            onClick={() => handleClick("element3")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What happens if I don't have an idea for a project?
            <span
              className={`${
                activeElement === "element3"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#D434FE"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element3"}
          className="!mt-0 !shadow-none"
        >
          <div className="px-5 py-4 text-white">
            You do not a kyc verification to have an account on warm books , all
            you need is your email and a verified phone number to get stated
          </div>
        </TECollapse>
      </div>

      <div className="border-b border-[#D434FE] bg-[#150E28] mb-3">
        <h2 className="accordion-header mb-0" id="headingThree">
          <button
            className={`${
              activeElement === "element4"
                ? `text-primary`
                : `transition-none rounded-b-[15px]`
            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-[#150E28] px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  dark:text-white`}
            type="button"
            onClick={() => handleClick("element4")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Can I join a team or do I have to come with one?
            <span
              className={`${
                activeElement === "element4"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#D434FE"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element4"}
          className="!mt-0 !shadow-none"
        >
          <div className="px-5 py-4  text-white">
            You do not a kyc verification to have an account on warm books , all
            you need is your email and a verified phone number to get stated
          </div>
        </TECollapse>
      </div>

      <div className="border-b border-[#D434FE] bg-[#150E28] mb-3">
        <h2 className="accordion-header mb-0" id="headingThree">
          <button
            className={`${
              activeElement === "element5"
                ? `text-primary`
                : `transition-none rounded-b-[15px]`
            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-[#150E28] px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  dark:text-white`}
            type="button"
            onClick={() => handleClick("element5")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What happens after the hackathon ends
            <span
              className={`${
                activeElement === "element5"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#D434FE"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element5"}
          className="!mt-0 !shadow-none"
        >
          <div className="px-5 py-4 text-white">
            You do not a kyc verification to have an account on warm books , all
            you need is your email and a verified phone number to get stated
          </div>
        </TECollapse>
      </div>

      <div className="border-b border-[#D434FE] bg-[#150E28] ">
        <h2 className="accordion-header mb-0" id="headingThree">
          <button
            className={`${
              activeElement === "element6"
                ? `text-primary`
                : `transition-none rounded-b-[15px]`
            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-[#150E28] px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  dark:text-white`}
            type="button"
            onClick={() => handleClick("element6")}
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Can I work on a project I started before the hackathon?
            <span
              className={`${
                activeElement === "element6"
                  ? `rotate-[-180deg] -mr-1`
                  : `rotate-0 fill-[#212529] dark:fill-white`
              } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#D434FE"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </button>
        </h2>
        <TECollapse
          show={activeElement === "element6"}
          className="!mt-0 !shadow-none"
        >
          <div className="px-5 py-4 text-white">
            You do not a kyc verification to have an account on warm books , all
            you need is your email and a verified phone number to get stated
          </div>
        </TECollapse>
      </div>
    </>
  );
}


export default AccordionBasicExample;