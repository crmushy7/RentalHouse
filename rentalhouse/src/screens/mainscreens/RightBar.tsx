import React from "react";
import Avatered from "../../assets/images/Avatared.jpeg";

const RightBar = () => {
  return (
    <div className="w-48 h-screen  items-center flex flex-col">
      <span className="flex justify-around w-5/6">
        Your Balance<span>...</span>
      </span>
      <span className="h-16 items-center justify-evenly rounded-md mt-2 flex flex-col w-5/6 border">
        <span className="text-sm">Payment ID:j4gr673</span>
        <span className="font-bold">$67,830,374</span>
      </span>
      <span className="h-8 w-5/6 bg-blue-400 rounded-xl mt-4 hover:cursor-pointer text-center">
        Top up balance
      </span>
      <span className="h-48 items-center  rounded-md mt-6 flex flex-col w-5/6 ">
        <span className="text-sm font-bold flex justify-around w-full">
          Recent Messages<span>...</span>
        </span>
        <span className="flex w-full h-12 mt-3 ">
          <span className="w-12 h-full  flex justify-center rounded-full">
            <img className="flex rounded-full" src={Avatered} alt="pc" />
          </span>
          <span className="w-28 h-full ml-2 flex flex-col">
            <span className="font-semibold flex justify-between">
              Robertson
              <span className="border justify-center items-center rounded-full bg-red-500 flex w-4 h-2/3 text-sm text-center">
                <span className="text-sm">3</span>
              </span>
            </span>
            <span className="relative inline-block text-sm overflow-hidden">
              <span className="w-full block overflow-hidden whitespace-nowrap text-ellipsis">
                Hello there whats up
              </span>
            </span>
          </span>
        </span>
        <span className="flex w-full h-12 mt-3 ">
          <span className="w-12 h-full border flex justify-center rounded-full">
            <img className="flex rounded-full" src={Avatered} alt="pc" />
          </span>
          <span className="w-28 h-full ml-2 flex flex-col">
            <span className="font-semibold flex justify-between">
              Robertson
              <span className="border justify-center items-center rounded-full bg-red-500 flex w-4 h-2/3 text-sm text-center">
                <span className="text-sm">3</span>
              </span>
            </span>
            <span className="relative inline-block text-sm overflow-hidden">
              <span className="w-full block overflow-hidden whitespace-nowrap text-ellipsis">
                Hello there whats up
              </span>
            </span>
          </span>
        </span>{" "}
        <span className="flex w-full h-12 mt-3 ">
          <span className="w-12 h-full  flex justify-center rounded-full">
            <img className="flex rounded-full" src={Avatered} alt="pc" />
          </span>
          <span className="w-28 h-full ml-2 flex flex-col">
            <span className="font-semibold flex justify-between">
              Robertson
              <span className="border justify-center items-center rounded-full bg-red-500 flex w-4 h-2/3 text-sm text-center">
                <span className="text-sm">3</span>
              </span>
            </span>
            <span className="relative inline-block text-sm overflow-hidden">
              <span className="w-full block overflow-hidden whitespace-nowrap text-ellipsis">
                Hello there whats up
              </span>
            </span>
          </span>
        </span>
      </span>
      <span className="flex flex-col justify-evenly hover:cursor-pointer rounded-xl mt-8 h-44 w-5/6 bg-blue-400 border p-2">
        Search and find your favourite real estate
        <span>
          Learn more...
          <i className="pi pi-arrow-right ml-3" />
        </span>
      </span>
      <span className="flex flex-col justify-evenly items-center rounded-xl mt-8 h-44 w-5/6 border">
        <span className="text-blue-400">Help Center</span>
        <span className="text-blue-400 hover:cursor-pointer hover:border hover:rounded-xl">
          +255766059740
        </span>
        <span className="text-blue-400 hover:cursor-pointer hover:border hover:rounded-xl">
          +255766059740
        </span>
        <span className="text-blue-400 hover:cursor-pointer hover:border hover:rounded-xl">
          +255766059740
        </span>
      </span>
    </div>
  );
};

export default RightBar;
