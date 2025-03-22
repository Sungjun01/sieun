import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let's create <span className="text-purple">innovative</span> solutions
          together
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          I'm always open to collaborate on innovative projects and research
          opportunities. Whether it's IoT, web development, or electronic
          engineering, let's connect!
        </p>
        <a href="mailto:skimrobin0@gmail.com">
          <MagicButton
            title="Contact me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Sieun Kim | Hong Kong
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item) => (
            <a
              key={item.id}
              href={item.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-black-300 transition-colors"
            >
              <img
                src={item.img}
                alt={`social media ${item.id}`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
