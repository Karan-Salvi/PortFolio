import React from "react";
import "../App.css";
import { MdMarkEmailRead } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section className="w-full h-auto flex justify-center py-5 pb-8  bg-gray-100 dark:bg-slate-900 ">
        <div className="flex flex-col gap-3 justify-between items-center w-[90%] sm:w-[87%] dark:border-b-[1px] dark:pb-14">
          <h2 className="text-2xl font-extrabold dark:text-white mt-3 md:text-3xl md:mb-4">
            About me
          </h2>
          <div className="flex flex-col-reverse items-center w-full h-auto sm:flex-row-reverse sm:gap-4 border-4 border-gray-400 sm:p-5 md:h-auto rounded-lg p-5 lg:h-auto dark:border-purple-700 ">
            <div className="flex flex-col items-center text-center gap-y-2 sm:items-start sm:text-start ">
              <h1 className=" text-2xl font-extrabold sm:text-3xl lg:text-6xl dark:text-white poppins">
                I am <span className="text-purple-700">MERN</span> stack
                Devolper
              </h1>
              <p className="text-sm text-gray-700 sm:text-base dark:text-white poppins lg:my-3">
                I am very passionate to learn new technologies and and apply
                those in real world problems. I am very focused and hardworking
                towards my work. I am always learning new and mastering the
                things that I know.{" "}
                <span className="hidden lg:block">
                  I have worked on various MERN projects and I have a great
                  understanding of React.js. I also used various css framework
                  like Tailwind CSS , Bootstrap in my projects. I use NoSQL
                  database like mongoDB in projects. Currently learning devops
                  concepts to excel in my full stack career. So if anyone have
                  any great opportunity then any time contact. I am always to
                  get hired.
                </span>
              </p>

              <div className="w-full h-auto sm:text-start ">
                <h2 className="text-xl font-bold sm:text-2xl sm:my-1 mb-2 dark:text-white">
                  Education Details :
                </h2>
                <p className="text-sm text-gray-500 font-medium sm:my-1 sm:text-base sm:font-semibold dark:text-white">
                  Currently In : TE Computer Engineering
                </p>
                <p className="text-sm text-gray-600 font-medium sm:my-1 sm:text-base sm:font-semibold dark:text-white">
                  Current SGPA : 8.64{" "}
                </p>
              </div>

              <div className="flex justify-center gap-2 my-2 w-full sm:justify-start">
                <a
                  type="button"
                  href="mailto:karasalviwork@gmail.com"
                  className="text-white bg-gray-600 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-400 font-semibold rounded-md  px-3 py-1 sm:px-3 sm:py-2 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Hire me
                </a>

                <a
                  type="button"
                  href="./images/Resume.pdf"
                  download={"Resume"}
                  className="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-400 font-semibold rounded-md  px-3 py-1 sm:px-3 sm:py-2 text-center dark:border-purple-500 dark:text-gray-700 dark:hover:text-black dark:hover:bg-gray-50 dark:focus:ring-purple-900"
                >
                  Resume
                </a>
              </div>

              <div className="w-full h-auto flex flex-col text-start border-2 border-gray-300 hover:border-gray-400 rounded-lg px-2 py-1 hover:bg-gray-200 dark:text-white dark:hover:bg-slate-800 cursor-pointer">
                <h2 className="font-bold">Contact Details : </h2>
                <a
                  href="mailto:karansalviwork@gmail.com"
                  className="flex items-center gap-x-2  sm:text-lg"
                >
                  <MdMarkEmailRead className="sm:text-lg" />{" "}
                  karansalviwork@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/karan-salvi-142813267/"
                  className="flex items-center gap-x-2 sm:text-lg"
                >
                  <IoLogoLinkedin className="sm:text-lg" />{" "}
                  linkedin.com/in/karan-salvi/
                </a>
                <a
                  href="https://github.com/Karan-Salvi"
                  className="flex items-center gap-x-2 sm:text-lg"
                >
                  <FaGithub className="sm:text-lg" /> github.com/Karan-Salvi
                </a>
              </div>
            </div>

            <div
              className="relative w-full h-auto border-2 border-gray-500 p-4 sm:w-[100vw] sm:h-[35vh] md:h-[40vh] border-t-2 border-t-purple-500 border-b-purple-500 lg:h-[65] lg:w-[99vh]"
              style={{ borderRadius: "72% 28% 49% 51% / 40% 48% 52% 60% " }}
            >
              <div
                className="w-full h-[40vh] sm:h-full overflow-hidden object-contain reimagine"
                style={{ borderRadius: "72% 28% 49% 51% / 40% 48% 52% 60% " }}
              >
                <img
                  src="./images/profileImage.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
