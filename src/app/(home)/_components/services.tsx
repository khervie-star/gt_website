/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React from "react";
import Image from "next/image";
import sunday from "@/assets/images/SUNDAY SERVICE.jpg";
import thursday from "@/assets/images/THURSDAY SERVICE.jpg";
import hodh from "@/assets/images/Hour Of Divine Help.jpg";
import miracle_service from "@/assets/images/Miracle and Communion Service.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCards, Autoplay, Pagination, Navigation } from "swiper/modules";

import { FaArrowTurnDown } from "react-icons/fa6";
import Link from "next/link";
import { siteUrls } from "@/config";

export const Services = () => {
  const progressCircle = React.useRef<SVGSVGElement | null>(null);
  const progressContent = React.useRef<HTMLDivElement | null>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
    }

    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <section
      className="services container mx-auto flex justify-center md:p-[20px]"
      data-aos="fade-down">
      <div className="py-[20px] md:py-[50px] flex flex-col items-center gap-8">
        <div className="services-title flex items-center gap-[20px]">
          <h2 className="font-bold text-[28px] md:text-[60px] font-josefin_sans flex items-center gap-[10px] md:gap-[20px]">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <FaArrowTurnDown className="text-[28px] md:text-[60px] text-yellow-500" />
        </div>
        <div className="relative w-full" data-aos="fade-up-left">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay, Pagination, Navigation]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            onAutoplayTimeLeft={onAutoplayTimeLeft}>
            <SwiperSlide className="">
              <Link href={siteUrls.youtube.main} target="_blank">
                <Image src={sunday} alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="">
              <Link href={siteUrls.youtube.miracleService} target="_blank">
                <Image src={miracle_service} alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="">
              <Link href={siteUrls.youtube.thursdayService} target="_blank">
                <Image src={thursday} alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="">
              <Link href={siteUrls.youtube.hourOfDivineHelp} target="_blank">
                <Image src={hodh} alt="" />
              </Link>
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
