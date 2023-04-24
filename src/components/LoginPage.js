import React, { useState } from "react";
import LoginTab from "./LoginTab";
import LoginNavbar from "./LoginNavbar";
import { Navbar } from "@material-tailwind/react";

const LoginPage = () => {

  return (
    <div className="flex md:flex-row flex-col">
      {/* NavBar */}
      <LoginNavbar/>
      <div className="flex md:flex-row flex-col">
        {/* left-container */}
        <div className="lg:w-3/5">
          <img
            src="./images/415.jpg"
            alt="doctor-image"
            className="object-cover h-full w-full hidden md:block mt-6 p-2"
          />
        </div>
        {/* right-container */}
        <div className="px-4 md:px-0 lg:w-2/5 p-2 flex flex-col items-center justify-around">
          <div className="md:mx-6 md:p-4">
            {/*Logo*/}
            <div className="text-center">
              <img
                className="mx-auto w-48"
                src="./images/GradientLogo.png"
                alt="logo"
              />
              <h4 className="mb-4 pb-1 text-3xl font-serif font-bold text-blue-900 mt-8 border-b border-solid border-blue-900">
                Login Portal
              </h4>
            </div>
            <div>
              <LoginTab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;