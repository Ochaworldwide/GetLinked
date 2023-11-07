import React from 'react'
import { Link } from "react-router-dom";
import {
  x,
  fb,
  instagram,
  linkedin,
  back
} from "./image";

function Contact() {
  return (
    <div className="bg-[#150E28] w-full box-border">
      <div className="p-40 flex w-[80%] mx-auto items-center text-[white] mobile:block mobile:p-0 mobile:w-[90%] ">
        

        <Link to="/">
          <img
          src={back}
          alt=""
          srcset=""
          className="hidden mobile:block pt-5 cursor-pointer"
        />
        </Link>
        <div className="p-10 mobile:pb-0 w-[40%] gap-6 flex flex-col mobile:hidden">
          <h1 className="text-[#D434FE] font-bold text-3xl">Get in touch</h1>

          <p>Contact Information</p>

          <p>27, Alara Street Yaba 100012 Lagos State</p>

          <p>CALL US : 07067981819</p>

          <p>
            we are open from Money-Friday <br /> 08:00am - 05:00pm
          </p>

          <div className="flex gap-5 mobile:hidden">
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

        <form
          action=""
          className="p-20  w-[60%] flex flex-col gap-10  text-white border border-gray-900 drop-shadow-2xl mobile:w-full mobile:px-0 mobile:pb-0 mobile:border-none"
        >
          <h1 className="text-[#D434FE] font-bold text-xl mobile:text-base">
            Questions or need assistance ? <br /> Let us Know about it
          </h1>

          <p className="hidden mobile:block">
            Email us below to any question related to our event
          </p>

          <input
            type="text"
            placeholder="first Name"
            className="placeholder:font-bold p-3 bg-transparent border rounded mobile:hidden"
          />

          <input
            type="text"
            placeholder="Team's Name"
            className="placeholder:font-bold p-3 bg-transparent border rounded hidden mobile:block"
          />

          <input
            type="text"
            placeholder="Mail"
            className="placeholder:font-bold p-3 bg-transparent border rounded mobile:hidden"
          />

          <input
            type="text"
            placeholder="Topic"
            className="placeholder:font-bold p-3 bg-transparent border hidden rounded mobile:block"
          />

          <input
            type="text"
            placeholder="Email"
            className="placeholder:font-bold p-3 bg-transparent border hidden rounded mobile:block"
          />

          <textarea
            name=""
            id=""
            cols="20"
            rows="10"
            placeholder="Message"
            className="bg-transparent border rounded p-2"
          ></textarea>

          <button className="h-11 w-32 bg-gradient-to-r from-[#D434FE] to-[#FE34B9] text-center rounded flex justify-center items-center cursor-pointer text-white  mb-10 mx-auto">
            <span class="relative flex h-3 w-3 -translate-y-6 translate-x-24">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            Submit
          </button>
        </form>

        <div className="gap-5 hidden mobile:flex mx-auto w-[80%]">
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
    </div>
  );
}

export default Contact