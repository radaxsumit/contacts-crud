import React from "react";
import { TiSocialYoutube } from "react-icons/ti";
import { FaTwitch } from "react-icons/fa";
import { AiFillPinterest } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { FaRankingStar } from "react-icons/fa6";
import { FaGrinTongueWink } from "react-icons/fa";
import { GiTrophy } from "react-icons/gi";

const Leaderborad = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <div className=" flex justify-center flex-col items-center wifull h-92 mt-5 px-2">
        <div className=" text-3xl"> TITLES</div>
        <div className=" text-center">
          <div className=" mt-12 text-9xl ">
            <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#00A6FF] to-[#397298]">
              500{" "}
            </span>
            <span>LEADERBOARD</span>
          </div>
          <div className=" mt-4 text-2xl">
            <p>
              EVERY WAGER UNDER CODE CHIPADY{" "}
              <span className=" bg-clip-text text-transparent bg-gradient-to-b from-[#00A6FF] to-[#397298]">
                COUNTS{" "}
              </span>{" "}
              TOWARDS YOUR SCORE
            </p>
          </div>
        </div>
      </div>

      <div className=" flex gap-8">
        <div className=" rounded-2xl flex justify-between items-center border-[#c3e661] border-[3px] pt-2 w-[310px] h-[362px] mt-10 hover:scale-105 transition-all hover:shadow-lg hover:shadow-[#fffb00]/30 ">
        <img src="./src/assets/images/MeowInBlack.jpeg" alt="Fu" className=" rounded-2xl" />
        </div>

        <div className=" rounded-2xl flex justify-between items-center border-[#c3e661] border-[3px] pt-2 w-[310px] h-[362px] hover:scale-105 transition-all hover:shadow-lg hover:shadow-[#fffb00]/30">
        <img src="./src/assets/images/MeowSus.jpeg" alt="Fu" className=" rounded-2xl"/></div>

        <div className=" rounded-2xl flex justify-between items-center border-[#c3e661] border-[3px] pt-2 w-[310px] h-[362px] mt-10 hover:scale-105 transition-all hover:shadow-lg hover:shadow-[#fffb00]/30 ">
        <img src="./src/assets/images/Really.jpeg" alt="Fu" className=" rounded-2xl" /></div>
      </div>

      <div className="flex justify-center items-center flex-col mt-32 w-full">
        <h1 className=" text-4xl">LEADERBOARD ENDS IN</h1>
        <div className="  bg-clip-text text-transparent bg-gradient-to-b from-[#00A6FF] to-[#397298] text-7xl mt-2"> 69 DAYS FU:CK:00</div>
      </div>

      <div className=" flex justify-center items-center w-full">
        <div className=" mt-10 w-full max-w-[55rem]">

          <div className=" flex justify-between items-center my-5 mx-2 px-4 py-3 border-[3px] border-[#61B2E6] rounded-3xl hover:scale-105 transition-all hover:shadow-lg hover:shadow-[#00A6FF] text-3xl ">
            <div className=" w-1/3"><FaRankingStar /></div>
            <div className=" w-1/3 flex items-center justify-center"><FaGrinTongueWink /></div>
            <div className=" w-1/3 flex justify-end items-end"><GiTrophy /></div>
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

export default Leaderborad;
