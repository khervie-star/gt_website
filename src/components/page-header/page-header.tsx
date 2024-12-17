import BlurFade from "@/components/ui/blur-fade";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@nextui-org/react";
import React, { ReactNode } from "react";

interface IProps {
  title: ReactNode;
  description: string;
}

export const PageHeader = ({ title, description }: IProps) => {
  return (
    <div className={"relative"}>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background px-6">
        <BlurFade delay={0.25} inView>
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-bold tracking-tighter text-black dark:text-white mb-4 max-w-[500px]">
            {title}
          </p>
        </BlurFade>

        <BlurFade delay={0.5} inView>
          <p className="text-sm text-gray-500 mx-auto max-w-[500px] text-center">
            {description}
          </p>
        </BlurFade>

        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
    </div>
  );
};
