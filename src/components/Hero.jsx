const Hero = () => {
  return (
    <>
      <div className="w-full flex justify-center dark:bg-slate-900 h-auto sm:h-[70vh] lg:h-[80vh] pb-3 bg-gray-100">
        <div className="flex flex-col-reverse justify-between items-center sm:flex-row sm:w-[85%] dark:border-b-[1px] dark:pb-6 dark:sm:pb-0">
          <div className="flex flex-col items-center gap-2 sm:items-start sm:gap-3 lg:gap-5 dark:text-white">
            <p className="">Hey I'm Karan</p>
            <h2 className="text-4xl font-extrabold sm:text-5xl md:text-7xl lg:text-8xl">
              <span className="text-purple-700">Full</span>Stack Developer
            </h2>
            <p className="text-base px-4 text-center sm:text-start sm:px-0">
              I am MERN Full Stack Devloper based in Pune, I can help you to
              build end to end and fully functional Web applications which user
              will definately love..
            </p>
            <div className="flex justify-center gap-2 my-2 w-full sm:justify-start">
              <a
                href="https://www.linkedin.com/in/karan-salvi-142813267/"
                className="text-white bg-gray-600 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-400 font-semibold rounded-md  px-3 py-1 sm:px-3 sm:py-2 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Get In Touch
              </a>

              <a
                href="https://github.com/Karan-Salvi"
                className="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-400 font-semibold rounded-md  px-3 py-1 sm:px-3 sm:py-2 text-center dark:border-purple-500 dark:text-gray-700 dark:hover:text-black dark:hover:bg-gray-50 dark:focus:ring-purple-900"
              >
                Browse Projects
              </a>
            </div>
          </div>
          <div className="w-full h-auto p-7 sm:p-2 md:p-4 lg:p-36 flex justify-end">
            <div className="h-full w-full border-gray-400 border-2 rounded-full p-6">
              <div className="rounded-full overflow-hidden object-contain object-center ">
                <img
                  src="./images/ProfileImage.jpeg"
                  alt="ProfileImage"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
