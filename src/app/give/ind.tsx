/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import ShineBorder from "@/components/ui/shine-border";
import { toast } from "sonner";
import zenith from "@/assets/images/zenith-logo.png";
import Image from "next/image";
import { TbCopyCheckFilled } from "react-icons/tb";

const AccountDetailCard = ({
  bankName,
  bankLogo,
  accountName,
  accountNumber,
  purpose,
}: any) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    toast.success("Account number copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ShineBorder
      className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-white"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
      <div className="absolute top-4 right-4 w-10 h-10">
        <Image
          src={bankLogo}
          alt={`${bankName} Logo`}
          className="object-contain"
          fill
        />
      </div>

      <div className="text-center space-y-4 p-6">
        <h2 className="text-xl font-bold text-gray-800">{purpose}</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-lg font-semibold text-gray-700">{accountName}</p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <span className="text-xl font-bold tracking-wider text-gray-900">
              {accountNumber}
            </span>
            <button
              onClick={handleCopy}
              className="text-purple-600 hover:text-purple-800 transition-colors">
              <TbCopyCheckFilled
                className={`w-6 h-6 ${copied ? "text-green-500" : ""}`}
              />
            </button>
          </div>
        </div>

        <div className="bg-purple-100 px-4 py-2 rounded-full inline-block">
          <span className="text-purple-800 font-medium">{bankName}</span>
        </div>
      </div>
    </ShineBorder>
  );
};

const AccountDetailsGrid = () => {
  const accountDetails = [
    {
      bankName: "Zenith Bank",
      bankLogo: zenith,
      accountName: "Glory Tabernacle Ministry",
      accountNumber: "1014181507",
      purpose: "Tithes & Offerings",
    },
    {
      bankName: "Zenith Bank",
      bankLogo: zenith,
      accountName: "Glory Tabernacle Ministry",
      accountNumber: "1010341181",
      purpose: "Mission Support Clearing House",
    },
    {
      bankName: "Zenith Bank",
      bankLogo: zenith,
      accountName: "Glory Tabernacle Ministry",
      accountNumber: " 1013112481",
      purpose: "Special Project (Rehoboth Land)",
    },
    {
      bankName: "Zenith Bank",
      bankLogo: zenith,
      accountName: "Glory Tabernacle Ministry",
      accountNumber: "1016125291",
      purpose: "Dorcas Mission",
    },
    {
      bankName: "Zenith Bank",
      bankLogo: zenith,
      accountName: "Glory Tabernacle Ministry",
      accountNumber: "1010367280",
      purpose: "General Account - 2",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {accountDetails.map((account, index) => (
        <AccountDetailCard key={index} {...account} />
      ))}
    </div>
  );
};

export default AccountDetailsGrid;
