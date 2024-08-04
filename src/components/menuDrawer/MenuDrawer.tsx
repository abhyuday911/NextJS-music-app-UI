"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const sidepanel = [
  {
    name: "Home",
    icon: "home-line",
  },
  {
    name: "Discover",
    icon: "compass-3-line",
  },
  {
    name: "Collections",
    icon: "folder-music-line",
  },
  {
    name: "Downloads",
    icon: "download-2-line",
  },
  {
    name: "Favourites",
    icon: "heart-3-line",
  },
  {
    name: "Local Files",
    icon: "folder-reduce-line",
  },
];

const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="absolute top-0 lg:hidden p-2 h-20 flex items-center justify-center text-zinc-400 z-10">
        <button onClick={toggleDrawer} className="ri-xl">
          <i className={`ri-menu-${isOpen ? "fold" : "unfold"}-line`}></i>
        </button>
      </div>
      <div
        className={`flex-col ${
          isOpen ? "w-60 lg:flex" : "md:w-16 hidden lg:flex"
        } bg-secondaryBackground-dark text-zinc-400 h-screen transition-width duration-300 flex-shrink-0 absolute lg:static z-10 `}
      >
        <div className="flex items-center justify-between p-4 h-16">
          <Link
            href="/"
            className={`${
              isOpen ? "block" : "hidden"
            } text-xl font-semibold cursor-pointer`}
          >
            <Image src={"/logo.png"} width={32} height={32} alt="logo" />
          </Link>
          <button onClick={toggleDrawer} className="ri-xl">
            <i className={`ri-menu-${isOpen ? "fold" : "unfold"}-line`}></i>
          </button>
        </div>
        <ul className="flex-1">
          {sidepanel.map((item, index) => (
            <React.Fragment key={index}>
              <li
                key={index}
                className="flex items-center p-4 hover:bg-zinc-900 cursor-pointer h-12"
              >
                <i className={`ri-${item.icon} ri-xl`}></i>
                <span className={`${isOpen ? "ml-3" : "hidden"} text-nowrap`}>
                  {item.name}
                </span>
              </li>
              {index === 2 && <br />}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MenuDrawer;
