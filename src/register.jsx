import React from 'react'
import { relax } from './image'

const Register = () => {
  return (
    <div className="bg-[#150E28] w-full box-border">
      <div className="flex mobile:block mobile:px-[5%]">
        <h1 className="text-[#D434FE] text-xl font-bold mb-5 hidden mobile:block">
          Register
        </h1>
        <img
          src={relax}
          alt=""
          srcset=""
          className="w-[40%] object-contain object-center mobile:w-full"
        />

        <div className="p-20 text-white  w-[50%] mobile:w-[90%] mobile:px-0 mx-auto">
          <h1 className="text-[#D434FE] text-3xl font-bold mb-5 mobile:hidden">
            Register
          </h1>

          <p className="text-base mb-5">Be part of this movement!</p>

          <h1 className="font-bold mb-5">CREATE YOUR ACCOUNT</h1>

          <div className="flex w-full mb-10 mobile:block mobile:mb-0">
            <div className="mr-auto w-[40%] mobile:w-full mobile:mr-0 mb-5">
              <p>Team’s Name</p>

              <input
                type="text"
                placeholder="Enter the name of your group"
                className="p-2 py-4 border bg-transparent rounded w-full"
              />
            </div>

            <div className=" ml-auto w-[40%] mobile:w-full mobile:ml-0 mobile:mb-5">
              <p>Phone</p>

              <input
                type="text"
                placeholder="Enter your phone number"
                className="p-2 py-4 border bg-transparent rounded w-full"
              />
            </div>
          </div>

          <div className="flex w-full mb-10 mobile:block mobile:mb-0">
            <div className=" mr-auto w-[40%] mobile:w-full mobile:mr-0 mb-5">
              <p>Email</p>

              <input
                type="text"
                placeholder="Enter your email"
                className="p-2 py-4 border bg-transparent rounded w-full"
              />
            </div>

            <div className=" ml-auto w-[40%] mobile:w-full mobile:ml-0 mb-5">
              <p>Project Topic</p>

              <input
                type="text"
                placeholder="What is your group project topic"
                className="p-2 py-4 border bg-transparent rounded w-full"
              />
            </div>
          </div>

          <div className="flex w-full mb-10 mobile:block mobile:mb-0">
            <div className=" mr-auto w-[40%] mobile:w-full mobile:mr-0 mobile:mb-5">
              <p>Category</p>

              <select className="p-4 w-full text-white bg-transparent outline-none border">
                <option value="0">Select Category</option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
                <option value="4">Category 4</option>
                <option value="5">Category 5</option>
                <option value="6">Category 6</option>
                <option value="7">Category 7</option>
                <option value="8">Category 8</option>
                <option value="9">Category 9</option>
                <option value="10">Category 10</option>
              </select>
            </div>

            <div className=" ml-auto w-[40%] mobile:w-full mobile:ml-0 mobile:mb-5">
              <p>Group Size</p>

              <select className="p-4 w-full text-white bg-transparent outline-none border">
                <option value="0">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>

          <p className="text-[#FF26B9] text-sm mb-5 italic mobile:text-xs">
            Please review your registration details before submitting
          </p>

          <p className="mobile:text-xs mobile:mb-5">
            <input type="checkbox" className="mr-3 mb-5  mobile:mb-0" />I agreed with the
            event terms and conditions and privacy policy
          </p>

          <button className="h-11 w-full bg-gradient-to-r from-[#D434FE] to-[#FE34B9] text-center rounded flex justify-center items-center cursor-pointer text-white mb-10 mx-auto">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register