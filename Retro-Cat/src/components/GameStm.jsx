import React from "react";
import { SiDiscord } from "react-icons/si";
import { TiSocialYoutube } from "react-icons/ti";
import { FaTwitch } from "react-icons/fa";
import { AiFillPinterest } from "react-icons/ai";
import { FaDisplay } from "react-icons/fa6";
import { PiAirplayFill } from "react-icons/pi";

const GameStm = () => {
  return (
    <div className=" flex flex-col justify-center items-center md:mt-62 mt-20 ">
      <div className=" flex justify-start items-center mb-1 w-[40%]">
        {" "}
        <FaDisplay className=" size-6 ml-1" />{" "}
        <p className=" px-1"> LIVE STREAM </p>
      </div>
      <div className=" lg:w-[40%] w-full h-116 px-3  border-[5px] border-[#006AFF] bg-black hover:shadow-lg hover:shadow-[#006AFF]">
        <div className=" flex justify-center items-center h-full ">
          <h1 className=" text-2xl ">STREAMING WINDOW</h1>
        </div>
      </div>
      <div className=" lg:mt-40 mt-16 w-full flex flex-col lg:w-[80rem] ">
        <div className=" text-6xl text-center mb-10 bg-clip-text text-transparent bg-gradient-to-b from-[#00A6FF] to-[#397298] ">
          {" "}
          RECENT CLIPS{" "}
        </div>

        <div className=" text-black flex flex-col md:flex-row justify-center items-center lg:gap-10 gap-4 mt-5 pb-10 px-4  ">
          <div className=" border-[3px] text-white flex justify-center text-center py-26 border-[#006AFF] bg-black aspect-video lg:w-[40%] w-full hover:scale-90 transition-all duration-150  hover:shadow-lg hover:shadow-[#006AFF] ">
            {" "}
            <PiAirplayFill className=" size-8" />{" "}
          </div>
          <div className=" border-[3px] text-white flex justify-center text-center py-26 border-[#006AFF] bg-black aspect-video lg:w-[40%] w-full hover:scale-90 transition-all duration-150  hover:shadow-lg hover:shadow-[#006AFF] ">
            {" "}
            <PiAirplayFill className=" size-8" />{" "}
          </div>
          <div className=" border-[3px] text-white flex justify-center text-center py-26 border-[#006AFF] bg-black aspect-video lg:w-[40%] w-full hover:scale-90 transition-all duration-150  hover:shadow-lg hover:shadow-[#006AFF] ">
            {" "}
            <PiAirplayFill className=" size-8" />{" "}
          </div>
        </div>

        <div className=" flex justify-center items-end gap-6 mb-10 h-52">
          <div>
            <SiDiscord className=" size-10 hover:scale-125 transition-all " />
          </div>
          <div>
            <TiSocialYoutube className=" size-10 hover:scale-125 transition-all " />
          </div>
          <div>
            <FaTwitch className=" size-10 hover:scale-125 transition-all " />
          </div>
          <div>
            <AiFillPinterest className=" size-10 hover:scale-125 transition-all " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameStm;
