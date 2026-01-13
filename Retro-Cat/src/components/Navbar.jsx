import React from "react";
import { Link } from "react-router-dom";
import { SiEpicgames } from "react-icons/si";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <div className=" flex justify-between items-center h-[100px] border-b-[1px] border-white pt-1 px-4 ">
        <div className=" ml-[328px] ">
          <Link to="/">
            <SiEpicgames className=" h-16 w-16 " />{" "}
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center gap-3 space-x-3 text-[22px] text-[#999ab0] ">
            <li>
              <Link
                to="/"
                onClick={() => setClicked(true)}
                className={`cursor-pointer transition-colors ${
                  clicked ? "text-[#33a0ff]" : "text-[#999ab0]"
                }`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link to="/Leaderboard">LEADERBOARD</Link>
            </li>
            <li>
              <Link to="/Free">FREE</Link>
            </li>
            <li>
              <Link to="/Store">STORE</Link>
            </li>
          </ul>
        </div>
        <div className="mr-2">
          <span>
            <button className=" bg-gradient-to-b from-[#00A6FF] to-[#397298] text-[#1D2333] font-bold text-[18px] w-[180px] py-2 rounded-[10px] cursor-pointer ">
              {" "}
              LOGIN{" "}
            </button>
          </span>
          <span className=" ml-5">
            <button className=" bg-gradient-to-b from-[#5A6F94] to-[#2C3A5F] text-[#1D2333] font-bold text-[18px] w-[180px] py-2 rounded-[10px] cursor-pointer ">
              {" "}
              REGISTER{" "}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
