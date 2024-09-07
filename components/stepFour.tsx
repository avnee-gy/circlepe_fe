import React from "react";
import { PiConfettiDuotone } from "react-icons/pi";

const StepFour: React.FC = () => {
  return (
    <div className="pt-6 px-3 overflow-y-visible text-sm">
      <div className="flex justify-evenly text-[10px]">
        <p className="p-2 px-3 bg-green-100 text-green-500">Setup Autopay</p>
        <p className="p-2 px-3 bg-green-100 text-green-500">Setup Autopay</p>
        <p className="p-2 px-3 bg-blue-100 text-blue-500">KYC & move-in</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="text-l font-semibold text-center mb-1">
          One step away ✨
        </div>
        <div className="text-blue-500 text-center mb-4">
          from your dream home
        </div>
        <div className="flex justify-center mb-3">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            {/* Icon placeholder */}
            <PiConfettiDuotone size={30} color="#5AA5FD" />
          </div>
        </div>
        <div className="rounded-lg py-4 text-center">
          <div className="text-blue-500 bg-blue-100 px-3 py-1 rounded font-semibold mb-2">
            Rent converted to Zero-Cost EMI
          </div>
          <div className="text-gray-700">
            <div className="mb-2 flex justify-between">
              <span className="font-semibold text-[14px]">
                Co-living partner:{" "}
              </span>
              Rent-OK
            </div>
            <div className="mb-2 flex justify-between">
              <span className="font-semibold text-[14px]">
                Payment Amount:{" "}
              </span>
              INR XXXX.00
            </div>
            <div className="mb-2 flex justify-between">
              <span className="font-semibold text-[14px]">Monthly rent: </span>
              10,000 INR/mo.
            </div>
            <div className="mb-2 flex justify-between">
              <span className="font-semibold text-[14px]">Rent cycle: </span>5
              Months
            </div>
          </div>
          <div className="bg-green-100 text-green-600 font-semibold rounded-md mt-4 p-2">
            Zero COST EMI
          </div>
        </div>
        <div className="mt-2 text-[10px] text-gray-500 items-center">
          <input type="checkbox" className="form-checkbox" />
          <span>By clicking on next, you acknowledge that you have read </span>
          <span className="underline">Loan Agreement & KES</span> agreed to the
          terms and conditions contained in the loan agreement.
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full">
          Continue &gt;
        </button>
      </div>
    </div>
  );
};

export default StepFour;
