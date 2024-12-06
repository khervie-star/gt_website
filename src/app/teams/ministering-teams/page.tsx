import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import React from "react";

const MinisteringTeams = () => {
  return (
    <div>
      <div className="w-full container mx-auto">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background px-6">
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-bold tracking-tighter text-black dark:text-white mb-4 max-w-[500px]">
            Ministering <span className="text-yellow-500 mx-1">Teams</span>{" "}
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
      </div>
    </div>
  );
};

export default MinisteringTeams;
