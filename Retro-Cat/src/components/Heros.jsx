import React from "react";

const Heros = () => {
  return (
    <div className=" flex justify-between items-center h-92 lg:mt-52 mt-20 md:mx-8 ">
      <div className=" mx-32 ">
        {" "}
        <img
          src="./src/assets/images/Ghostcod.png"
          alt=""
          className=" h-122 "
        />{" "}
      </div>
      <div className=" flex-1 w-64 text-center lg:mt-0 mt-20 leading-none ">
        <h1 className=" lg:text-9xl md:text-5xl text-4xl">WELCOME TO </h1>
        <h1 className=" bg-gradient-to-b bg-clip-text text-transparent from-[#7DC5FF] to-[#5385B4] text-[148px] ">
          RONAKGAYYY.OG{" "}
        </h1>

        <p className=" px-34 text-center text-xl">
          CLAIM{" "}
          <span className=" bg-gradient-to-b bg-clip-text text-transparent from-[#7DC5FF] to-[#5385B4] ">
            EXCLUSIVE{" "}
          </span>
          DEPOSIT BONUSES USING MY AFFILIATE PROGRAMS{" "}
          <span className=" bg-gradient-to-b bg-clip-text text-transparent from-[#7DC5FF] to-[#5385B4]">
            BEST
          </span>
          COMPETITIONS, GIVEAWAYS AND MORE.
        </p>

        <div className=" flex justify-center md:gap-14 mt-18 ">
          <span>
            <button className=" bg-gradient-to-b from-[#00A6FF] to-[#397298] text-[#1D2333] font-bold text-[18px] w-[180px] py-4 rounded-[10px] cursor-pointer ">
              {" "}
              CHAT{" "}
            </button>
          </span>
          <span className=" ml-5">
            <button className=" bg-gradient-to-b from-[#00A6FF] to-[#397298] text-[#1D2333] font-bold text-[18px] w-[180px] py-4 rounded-[10px] cursor-pointer ">
              {" "}
              STREAM{" "}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Heros;
