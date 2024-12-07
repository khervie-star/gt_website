"use client";

import React from "react";
import { FaPlay } from "react-icons/fa6";
import { siteUrls } from "@/config";
import { RainbowButton } from "@/components/ui/rainbow-button";

export const LiveSection = () => {
  return (
    <section>
      {" "}
      <section className="live-video-section h-full md:h-[80vh] relative my-[50px] md:my-[75px]">
        {/* <div className="bg-[rgba(0,0,0,0.5)] md:bg-transparent absolute w-full h-full top-0 left-0"></div> */}
        <div className="container relative mx-auto w-full h-full flex justify-end items-center">
          <div className="live-description w-full md:w-1/2 justify-end">
            <span className="font-medium mb-4">VIEW LIVE BROADCAST </span>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="play-icon step w-full md:w-1/4">
                <FaPlay className="z-50" />
                <div className="circles">
                  <div className="circle1"></div>
                  <div className="circle2"></div>
                  <div className="circle3"></div>
                </div>
              </div>
              <h6 className="w-full md:w-3/4 font-josefin_sans !text-[40px]">
                Stream{" "}
                <span className="!text-yellow-500 !text-[40px]">
                  {" "}
                  Our Services
                </span>{" "}
                Live Online Now!
              </h6>
            </div>

            <p className="!font-light !text-[14px] !text-gray-700 hidden md:block">
              What a joy it is to introduce you to our church! You&apos;ll
              discover that our passion is to provide a place where people.
            </p>

            <RainbowButton
              onClick={() => window.open(siteUrls.youtube.main, "_blank")}
              className="!mt-6">
              Join us live
            </RainbowButton>
          </div>
        </div>
      </section>
    </section>
  );
};
