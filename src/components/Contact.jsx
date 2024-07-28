import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_z28rsn8", "template_7xydsa7", form.current, {
        publicKey: "20rEzkTzn03iD066b",
      })
      .then(
        () => {
          name.current.value = " ";
          email.current.value = " ";
          message.current.value = " ";
          alert("Your message is send successfully.Thank you for messaging..");
        },
        (error) => {
          alert(
            "Sorry your message is not sent. Can you please retry to send the message."
          );
        }
      );
  };

  return (
    <section className="w-full h-auto flex justify-center py-5 dark:bg-slate-900 ">
      <div className="flex flex-col gap-3 justify-between items-center w-[90%] sm:w-[87%] dark:border-b-[1px] dark:pb-6">
        <h2 className="text-2xl font-extrabold dark:text-white mt-1 md:text-3xl md:mb-4">
          Contact Me:
        </h2>
        <div className="flex justify-between w-full">
          <div className="overflow-hidden object-contain w-[70%] hidden md:block">
            <img src="./images/contact.png" className="w-full h-auto" alt="" />
          </div>

          <div className="flex justify-center w-full">
            <form
              ref={form}
              onSubmit={sendEmail}
              className=" w-full md:flex md:flex-col md:justify-between md:pt-2 md:gap-1 md:pb-2 lg:h-[85%]"
            >
              <div className="w-full">
                <label
                  for="website-admin"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username :
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    ref={name}
                    name="from_name"
                    id="website-admin"
                    className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-purple-500 focus:border-purple-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                    placeholder="Enter your name.."
                  />
                </div>
              </div>

              <div className="w-full">
                <label
                  for="input-group-1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email :{" "}
                </label>
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="input-group-1"
                    ref={email}
                    name="from_email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                    placeholder="Enter your email here.."
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your message :
                </label>
                <textarea
                  id="message"
                  name="message"
                  ref={message}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                  placeholder="Enter your message for me...."
                ></textarea>
              </div>
              <center className="w-full md:hidden">
                <input
                  type="submit"
                  value="Send"
                  className="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-400 font-semibold rounded-md  px-10 py-1 sm:px-3 sm:py-2 text-center dark:border-purple-500 dark:text-gray-700 dark:hover:text-black dark:hover:bg-gray-50 dark:focus:ring-purple-900 my-3"
                />
              </center>
              <input
                type="submit"
                value="Send"
                className="text-black bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-400 font-semibold rounded-md  px-2 py-1 sm:px-3 sm:py-2 text-center dark:border-purple-500 dark:text-gray-700 dark:hover:text-black dark:hover:bg-gray-50 dark:focus:ring-purple-900 my-3 w-[35%] hidden md:block"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
