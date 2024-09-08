import Link from "next/link";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const StepTwo: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(6);
  const [isModalVisible, setModalVisible] = useState(true);

  return (
    <div className="p-6 relative">
      {/* Content of the Transaction Review */}
      <div className="flex justify-between items-center mb-4">
        <button className="text-primary-blue">
          {/* Back button icon */}
          <TiTick />
        </button>
        <div className="text-lg font-semibold">Transaction review</div>
      </div>

      {/* Apartment Information */}
      <div className="bg-gray-100 rounded-lg p-4 mb-4 flex">
        <div className="w-24 h-24 rounded-lg overflow-hidden mr-4">
          <img
            src="assets/apart.png"
            alt="Apartment"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold">Sky Dandelions Apartment</div>
          <div className="text-gray-500 text-sm">Sector 28, Gurgaon</div>
          <div className="text-primary-blue font-semibold mt-2">₹ 22,020</div>
        </div>
      </div>

      {/* Select Period */}
      <div className="mb-4">
        <div className="text-lg font-semibold mb-2">Select Period</div>
        <div className="flex justify-between">
          <button
            className={`w-full mr-2 py-2 rounded-lg border ${
              selectedPeriod === 3
                ? "bg-primary-blue text-white"
                : "border-primary-blue text-primary-blue"
            }`}
            onClick={() => setSelectedPeriod(3)}
          >
            3 months
          </button>
          <button
            className={`w-full mx-2 py-2 rounded-lg border ${
              selectedPeriod === 6
                ? "bg-primary-blue text-white"
                : "border-primary-blue text-primary-blue"
            }`}
            onClick={() => setSelectedPeriod(6)}
          >
            6 months
          </button>
          <button
            className={`w-full ml-2 py-2 rounded-lg border ${
              selectedPeriod === 9
                ? "bg-primary-blue text-white"
                : "border-primary-blue text-primary-blue"
            }`}
            onClick={() => setSelectedPeriod(9)}
          >
            9 months
          </button>
        </div>
      </div>

      {/* Payment Detail */}
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        {/* <div className="text-lg font-semibold mb-2">Payment Detail</div> */}
        <div className="text-gray-700 mb-2">
          <div className="flex justify-between">
            <span>Period time</span>
            <span>{selectedPeriod} month</span>
          </div>
          <div className="flex justify-between">
            <span>Monthly payment</span>
            <span>₹ 22,020</span>
          </div>
          <div className="flex justify-between">
            <span>Security deposit</span>
            <span>₹ 0</span>
          </div>
        </div>
        <div className="bg-blue-100 text-primary-blue font-semibold rounded-md mt-4 p-2 flex justify-between">
          <span>Total</span>
          <span>₹ {selectedPeriod * 22020}</span>
        </div>
      </div>

      {/* Pay Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-primary-blue text-white font-semibold py-2 px-6 rounded-full">
          Pay with Circle
        </button>
      </div>

      {/* Modal Overlay */}
      {isModalVisible && (
        <div className="absolute bottom-0 left-0 w-full h-fit flex justify-center items-center z-10 shad rounded-3xl">
          <div className="bg-white py-6 px-2 w-11/12 max-w-lg">
            <div className="text-center text-md font-semibold mb-2">
              Rent at <span className="text-primary-blue">Zero</span> security
              deposit ✨
            </div>
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 rounded-full p-4">
                {/* Approved Icon */}
                <TiTick size={28} color="#5AA5FD" />
              </div>
            </div>
            <div className="text-center text-lg font-semibold mb-4">
              Approved
            </div>
            <ul className="text-left text-gray-700 mb-4">
              <li className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-primary-blue mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                New Rent Offer: ₹ 20,000
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-primary-blue mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Zero security deposit{" "}
                <span className="text-primary-blue underline">move-in</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary-blue mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                3-Months <span className="text-primary-blue">salary cover</span>
              </li>
            </ul>
            <div className="flex justify-center">
              <Link href="/stepThree">
                <button className="bg-primary-blue text-white font-semibold py-2 px-6 rounded-full">
                  Pay with Circle
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepTwo;
