// components/StepThreeScreen.tsx
"use client";
import StepThree from "@/components/step3";
import React, { useState, useEffect } from "react";

const StepThreeScreen: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ml-100 bg-bg-dark grad">
      {/* Left Section: Step and Description */}
      <div className="text-left text-white w-1/2">
        <h2 className="text-5xl font-medium mb-4 text-[#888888]">
          Step <span className="text-white">3</span>
        </h2>
        <hr className="w-12 my-5 h-1 bg-primary-blue" />
        <div className="flex items-center">
          <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
          <p className="text-desc">Smooth Onboarding for the Tenant begins</p>
        </div>
        {/* Dotted arrow */}
      </div>

      {/* Right Section: Mobile Mockup */}
      <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-80 h-[570px] bg-black rounded-[3rem] border-4 border-gray-800 p-2 relative">
          <div className="w-full h-8 bg-black absolute top-0 left-0 rounded-t-[3rem] flex justify-center">
            <div className="w-1/3 h-6 bg-black absolute top-0 rounded-b-xl"></div>
          </div>
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
            {/* <StepThreeScreen /> */}
            <StepThree />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThreeScreen;
