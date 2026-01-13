import React from "react";
import { TiSocialYoutube } from "react-icons/ti";
import { FaTwitch } from "react-icons/fa";
import { AiFillPinterest } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";

const Store = () => {
  return (
    <div >
      <div className="flex items-center justify-center h-162 ">
        <h1 className="text-9xl bg-clip-text text-transparent bg-gradient-to-b from-[#00A6FF] to-[#397298] ">
          {" "}
          COMING SOON{" "}
        </h1>
      </div>

      <div className=" flex  justify-center items-end gap-6 mb-10 h-52">
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

export default Store;
