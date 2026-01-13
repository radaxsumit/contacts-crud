import React from "react";
import { TiSocialYoutube } from "react-icons/ti";
import { FaTwitch } from "react-icons/fa";
import { AiFillPinterest } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";

const Free = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <div className="flex flex-col items-center justify-center h-102 lg:max-w-[80rem] w-full  ">
        <div className=" flex flex-col justify-center items-center mt-54 ">
          <h1 className="text-[140px] bg-clip-text text-transparent bg-gradient-to-b from-[#00A6FF] to-[#397298]">
            {" "}
            REFERRALS{" "}
          </h1>
          <span className=" text-2xl ">
            SIGN UP AND RECEIVE DIFFERENT BONUSES!
          </span>
        </div>

        <div className=" flex justify-center items-center gap-10 mt-20">
          <div className=" rounded-2xl flex flex-col justify-between items-center border-[#61B2E6] border-[2px] pt-2 w-[310px] h-[162px] hover:scale-105 transition-all ">
            <div> IMG </div>
            <p className=" text-2xl">
              {" "}
              <span className=" text-[#61B2E6] ">+5%</span> GAY AS FUK
            </p>
            <div className=" text-2xl w-full bg-[#61B2E6] text-center rounded-b-2xl">CLAIM HERE</div>
          </div>
          <div className=" rounded-2xl flex flex-col justify-between items-center border-[#61B2E6] border-[2px] pt-2 w-[310px] h-[162px] hover:scale-105 transition-all ">
            <div> IMG </div>
            <p className=" text-2xl">
              {" "}
              <span className=" text-[#61B2E6] ">+25%</span> GAY AS FUK
            </p>
            <div className=" text-2xl w-full bg-[#61B2E6] text-center rounded-b-2xl">CLAIM HERE</div>
          </div>
          <div className=" rounded-2xl flex flex-col justify-between items-center border-[#61B2E6] border-[2px] pt-2 w-[310px] h-[162px] hover:scale-105 transition-all ">
            <div> IMG </div>
            <p className=" text-2xl">
              {" "}
              <span className=" text-[#61B2E6] ">+75%</span> GAY AS FUK
            </p>
            <div className=" text-2xl w-full bg-[#61B2E6] text-center rounded-b-2xl">CLAIM HERE</div>
          </div>
        </div>
      </div>

      <div className=" flex  justify-center items-end gap-6 mb-10 h-82">
        <div>
          <SiDiscord className=" size-10 hover:scale-125 transition-all " />
        </div>
        <div>
          <TiSocialYoutube className=" size-10 hover:scale-125 transition-all" />
        </div>
        <div>
          <FaTwitch className=" size-10 hover:scale-125 transition-all" />
        </div>
        <div>
          <AiFillPinterest className=" size-10 hover:scale-125 transition-all" />
        </div>
      </div>
    </div>
  );
};

export default Free;
