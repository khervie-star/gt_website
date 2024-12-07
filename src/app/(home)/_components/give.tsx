import React from "react";
import give from "@/assets/images/give.jpeg";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { siteUrls } from "@/config";
import Link from "next/link";

export const Give = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-full py-8 lg:py-24">
          <div className="relative isolate overflow-hidden bg-gradient-to-bl from-[#5F147B] via-[#460E58] to-[#370B46] px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true">
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-josefin_sans">
                No one becomes poor by giving
                <br />
              </h2>
              <p className="mt-4 text-gray-400">
                Your giving fuels our mission to share God&apos;s love and make
                a lasting difference in the world. Every gift helps us support
                community outreach, empower ministries, and spread hope to those
                in need. Jesus said, &quot;It is more blessed to give than to
                receive&quot; <strong>(Acts 20:35)</strong>—together, we can
                impact lives for eternity.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Button
                  as={Link}
                  href={siteUrls.give}
                  className="!font-semibold">
                  Give now
                </Button>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <Image
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 object-cover"
                src={give}
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
