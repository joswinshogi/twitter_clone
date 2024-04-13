import React from 'react'
import { BiHomeCircle } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { LiaBookmarkSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";


const NAVIGATION_ITEMS = [
    {
      title: "Twitter",
      icon: BsTwitterX,
    },
    {
      title: "Home",
      icon: BiHomeCircle,
    },
    {
      title: "Explore",
      icon: IoSearch,
    },
    {
      title: "Notifications",
      icon: IoNotificationsOutline,
    },
    {
      title: "Messages",
      icon: BsEnvelope,
    },
    {
      title: "Bookmarks",
      icon: LiaBookmarkSolid,
    },
    {
      title: "Profile",
      icon: AiOutlineUser,
    },
  ];

const LeftSidebar = () => {
  return (
    <section className="fixed w-[275px] flex flex-col items-stretch h-screen px-4">
          <div className="flex flex-col items-stretch h-full space-y-2 mt-4 ">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                className="hover:bg-white/10 text-xl transition duration-150 flex items-center justify-start w-fit space-x-4 rounded-3xl p-4"
                href={`/${item.title.toLowerCase}`}
                key={item.title}
              >
                <div>
                  <item.icon />
                </div>
                <div>{item.title !== "Twitter" && item.title}</div>
              </Link>
            ))}
            <button className="text-white flex justify-center space-x-2 m-4 rounded-full p-4 font-bold bg-primary hover:bg-opacity-90 transition duration-200">
              Post
            </button>
          </div>
          <button className="rounded-full flex items-center space-x-2 m-4 hover:bg-white/10 p-4 text-2xl text-center  transition duration-200 w-full justify-between">
            <div className=" flex items-center space-x-2">
              <div className="rounded-full bg-slate-400 h-12 w-12"></div>
              <div className="text-left text-sm">
                <div className="font-bold">User Name</div>
                <div className="text-gray-500">@username</div>
              </div>
            </div>
            <div>
              <BsThreeDots />
            </div>
          </button>
        </section>
  )
}

export default LeftSidebar
