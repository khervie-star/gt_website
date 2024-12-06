import DotPattern from "@/components/ui/dot-pattern";
import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";
// import Image from "next/image";
import React from "react";

const HumanTeams = () => {
  return (
    <div>
      <div className="w-full container mx-auto">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background px-6">
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-bold tracking-tighter text-black dark:text-white mb-4 max-w-[500px]">
            Human <span className="text-yellow-500 mx-1">Teams</span>{" "}
          </p>
          <p className="text-sm text-gray-500 mx-auto max-w-[500px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            doloremque veritatis illo, minima maiores labore quia! Iure iste,
            aliquid quis recusandae illo dolorem mollitia in inventore veniam,
            architecto corrupti harum.
          </p>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>
        <div className="py-10 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <MagicCard
              className="cursor-pointer flex-col shadow-2xl whitespace-nowrap text-4xl"
              gradientColor={"#D9D9D955"}>
              <div>{/* <Image src={} alt="" /> */}</div>
              <div className="p-6 lg:p-10">
                <p className="font-bold text-[20px] mb-4">
                  Glory Men&apos;s <span className="text-yellow-500">Team</span>
                </p>
              </div>
            </MagicCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanTeams;
