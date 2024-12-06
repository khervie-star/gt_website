import { Button, Input } from "@nextui-org/react";
import React from "react";
import logo from "@/assets/images/gt_logo.png";
import Image from "next/image";
import Link from "next/link";
import { IconButton } from "@mui/material";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#5F147B] via-[#460E58] to-[#370B46] py-10 text-white px-6">
      <div className="container mx-auto border-b border-[#5F147B] pb-10 flex flex-col text-center justify-center">
        <h2 className="text-white text-center font-bold text-[24px] lg:text-[40px] mb-2">
          Join our <span className="text-[gold]">mailing list.</span>
        </h2>
        <p className="text-gray-300 text-sm font-light max-w-[400px] mx-auto mb-4 md:mb-6">
          We promise not to spam you, but send you edifying and amazing content
          regularly from Celebration Church International.
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-2 mx-auto items-stretch">
          <Input
            label="Email"
            type="email"
            variant="bordered"
            className="!max-w-[350px] !w-full lg:!w-[300px]"
          />
          <Button className="!font-bold !text-primary !h-auto !px-8 !w-fit !py-3">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="container mx-auto border-b border-[#5F147B] py-10 flex flex-col lg:flex-row items-start">
        <div className="w-full lg:w-2/5 flex flex-row items-center lg:items-start lg:flex-col mb-6 lg:mb-0">
          <div className="relative w-12 h-12 mb-2">
            <Image src={logo} alt="Glory Tabernacle Ministry" fill />
          </div>
          <p className="font-bold text-inherit text-white ml-3 lg:ml-0">
            Glory Tabernacle Ministry
          </p>
        </div>
        <div className="w-full lg:w-3/5 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="font-semibold mb-2">Quick links</p>
            <ul className="flex flex-col gap-1 text-gray-400 text-[12px]">
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>About us</Link>
              <Link href={"#"}>Elership</Link>
              <Link href={"#"}>Give</Link>
              <Link href={"#"}>Contact us</Link>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Human Teams</p>
            <ul className="flex flex-col gap-1 text-gray-400 text-[12px]">
              <Link href={"#"}>Men</Link>
              <Link href={"#"}>Women</Link>
              <Link href={"#"}>Blessed singles</Link>
              <Link href={"#"}>Youth</Link>
              <Link href={"#"}>Children</Link>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Ministries</p>
            <ul className="flex flex-col gap-1 text-gray-400 text-[12px]">
              <Link href={"#"}>CLTS</Link>
              <Link href={"#"}>ADMI</Link>
              <Link href={"#"}>BSG</Link>
              <Link href={"#"}>Mission</Link>
              <Link href={"#"}>Dorcas mission</Link>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Media</p>
            <ul className="flex flex-col gap-1 text-gray-400 text-sm">
              <Link href={"#"}>Watch Live</Link>
              <Link href={"#"}>YouTube</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-10 flex items-center justify-between">
        <p className="text-[12px] font-light">
          © Copyright 2024 Celebration Church International. All Rights
          Reserved.
        </p>
        <div className="flex gap-3 items-center">
          <IconButton>
            <FaTwitter className="text-white w-4" />
          </IconButton>
          <IconButton>
            <FaInstagram className="text-white w-4" />
          </IconButton>
          <IconButton>
            <FaFacebookF className="text-white w-3" />
          </IconButton>
          <IconButton>
            <FaYoutube className="text-white w-4" />
          </IconButton>
        </div>
      </div>
    </footer>
  );
};
