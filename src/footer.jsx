import React from 'react';
import {
  call,
  x,
  fb,
  location,
  instagram,
  linkedin,
  logo
} from "./image";

const Footer = () => {
  return (
    <div className="py-20 px-40  text-white font-bold mobile:w-full mobile:px-[2%]">
      <div className=" flex justify-between mb-10 mobile:block">
        <div className="p-10 w-[37%] mobile:w-full mobile:px-[10%]">
          <img
            src={logo}
            alt=""
            srcset=""
            className="mb-5 mobile:object-contain mobile:w-28"
          />
          <p className="mb-16 mobile:text-sm">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>

          <div className="flex gap-2 ">
            <p className="mobile:text-sm">Terms of Use</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#D434FE"
              className="w-6 h-6 rotate-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>

            <p className="mobile:text-sm">Privacy Policy</p>
          </div>
        </div>
        <div className="p-10 w-[25%] flex flex-col gap-5  mobile:w-full">
          <h1 className="text-[#D434FE] mobile:text-sm">Useful Links</h1>
          <p className="cursor-pointer mobile:text-sm">Overview</p>
          <p className="cursor-pointer mobile:text-sm">Timeline</p>
          <p className="cursor-pointer mobile:text-sm">FAQs</p>
          <p className="cursor-pointer mobile:text-sm">Register</p>
          <div className="flex gap-5">
            <p className="text-[#D434FE] cursor-pointer mobile:text-sm">
              Follow us
            </p>
            <img
              src={instagram}
              alt=""
              srcset=""
              className="object-contain cursor-pointer"
            />
            <img
              src={x}
              alt=""
              srcset=""
              className="object-contain cursor-pointer"
            />
            <img
              src={fb}
              alt=""
              srcset=""
              className="object-contain cursor-pointer"
            />
            <img
              src={linkedin}
              alt=""
              srcset=""
              className="object-contain cursor-pointer"
            />
          </div>
        </div>
        <div className="p-10 w-[30%]  flex flex-col gap-5 mobile:w-full ">
          <h1 className="text-[#D434FE] mobile:text-sm">Contact Us</h1>
          <div className="flex gap-4">
            <img src={call} alt="" srcset="" className="object-contain " />
            <p className="mobile:text-sm">+234 6707653444</p>
          </div>
          <div className="flex gap-4">
            <img src={location} alt="" srcset="" className="object-contain " />
            <p className="mobile:text-sm">
              27,Alara Street Yaba 100012 Lagos State
            </p>
          </div>
        </div>
      </div>
      <p className="text-center mobile:text-sm">
        All rights reserved. © getlinked Ltd.
      </p>
    </div>
  );
}

export default Footer