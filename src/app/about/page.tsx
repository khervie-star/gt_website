"use client";

// import { useEffect, useState } from "react";
// import { useTheme } from "next-themes";

import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

export default function ParticlesDemo() {
  // const { resolvedTheme } = useTheme();
  // const [setColor] = useState("#ffffff");

  // useEffect(() => {
  //   setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  // }, [resolvedTheme]);

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-bold tracking-tighter text-black dark:text-white mb-4 max-w-[500px]">
        About Glory <span className="text-yellow-500 mx-1">Tabernacle</span>{" "}
        Ministry
      </p>
      <p className="text-sm text-gray-500 mx-auto max-w-[500px] text-center">
        SALVATION | SANCTIFICATION | SERVICE
      </p>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
