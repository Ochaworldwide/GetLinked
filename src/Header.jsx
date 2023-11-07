import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import {
  logo,
  menu,
  cancel
} from "./image";
import Contact from './contact';

const Header = () => {
    const mobilemenu = (
      <div className="flex flex-col gap-5 text-white right-[0%] left-8 -top-8 absolute list-none bg-[#150E28] w-[100%] font-bold pl-[10%] pb-10 pt-10 pr-5 ">
        <img
          src={cancel}
          alt=""
          srcset=""
          className="object-contain ml-auto cursor-pointer"
          onClick={handleCancel}
        />

        <li className="cursor-pointer text-base ">Timeline</li>
        <li className="cursor-pointer text-base">Overview</li>
        <li className="cursor-pointer text-base">FAQs</li>
        <li className="cursor-pointer text-base">
          <Link to="/contact">Contact us</Link>
        </li>

        <button className="h-11 w-32 bg-gradient-to-r from-[#D434FE] to-[#FE34B9] justify-center items-center rounded flex cursor-pointer text-white">
          <span class="relative flex h-3 w-3 -translate-y-6 translate-x-24">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>
          <Link to="register">Register</Link>
        </button>
      </div>
    );

    const [menuBox, setMenuBox] = useState();

    function handleMenu(params) {
      setMenuBox(mobilemenu);
    }
    function handleCancel(params) {
      setMenuBox("");
    }


  return (
   
      
    <div className="w-full px-32 mobile:px-8 flex justify-between items-center border-b border-[#FFFFFF2E] mb-10">
        <img
          src={logo}
          alt=""
          srcset=""
          className="object-contain object-center w-36 h-10 mobile:h-20 mobile:w-[30%]"
        />

        <div className="w-[50%] py-10 flex list-none justify-evenly text-white ml-auto  mobile:hidden">
          <li className="cursor-pointer text-base ">Timeline</li>
          <li className="cursor-pointer text-base">Overview</li>
          <li className="cursor-pointer text-base">FAQs</li>
          <li className="cursor-pointer text-base">
            <Link to='/contact'>Contact Us</Link>
          </li>
        </div>

        <div className="hidden mobile:block relative w-[70%]">
          <img
            src={menu}
            alt=""
            srcset=""
            className="mobile:flex cursor-pointer ml-auto"
            onClick={handleMenu}
          />
          {menuBox}
        </div>

        <button className="h-11 w-32 bg-gradient-to-r from-[#D434FE] to-[#FE34B9] justify-center items-center rounded flex cursor-pointer text-white mobile:hidden">
          <span class="relative flex h-3 w-3 -translate-y-6 translate-x-24">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>

          <Link to='register'>Register</Link>
          
        </button>
    </div>
    
  );
}

export default Header