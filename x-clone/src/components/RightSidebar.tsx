import React from "react";
import { BsSearch } from "react-icons/bs";

const RightSidebar = () => {
  return (
    <section className="w-full sticky top-2 overflow-scroll flex flex-col items-stretch h-screen px-6">
      <div className="">
        <div className="relative w-full h-full">
          <input
            id="searchBox"
            type="text"
            placeholder="Search"
            className="outline-none w-[350px] h-[44px] rounded-full py-4 px-12 bg-neutral-900/90 mt-2 focus:border-primary focus:border "
          />
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0 h-full flex items-center justify-center text-gray-500 p-4 peer-focus:text-primary"
          >
            <BsSearch />
          </label>
        </div>
      </div>
      <div className="overflow-y-auto">
        <div>
          <div className="flex flex-col rounded-xl bg-neutral-900 my-2 w-[350px]">
            <h3 className="font-bold text-2xl my-4 mx-4">
              Subscribe to Premium
            </h3>
            <h4 className="my-2 mx-4">
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </h4>
            <div>
              <button className="rounded-full px-6 py-2 bg-primary text-white ml-4 font-semibold mb-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-neutral-900 my-4 w-[350px]">
          <h3 className="font-bold text-2xl my-4 mx-4">What's Happening</h3>
          <div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="my-4 mx-4 hover:bg-white/5 last:rounded-b-xl"
              >
                <div className="font-bold text-lg">#trending ${i + 1}</div>
                <div className="text-xs text-neutral-500">35.4k</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-neutral-900 my-4 w-[350px]">
          <h3 className="font-bold text-2xl my-4 px-4">Who to follow</h3>
          <div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className=" hover:bg-white/5 p-4 flex items-center last:rounded-b-xl transition duration-200 space-x-2"
              >
                <div className=" w-10 h-10 bg-gray-400 rounded-full"></div>
                <div className="flex flex-col">
                  <div className="font-bold text-white">UserName</div>
                  <div className="text-gray-600">@username</div>
                </div>
                <div>
                  <button className="rounded-full px-6 py-2 bg-white text-neutral-950 ml-12 font-semibold">
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
