"use client";

import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] flex flex-col items-center justify-center sm:w-96 w-[80vw] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer rounded-xl shadow-md hover:shadow-xl p-4 border border-gray-200 dark:border-gray-700"
            key={item.id}
          >
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
              <div
                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <img
                  src="/bg.png"
                  alt="bgimg"
                  className="w-full h-full object-cover"
                />
              </div>
              <img
                src={item.img}
                alt="cover"
                className="z-10 absolute bottom-0"
              />
            </div>

            <h1 className="font-bold lg:text-2xl md:text-xl text-base text-center">
              {item.title}
            </h1>

            {/* Removed line-clamp-2 to show full description */}
            <p
              className="lg:text-xl lg:font-normal font-light text-sm text-center mt-4"
              style={{
                color: "#BEC1DD",
              }}
            >
              {item.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
