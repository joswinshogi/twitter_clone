import React from 'react'
import { BiRepost } from "react-icons/bi";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";

const MainComponent = () => {
  return (
    <main className="ml-[275px] mx-2 flex w-[600px] h-full flex-col min-h-screen border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-3xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
            Home
          </h1>
          <div className="border-t-[0.5px] border-b-[0.5px] flex items-stretch py-4 space-x-2 border-gray-600 h-36 relative px-6">
            <div className=" w-10 h-10 rounded-full bg-slate-400 flex-none"></div>
            <div className=" flex flex-col w-full h-full">
              <input
                className="h-full w-full bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none border-none placeholder:text-xl placeholder:text-gray-500"
                type="text"
                placeholder="What is happening?!"
              />

              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="text-white flex justify-center space-x-2 m-4 rounded-full px-4 py-2 w-full text-lg font-bold bg-primary hover:bg-opacity-90 transition duration-200">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="p-4 border-b-[0.5px] flex space-x-4 border-gray-600"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-slate-400"></div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-1 w-full">
                      <div className=" font-bold">UserName</div>
                      <div className="text-gray-500">@username</div>
                      <div className="text-gray-500">
                        <BsDot />
                      </div>
                      <div className="text-gray-500">1 hour ago</div>
                    </div>
                    <div>
                      <BsThreeDots />
                    </div>
                  </div>
                  <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Esse impedit, optio, dolorum debitis doloremque illum
                    expedita ea nostrum ipsa quaerat doloribus provident quasi
                    dolores. Quibusdam obcaecati aliquid unde nemo sequi
                    repellat dolorum recusandae porro placeat, non, incidunt
                    odit quidem tenetur voluptates accusantium atque voluptas,
                    doloribus saepe at impedit vero minus!
                  </div>
                  <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl"></div>
                  <div className="flex items-center justify-around w-full">
                    <div className="hover:bg-white/20 rounded-full p-3 transition duration-200 cursor-pointer">
                      <FaRegComment />
                    </div>
                    <div className="hover:bg-white/20 rounded-full p-3 transition duration-200 cursor-pointer">
                      <BiRepost />
                    </div>
                    <div className="hover:bg-white/20 rounded-full p-3 transition duration-200 cursor-pointer">
                      <CiHeart />
                    </div>
                    <div className="hover:bg-white/20 rounded-full p-3 transition duration-200 cursor-pointer">
                      <IoStatsChart />
                    </div>
                    <div className="hover:bg-white/20 rounded-full p-3 transition duration-200 cursor-pointer">
                      <IoShareOutline />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
  )
}

export default MainComponent
