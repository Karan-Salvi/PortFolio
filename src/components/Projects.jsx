import { VscVerified } from "react-icons/vsc";
const Projects = () => {
  return (
    <>
      <section className="w-full h-auto flex justify-center py-5  dark:bg-slate-900">
        <div className="flex flex-col gap-3 justify-between items-center w-[87%] dark:border-b-[1px] dark:pb-12">
          <h2 className="text-2xl font-extrabold dark:text-white md:text-3xl md:mb-4">
            Projects
          </h2>
          <div className="grid grid-cols-1 w-full place-items-center gap-x-3 gap-y-6 sm:grid-cols-5">
            <div className="flex flex-col itmes-start w-full  sm:col-span-3 gap-y-2">
              <a
                href="https://github.com/Karan-Salvi/React-Projects/tree/main/Myntra%20Clone"
                className="border-gray-500 border-2 h-52 rounded-xl overflow-hidden object-cover flex justify-center items-center bg-gray-200 relative "
              >
                <img
                  src="./images/background.jpg"
                  className="w-full h-full"
                  alt=""
                />
                <div className="overflow-hidden flex justify-center items-center w-[87%] h-[87%] absolute">
                  <img
                    src="./images/Project.png"
                    className="rounded-lg"
                    alt=""
                  />
                </div>
              </a>
              <h2 className="text-sm font-bold flex items-center gap-x-1 dark:text-white">
                EcomMyntra <VscVerified className="text-purple-700" />
              </h2>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 poppins">
                The EcomMyntra is a Ecommerce Website like Myntra.This is MERN
                stack web application
              </p>
            </div>

            <div className="flex flex-col itmes-start w-full  sm:col-span-2 gap-y-2">
              <a
                href="https://github.com/Karan-Salvi/Web-Study"
                className="border-gray-500 border-2 w-full h-52 rounded-xl overflow-hidden object-cover flex justify-center items-center bg-gray-200 relative sm:col-span-2"
              >
                <img
                  src="./images/background.jpg"
                  className="w-full h-full"
                  alt=""
                />
                <div className="overflow-hidden w-[87%] h-auto flex justify-center items-center absolute">
                  <img
                    src="./images/StudySync.png"
                    className="rounded-lg"
                    alt=""
                  />
                </div>
              </a>
              <h2 className="text-sm font-bold flex items-center gap-x-1 dark:text-white">
                StudySync <VscVerified className="text-purple-700" />
              </h2>
              <p className="text-xs font-medium text-gray-500  dark:text-gray-400 poppins">
                StudySync is a E-learning platform. This is React application.
              </p>
            </div>

            <div className="flex flex-col itmes-start w-full  sm:col-span-2 gap-y-2">
              <a
                href="https://github.com/Karan-Salvi/Notepal-App"
                className="border-gray-500 border-2 w-full h-52 rounded-xl overflow-hidden object-cover flex justify-center items-center bg-gray-200 relative sm:col-span-2"
              >
                <img
                  src="./images/background.jpg"
                  className="w-full h-full"
                  alt=""
                />
                <div className="overflow-hidden w-[87%] h-auto flex justify-center items-center absolute">
                  <img
                    src="./images/Notepal.png"
                    className="rounded-lg"
                    alt=""
                  />
                </div>
              </a>
              <h2 className="text-sm font-bold flex items-center gap-x-1 dark:text-white">
                Notepal <VscVerified className="text-purple-700" />
              </h2>
              <p className="text-xs font-medium text-gray-500  dark:text-gray-400 poppins">
                Notepal is notetaking react application. Redux is used for state
                management
              </p>
            </div>

            <div className="flex flex-col itmes-start w-full  sm:col-span-3 gap-y-2">
              <a
                href="https://github.com/Karan-Salvi/Blog-web-application"
                className="border-gray-500 border-2 h-52 rounded-xl overflow-hidden object-cover flex justify-center items-center bg-gray-200 relative "
              >
                <img
                  src="./images/background.jpg"
                  className="w-full h-full"
                  alt=""
                />
                <div className="overflow-hidden flex justify-center items-center w-[87%] h-[87%] absolute rounded-lg">
                  <img src="./images/Blogify.png" className="" alt="" />
                </div>
              </a>
              <h2 className="text-sm font-bold flex items-center gap-x-1 dark:text-white">
                Blogify <VscVerified className="text-purple-700" />
              </h2>
              <p className="text-xs font-medium text-gray-500  dark:text-gray-400 poppins">
                Blogify is a Blogging MERN application. Included various
                features in this Web application.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
