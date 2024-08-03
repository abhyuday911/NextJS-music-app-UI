"use client";
import Image from "next/image";
import React, { use, useState } from "react";

const Player = () => {
  const [value, setValue] = useState(30);
  return (
    <div className="h-20 bg-secondaryBackground-dark flex-shrink-0 absolute bottom-0  z-30 w-full ">
      <div className="group w-screen h-[2px] bg-gray-400 absolute top-0">
        <div
          className={`h-[2px] bg-blue-500 absolute top-0`}
          style={{ width: `${value}%` }}
        ></div>
        <input
          type="range"
          name=""
          id=""
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full h-[2px]  absolute top-0 group-hover:h-[3px] cursor-pointer hidden group-hover:block"
        />
      </div>
      <div className="flex items-center justify-between h-full px-6 ">
        <div className="flex items-center gap-2 md:gap-4 lg:w-1/3 text-zinc-400">
          <Image
            src="https://via.placeholder.com/50"
            alt="cover"
            height={48}
            width={48}
            className="rounded-md"
          />
          <div className="cursor-pointer">
            <h3 className="text-sm font-semibold text-zinc-300">Song Title</h3>
            <p className="text-xs text-gray-400">Artist</p>
          </div>
          <div className="flex ml-4 gap-2 md:gap-4">
            <button>
              <i className="ri-thumb-up-line text-2xl "></i>
            </button>
            <button className="hidden md:block">
              <i className="ri-thumb-down-line text-2xl"></i>
            </button>
            <button>
              <i className="ri-more-2-fill text-2xl"></i>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <button className="hidden md:block">
            <i className="ri-skip-back-fill text-2xl"></i>
          </button>
          <button>
            <i className="ri-play-fill ri-3x"></i>
          </button>
          <button>
            <i className="ri-skip-forward-fill text-2xl"></i>
          </button>
        </div>
        <div className="hidden md:flex items-center justify-end gap-3 md:gap-6 lg:w-1/3">
          <button>
            <i className="ri-volume-up-fill text-2xl text-zinc-400"></i>
          </button>
          <button>
            <i className="ri-shuffle-line text-2xl text-zinc-400"></i>
          </button>
          <button>
            <i className="ri-repeat-2-line text-2xl text-zinc-400"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
