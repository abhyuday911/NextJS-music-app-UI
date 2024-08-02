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
];

const MenuDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    console.log("toggleDrawer");
  };

  return (
    <div
      className={`flex flex-col ${
        isOpen ? "w-64" : "w-16"
      } bg-secondaryBackground-dark text-white h-screen transition-width duration-300`}
    >
      <div className="flex items-center justify-between p-4 h-16">
        <Link href="/"
          className={`${
            isOpen ? "block" : "hidden"
          } text-xl font-semibold cursor-pointer`}
        >
          <Image src={"/logo.png"} width={32} height={32} alt="logo" />
        </Link >
        <button onClick={toggleDrawer} className="ri-xl">
          <i className={`ri-menu-${isOpen ? "fold" : "unfold"}-line`}></i>
        </button>
      </div>
      <ul className="flex-1">
        {sidepanel.map((item, index) => (
          <li key={index} className="flex items-center p-4 hover:bg-zinc-900 cursor-pointer h-12">
            <i className={`ri-${item.icon} ri-xl`}></i>
            <span className={`${isOpen ? "ml-3" : "hidden"}`}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuDrawer;
