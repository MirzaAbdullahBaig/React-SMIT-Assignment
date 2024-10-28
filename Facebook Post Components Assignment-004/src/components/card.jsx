import React from "react";
import NoDpLogo from "../assets/logo/No-Dp.jpg";
import { SlOptions } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { MdInsertComment } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";

function Card({
  logo = NoDpLogo,
  usmername = "No Username",
  postTime = "5 mint ago",
  postText,
  postPicture,
  postVideo
}) {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#CECCC8] w-[400px] p-4 rounded-lg shadow-lg shadow-gray-500/50">
        <div className="flex justify-between items-center cursor-pointer hover:opacity-80 transition-opacity duration-200">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Hamas Logo"
              className="h-[60px] w-[60px] rounded-full border-2 border-gray-300"
            />
            <div>
              <h3 className="text-lg font-semibold">{usmername}</h3>
              <span className="text-sm text-gray-600">{postTime}</span>
            </div>
          </div>
          <SlOptions />
        </div>
        <p className="mt-4 mb-4 text-gray-700 leading-relaxed">{postText}</p>
        {postVideo ? (
          <video
            className="w-full rounded-md mt-3 hover:opacity-95 hover:scale-105 transition-transform duration-200"
            controls
            autoPlay
          >
            <source src={postVideo} />
          </video>
        ) : (
          postPicture && (
            <img
              src={postPicture}
              className="w-full rounded-md mt-3 hover:opacity-95 hover:scale-105 transition-transform duration-200"
            />
          )
        )}

        <div className="flex justify-around items-center py-3 border-t border-gray-300 mt-4">
          <FcLike className="h-[30px] w-[30px] hover:scale-110 transition-transform duration-200 cursor-pointer" />
          <MdInsertComment className="h-[30px] w-[30px] hover:scale-110 transition-transform duration-200 cursor-pointer" />
          <IoIosShareAlt className="h-[30px] w-[30px] hover:scale-110 transition-transform duration-200 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Card;
