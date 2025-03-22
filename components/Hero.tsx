"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { useState, useEffect } from "react";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const [showPdf, setShowPdf] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // The exact filename of your CV PDF
  const cvFileName = "SIEUN KIM CV.pdf";

  // Encode the filename for URLs to handle spaces properly
  const encodedCvFileName = encodeURIComponent(cvFileName);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDownloadCV = () => {
    if (typeof window === "undefined") return;

    // Option 1: Direct download
    const cvUrl = `/${encodedCvFileName}`;
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Option 2: Show in modal viewer
    setShowPdf(true);
  };

  return (
    <div className="pb-20 pt-36">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-gray-200 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Full Stack Development & IoT Innovation
          </p>

          <TextGenerateEffect
            words="Turning Innovative Ideas into Digital Reality"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Sieun Kim, a Full Stack Developer & Electronic Engineer
            based in Hong Kong.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a href="#projects">
              <MagicButton
                title="View My Projects"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            {isMounted && (
              <button onClick={handleDownloadCV}>
                <MagicButton
                  title="Download My CV"
                  icon={<FaFileDownload />}
                  position="right"
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* CV Viewer Modal */}
      {showPdf && isMounted && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl h-5/6">
            <div className="absolute top-0 left-0 right-0 bg-gray-100 dark:bg-gray-700 rounded-t-lg flex justify-between items-center px-4 py-2">
              <h3 className="font-medium">Sieun Kim - Curriculum Vitae</h3>
              <button
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                onClick={() => setShowPdf(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="pt-12 h-full">
              <iframe
                src={`/${encodedCvFileName}`}
                className="w-full h-full rounded-b-lg"
                title="CV Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
