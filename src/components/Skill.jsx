import React from "react";
import { LiaReact } from "react-icons/lia";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { DiPython } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";

const Skill = () => {
  return (
    <>
      <div className="w-full flex justify-center py-5 dark:bg-slate-900">
        <div className=" w-[97%]">
          <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide" //slide
          >
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-20 overflow-hidden rounded-lg">
              {/* <!-- Item 1 --> */}
              <div
                className="hidden duration-700 ease-in-out flex items-center"
                data-carousel-item
              >
                {/* <img
                  src="./images/background.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                /> */}

                <div className="w-full flex justify-evenly">
                  <LiaReact className="text-5xl text-blue-400 w-24 rounded-md  bg-gray-300 py-1" />
                  <SiMongodb className="text-5xl text-green-600 w-24 rounded-md  bg-gray-300 py-1" />
                  <IoLogoNodejs className="text-5xl text-green-600 w-24 rounded-md  bg-gray-300 py-1" />
                  <RiJavascriptFill className="text-5xl text-yellow-600 w-24 rounded-md  bg-gray-300 py-1 hidden md:block" />
                  <FaBootstrap className="text-5xl text-violet-800 w-24 rounded-md  bg-gray-300 py-1 hidden md:block" />
                </div>
              </div>

              {/* <!-- Item 2 --> */}
              <div
                className="hidden duration-700 ease-in-out flex items-center"
                data-carousel-item
              >
                {/* <img
                  src="./images/background.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                /> */}

                <div className="w-full h-full flex justify-evenly items-center">
                  <SiExpress className="text-5xl text-black w-24 rounded-md  bg-gray-300 py-1" />
                  <FaHtml5 className="text-5xl text-orange-600 w-24 rounded-md  bg-gray-300 py-1" />
                  <IoLogoCss3 className="text-5xl text-blue-700 w-24 rounded-md  bg-gray-300 py-1" />
                  <SiTailwindcss className="text-5xl text-blue-800 w-24 rounded-md  bg-gray-300 py-1 hidden md:block" />
                  <DiPython className="text-5xl text-blue-700 w-24 rounded-md  bg-gray-300 py-1 hidden md:block" />
                  {/* <SiExpress className="text-5xl text-black w-20 rounded-md  bg-gray-300 py-1"/> */}
                </div>
              </div>

              {/* <!-- Item 3 --> */}
              <div
                className="hidden duration-700 ease-in-out flex items-center"
                data-carousel-item
              >
                {/* <img
                  src="./images/background.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                /> */}

                <div className="w-full h-full flex justify-evenly items-center">
                  <SiTailwindcss className="text-5xl text-blue-800 w-24 rounded-md  bg-gray-300 py-1" />
                  <FaBootstrap className="text-5xl text-violet-800 w-24 rounded-md  bg-gray-300 py-1" />
                  <DiPython className="text-5xl text-blue-700 w-24 rounded-md  bg-gray-300 py-1 md:hidden" />
                  <FaGithub className="text-5xl text-black w-24 rounded-md  bg-gray-300 py-1 hidden md:block" />
                  <VscVscode className="text-5xl text-blue-700 w-24 rounded-md  bg-gray-300 py-1 hidden md:block " />
                  <FaGitAlt className="text-5xl text-orange-600 w-24 rounded-md  bg-gray-300 py-1 hidden md:block " />
                </div>
              </div>

              {/* <!-- Item 4 --> */}
              <div
                className="hidden duration-700 ease-in-out flex justify-center items-center"
                data-carousel-item
              >
                <img
                  src="./images/background.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
                <h2 className="absolute font-bold text-3xl poppins">Skills</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
