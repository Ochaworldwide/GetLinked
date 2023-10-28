import { useEffect, useState } from "react";
import "./App.css";
import AccordionBasicExample from "./assets/components/accordian";
import {
  curvedline,
  hubpic,
  grouped,
  gosip,
  bulb,
  family,
  thought,
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  cup,
  reward,
  partner,
  secure,
  call,
  x,
  fb,
  location,
  instagram,
  linkedin,
  logo,
  menu,
  cancel
} from "./image";

function App() {
  const d = new Date();
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
      <li className="cursor-pointer text-base">Contact Us</li>

      <button className="h-11 w-32 bg-gradient-to-r from-[#D434FE] to-[#FE34B9] justify-center items-center rounded flex cursor-pointer text-white">
        <span class="relative flex h-3 w-3 -translate-y-6 translate-x-24">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        Register
      </button>
    </div>
  );

  
  const [h, setH] = useState(d.getHours());
  const [m, setM] = useState(d.getMinutes());
  const [s, setS] = useState(d.getSeconds());
  const [menuBox,setMenuBox] = useState()

  useEffect(() => {
    setInterval(() => {
      if (new Date().getSeconds() < 10) {
        setS(`0${new Date().getSeconds()}`);
      } else {
        setS(new Date().getSeconds());
      }
    }, 1000);
    setInterval(() => {
      if (new Date().getMinutes() < 10) {
        setM(`0${new Date().getMinutes()}`);
      } else {
        setM(new Date().getMinutes());
      }
    }, 1000);
    setInterval(() => {
      if (new Date().getHours() < 10) {
        setH(`0${new Date().getHours()}`);
      } else {
        setH(new Date().getHours());
      }
    }, 1000);
  }, []);

 

  function handleMenu(params) {
    setMenuBox(mobilemenu)
  }
  function handleCancel(params) {
    setMenuBox("");
  }

  return (
    <div className="bg-[#150E28] w-full box-border">
      {/* head section */}
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
          <li className="cursor-pointer text-base">Contact Us</li>
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
          Register
        </button>
      </div>

      {/* Second Section */}
      <div className="border-b border-[#FFFFFF2E]">
        <div className="w-full mb-5 pr-10  mobile:pr-0 mobile:w-[95%] mobile:mx-auto mobile:p-0">
          <h1 className="text-right text-white text-5xl font-bold mobile:text-center mobile:text-lg mobile:w-[100%] mobile:mx-auto mb-3">
            Igniting a Revolution in HR Innovation
          </h1>
          <img
            src={curvedline}
            alt=""
            srcset=""
            className="ml-auto w-80 object-contain object-center mobile:w-[40%]"
          />
        </div>

        <div className=" flex w-full pl-36 mobile:block mobile:px-0">
          <div className="w-[50%] mobile:mx-auto mobile:w-[80%] mobile:mb-10">
            <img
              src={hubpic}
              alt=""
              srcset=""
              className="object-contain object-center mb-5 mobile:w-full"
            />

            <p className="text-white text-2xl w-4/5 mb-10 leading-normal mobile:text-center mobile:w-[90%] mobile:text-base mobile:mx-auto">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>

            <button className="h-11 w-32 bg-gradient-to-r from-[#D434FE] to-[#FE34B9] text-center rounded flex justify-center items-center cursor-pointer text-white mb-10 mobile:mx-auto">
              <span class="relative flex h-3 w-3 -translate-y-6 translate-x-24">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              Register
            </button>

            <div
              className="w-full flex text-white mobile:w-fit mobile:mx-auto"
              id="timing "
            >
              <div className="p-5  text-5xl">
                <span>{h}</span>
                <span className="text-xs">H</span>
              </div>

              <div className="p-5  text-5xl">
                <span>{m}</span>
                <span className="text-xs">M</span>
              </div>

              <div className="p-5 text-5xl">
                <span>{s}</span>
                <span className="text-xs">S</span>
              </div>
            </div>
          </div>

          <div className="w-3/6 mobile:w-full">
            <img
              src={grouped}
              alt=""
              srcset=""
              className="object-contain object-center h-full w-full mobile:w-full"
            />
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full px-10 py-20 border-b flex border-[#FFFFFF2E] mobile:block mobile:px-5">
        <div className="w-2/4 mobile:w-full mobile:mb-10">
          <img
            src={bulb}
            alt=""
            srcset=""
            className="object-contain object-center mx-auto h-full mobile:w--full"
          />
        </div>

        <div className="w-2/4  flex flex-col justify-center gap-4 mobile:w-full mobile:text-center ">
          <h1 className="text-white font-bold text-3xl w-7/12 mobile:w-full mobile:text-lg ">
            Introduction to getlinked{" "}
            <span className="text-[#D434FE] font-bold text-3xl mobile:text-lg">
              techHackathon 1.0
            </span>
          </h1>

          <p className="w-5/6 text-white text-base leading-loose mobile:mx-auto mobile:w-full mobile:text-center mobile:text-sm">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="w-full p-10 border-b flex flex-row-reverse  border-[#FFFFFF2E] mobile:block mobile:px-5">
        <div className="w-2/4  mobile:w-full">
          <img
            src={gosip}
            alt=""
            srcset=""
            className="object-contain object-center mx-auto h-full"
          />
        </div>

        <div className="w-2/4  flex flex-col justify-center gap-4 pl-40  mobile:w-full mobile:pl-0 mobile:gap-0">
          <h1 className="text-white font-bold text-3xl mobile:mx-auto mobile:text-base">
            Rules and
          </h1>
          <h1 className="text-[#D434FE] font-bold text-base mobile:mx-auto">
            Guildlines
          </h1>
          <p className="w-6/6 text-white text-base leading-loose mobile:mx-auto mobile:w-full mobile:text-center mobile:text-sm">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>

      {/* Fifth Section */}
      <div className="w-full p-10 border-b flex  border-[#FFFFFF2E] mobile:block mobile:px-5">
        <div className="w-2/4  mobile:w-full">
          <img
            src={family}
            alt=""
            srcset=""
            className="object-contain object-center mx-auto h-full"
          />
        </div>

        <div className="w-2/4  flex flex-col justify-center gap-6 pl-40 mobile:w-full mobile:pl-0">
          <h1 className="w-4/12 text-white font-bold text-3xl leading-relaxed mobile:mx-auto mobile:w-8/12">
            Judging Criteria{" "}
            <span className="text-[#D434FE]">Key attributes</span>
          </h1>

          <p className="w-6/6 text-white text-base leading-loose mobile:text-center mobile:w-full mobile:mx-auto">
            <span className="text-[#D434FE]">Innovation and Creativity</span>:
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>

          <p className="w-6/6 text-white text-base leading-loose mobile:text-center mobile:w-full mobile:mx-auto">
            <span className="text-[#D434FE]">Functionality</span>: Assess how
            well the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
          </p>

          <p className="w-6/6 text-white text-base leading-loose mobile:text-center mobile:w-full mobile:mx-auto">
            <span className="text-[#D434FE]">Impact and Relevance</span>:
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>

          <p className="w-6/6 text-white text-base leading-loose mobile:text-center mobile:w-full mobile:mx-auto">
            <span className="text-[#D434FE]">Technical Complexity</span>:
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>

          <p className="w-6/6 text-white text-base leading-loose mb-10 mobile:text-center mobile:w-full mobile:mx-auto">
            <span className="text-[#D434FE]">Adherence to Hackathon Rules</span>
            : Judges will Ensure that the team adhered to the rules and
            guidelines of the hackathon, including deadlines, use of specific
            technologies or APIs, and any other competition-specific
            requirements.
          </p>

          <button className="h-11 w-32 bg-gradient-to-r from-[#D434FE] to-[#FE34B9] justify-center items-center rounded flex cursor-pointer text-white mobile:mx-auto">
            <span class="relative flex h-3 w-3 -translate-y-6 translate-x-24">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            Register
          </button>
        </div>
      </div>

      {/* Sixth Section */}
      <div className="w-full p-10 border-b flex flex-row-reverse  border-[#FFFFFF2E] mobile:block mobile:px-5">
        <div className="w-2/4  mobile:w-full">
          <img
            src={thought}
            alt=""
            srcset=""
            className="object-contain object-center mx-auto h-full"
          />
        </div>

        <div className="w-2/4 flex flex-col gap-6 pl-40 mobile:w-full mobile:pl-0">
          <h1 className="w-4/12 h-20 text-white font-bold text-3xl leading-relaxed mt-28 mobile:w-full mobile:leading-tight mobile:mx-auto mobile:text-center">
            Frequently Ask <span className="text-[#D434FE]">Question</span>
          </h1>

          <p className="w-6/6 text-white text-base leading-loose mobile:text-center mobile:w-full mobile:mx-auto">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>

          <div className="container overflow-hidden ">
            <AccordionBasicExample />
          </div>
        </div>
      </div>

      {/* Seventh Section */}
      <div className="w-full p-10 text-white mb-20 mobile:px-5">
        <h1 className="text-center text-3xl font-bold w-2/4 mx-auto mb-5">
          Timeline
        </h1>
        <p className="text-center font-bold w-1/4 mx-auto mb-10 mobile:w-full">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>

        <div className="w-[80%] flex h-fit mx-auto justify-between mb-10 mobile:hidden">
          <div className="pt-0 pb-0 w-5/12 text-right ">
            <h1 className="font-bold text-[#D434FE] text-2xl mt-14 mb-5">
              Hackathon Announcement
            </h1>
            <p className="w-10/12 ml-auto">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
          <div className=" w-1/12">
            <img
              src={first}
              alt=""
              srcset=""
              className="object-contain object-center mx-auto"
            />
          </div>
          <div className="py-10 w-5/12">
            <h1 className="font-bold text-[#D434FE] text-2xl mt-24">
              November 18, 2023
            </h1>
          </div>
        </div>

        <div className="w-[80%] flex h-fit mx-auto justify-between mb-10 mobile:hidden">
          <div className="pt-0 pb-0 w-5/12 text-right ">
            <h1 className="font-bold text-[#D434FE] text-2xl mt-24">
              November 18, 2023
            </h1>
          </div>
          <div className=" w-1/12">
            <img
              src={second}
              alt=""
              srcset=""
              className="object-contain object-center mx-auto"
            />
          </div>
          <div className="py-0 w-5/12">
            <h1 className="font-bold text-[#D434FE] text-2xl mt-14 mb-5">
              Teams Registration begins
            </h1>
            <p className="w-10/12">
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
        </div>

        <div className="w-[80%] flex h-fit mx-auto justify-between mb-10 mobile:hidden">
          <div className="pt-0 pb-0 w-5/12 text-right ">
            <h1 className="font-bold text-[#D434FE] text-2xl mt-14 mb-5">
              Teams Registration ends
            </h1>
            <p className="w-10/12 ml-auto">
              Interested Participants are no longer Allowed to register
            </p>
          </div>
          <div className=" w-1/12">
            <img
              src={third}
              alt=""
              srcset=""
              className="object-contain object-center mx-auto"
            />
          </div>
          <div className="py-10 w-5/12">
            <h1 className="font-bold text-[#D434FE] text-2xl mt-24">
              November 18, 2023
            </h1>
          </div>
        </div>

        <div className="w-[80%] flex h-fit mx-auto justify-between mb-10 mobile:hidden">
          <div className="pt-0 pb-0 w-5/12 text-right ">
            <h1 className="font-bold text-[#D434FE] text-2xl mt-24">
              November 18, 2023
            </h1>
          </div>
          <div className=" w-1/12">
            <img
              src={fourth}
              alt=""
              srcset=""
              className="object-contain object-center mx-auto"
            />
          </div>
          <div className="py-0 w-5/12">
            <h1 className="font-bold text-[#D434FE] text-2xl mt-14 mb-5">
              Announcement of the accepted teams and ideas
            </h1>
            <p className="w-10/12">
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
        </div>

        <div className="w-[80%] flex h-fit mx-auto justify-between mb-10 mobile:hidden">
          <div className="pt-0 pb-0 w-5/12 text-right ">
            <h1 className="font-bold text-[#D434FE] text-2xl mt-14 mb-5">
              Getlinked Hackathon 1.0 Offically Begins
            </h1>
            <p className="w-10/12 ml-auto">
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
          <div className=" w-1/12">
            <img
              src={fifth}
              alt=""
              srcset=""
              className="object-contain object-center mx-auto"
            />
          </div>
          <div className="py-10 w-5/12">
            <h1 className="font-bold text-[#D434FE] text-2xl mt-24">
              November 18, 2023
            </h1>
          </div>
        </div>

        <div className="w-[80%] flex h-fit mx-auto justify-between mb-10 mobile:hidden">
          <div className="pt-0 pb-0 w-5/12 text-right ">
            <h1 className="font-bold text-[#D434FE] text-2xl mt-24">
              November 18, 2023
            </h1>
          </div>
          <div className=" w-1/12">
            <img
              src={sixth}
              alt=""
              srcset=""
              className="object-contain object-center mx-auto"
            />
          </div>
          <div className="py-0 w-5/12">
            <h1 className="font-bold text-[#D434FE] text-2xl mt-14 mb-5">
              Demo Day
            </h1>
            <p className="w-10/12">
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>
        </div>

        <div className="w-[90%] h-fit mx-auto justify-between items-center mb-10 hidden mobile:flex mobile:w-full">
          <div className=" w-1/12 ">
            <img
              src={first}
              alt=""
              srcset=""
              className="object-contain object-center mx-auto"
            />
          </div>
          <div className=" w-10/12  flex flex-col gap-3">
            <h1 className="font-bold text-[#D434FE] text-xl ">
              Hackathon Announcement
            </h1>
            <p className="w-full">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
            <div className="w-full">
              <h1 className="font-bold text-[#D434FE] text-1xl">
                November 18, 2023
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[90%] h-fit mx-auto justify-between items-center mb-10 hidden mobile:flex mobile:w-full">
          <div className=" w-1/12">
            <img
              src={second}
              alt=""
              srcset=""
              className="object-contain object-center mx-auto"
            />
          </div>
          <div className=" w-10/12  flex flex-col gap-3">
            <h1 className="font-bold text-[#D434FE] text-xl ">
              Teams Registration begins
            </h1>
            <p className="w-full">
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
            <div className="w-full">
              <h1 className="font-bold text-[#D434FE] text-xl">
                November 18, 2023
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[90%] h-fit mx-auto justify-between items-center mb-10 hidden mobile:flex mobile:w-full">
          <div className=" w-1/12">
            <img
              src={third}
              alt=""
              srcset=""
              className="object-contain object-center mx-auto"
            />
          </div>
          <div className=" w-10/12  flex flex-col gap-3">
            <h1 className="font-bold text-[#D434FE] text-xl ">
              Teams Registration ends
            </h1>
            <p className="w-full">
              Interested Participants are no longer Allowed to register
            </p>
            <div className="w-full">
              <h1 className="font-bold text-[#D434FE] text-xl">
                November 18, 2023
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[90%] h-fit mx-auto justify-between items-center mb-10 hidden mobile:flex mobile:w-full">
          <div className=" w-1/12">
            <img
              src={fourth}
              alt=""
              srcset=""
              className="object-contain object-center mx-auto"
            />
          </div>
          <div className=" w-10/12  flex flex-col gap-3">
            <h1 className="font-bold text-[#D434FE] text-xl ">
              Announcement of the accepted teams and ideas
            </h1>
            <p className="w-full">
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
            <div className="w-full">
              <h1 className="font-bold text-[#D434FE] text-xl">
                November 18, 2023
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[90%] h-fit mx-auto justify-between items-center mb-10 hidden mobile:flex mobile:w-full">
          <div className=" w-1/12">
            <img
              src={fifth}
              alt=""
              srcset=""
              className="object-contain object-center mx-auto"
            />
          </div>
          <div className=" w-10/12  flex flex-col gap-3">
            <h1 className="font-bold text-[#D434FE] text-xl ">
              Getlinked Hackathon 1.0 Offically Begins
            </h1>
            <p className="w-full">
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
            <div className="w-full">
              <h1 className="font-bold text-[#D434FE] text-xl">
                November 18, 2023
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[90%] h-fit mx-auto justify-between items-center mb-10 hidden mobile:flex mobile:w-full">
          <div className=" w-1/12">
            <img
              src={sixth}
              alt=""
              srcset=""
              className="object-contain object-center mx-auto"
            />
          </div>
          <div className=" w-10/12  flex flex-col gap-3">
            <h1 className="font-bold text-[#D434FE] text-xl ">Demo Day</h1>
            <p className="w-full">
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
            <div className="w-full">
              <h1 className="font-bold text-[#D434FE] text-xl">
                November 18, 2023
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Eight section */}
      <div className="w-full p-10 flex mb-20 mobile:block mobile:px-5">
        <div className="pl-40 hidden mobile:block mobile:pl-0 mobile:w-full mobile:text-center mobile:mb-10">
          <h1 className="text-white font-bold text-3xl mobile:text-xl">
            Prize and
          </h1>
          <h1 className="text-[#D434FE] font-bold text-3xl mobile:text-xl mobile:mb-5">
            Reward
          </h1>
          <p className="w-3/6 text-white text-base leading-loose mb-10 mobile:w-full mobile:mb-0 mobile:text-sm">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div className="w-2/4 pt-40 mobile:w-full mobile:pt-0 mobile:mb-10">
          <img
            src={cup}
            alt=""
            srcset=""
            className="object-contain object-center mx-auto h-full mobile:w-[70%]"
          />
        </div>

        <div className="w-2/4 flex flex-col gap-4 mobile:block mobile:gap-0 mobile:w-full">
          <div className="pl-40 mobile:hidden">
            <h1 className="text-white font-bold text-3xl ">Prize and</h1>
            <h1 className="text-[#D434FE] font-bold text-3xl">Reward</h1>
            <p className="w-3/6 text-white text-base leading-loose mb-10 ">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>

          <img
            src={reward}
            alt=""
            srcset=""
            className="object-contain object-center mx-auto mobile:w-[80%]"
          />
        </div>
      </div>

      {/* 9th Section */}
      <div className="w-full p-20 border-b text-white border-[#FFFFFF2E] mobile:p-5">
        <h1 className="text-center text-3xl font-bold w-2/4 mx-auto mb-5 mobile:w-full mobile:text-xl">
          Partners and Sponsors
        </h1>
        <p className="text-center font-bold w-4/12 mx-auto mb-10 mobile:w-full mobile:text-sm">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>

        <div className="w-10/12 py-40 mx-auto border flex justify-center items-center border-[#D434FE] rounded mobile:w-full mobile:py-10 px-10">
          <img
            src={partner}
            alt=""
            srcset=""
            className="object-contain object-center mobile:mx-auto"
          />
        </div>
      </div>

      {/* 10th Section */}
      <div className="px-40 flex mobile:block mobile:px-0 ">
        <div className="w-2/4 p-20 text-white mobile:w-full mobile:px-[2%] mobile:pt-0">
          <h1 className="w-5/12  text-white font-bold text-3xl leading-normal mt-28 mb-10 mobile:w-[60%] mobile:text-center mobile:mx-auto mobile:text-xl mobile:mt-10">
            Privacy Policy and
            <span className="text-[#D434FE]"> Terms</span>
          </h1>
          <p className="mb-10 mobile:text-center">
            Last updated on September 12, 2023
          </p>

          <p className="w-7/12 mb-10 mobile:w-full mobile:text-center ">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>

          <div className="p-20 border border-[#D434FE] mobile:w-11/12 mobile:mx-auto mobile:p-5">
            <p className="mb-5 leading-loose mobile:text-center">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <h1 className="mb-5 text-[#D434FE] font-bold">Licensing Policy</h1>

            <h1 className="mb-5">Here are terms of our Standard License:</h1>

            <div className=" flex justify-between mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="green"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>

              <div className="w-11/12 ">
                <p className="font-bold text-sm mobile:font-normal">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
            </div>

            <div className=" flex justify-between mb-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="green"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>

              <div className="w-11/12 ">
                <p className="font-bold text-sm mobile:font-normal">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
            </div>

            <button className="h-11 w-32 bg-gradient-to-r from-[#D434FE] to-[#FE34B9] justify-center items-center rounded flex cursor-pointer text-white mx-auto mt-20 ">
              <span class="relative flex h-3 w-3 -translate-y-6 translate-x-24">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              Read More
            </button>
          </div>
        </div>
        <div className="w-2/4 p-10 mobile:w-full mobile:p-0">
          <img
            src={secure}
            alt=""
            srcset=""
            className="object-contain object-center "
          />
        </div>
      </div>

      {/* footer section */}
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
              <p className="text-[#D434FE] cursor-pointer mobile:text-sm">Follow us</p>
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
              <img
                src={location}
                alt=""
                srcset=""
                className="object-contain "
              />
              <p className="mobile:text-sm">27,Alara Street Yaba 100012 Lagos State</p>
            </div>
          </div>
        </div>
        <p className="text-center mobile:text-sm">All rights reserved. © getlinked Ltd.</p>
      </div>
    </div>
  );
}

export default App;
