"use client";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurFade from "@/components/ui/blur-fade";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa6";
import DotPattern from "@/components/ui/dot-pattern";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { AccountDetailsGrid } from "./_components";

const GivePage = () => {
  return (
    <section>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background px-6">
        <BlurFade inView>
          <div className="z-10 flex items-center justify-center mb-6 lg:mb-10">
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}>
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span className="flex items-center gap-2">
                  <FaHandHoldingHeart /> Give
                </span>
              </AnimatedShinyText>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.25} inView>
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-bold tracking-tighter text-black dark:text-white mb-4 max-w-[500px]">
            YOUR <span className="text-yellow-500 mx-1">GENEROUSITY</span>{" "}
          </p>
        </BlurFade>

        <BlurFade delay={0.375} inView>
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-bold tracking-tighter text-black dark:text-white mb-4 max-w-[500px]">
            <span className="text-yellow-500">OUR</span> MISSION
          </p>
        </BlurFade>

        <BlurFade delay={0.75} inView>
          <p className="text-sm text-gray-500 mx-auto max-w-[400px] text-center">
            Give towards our mission to reach a billion souls in ten thousand
            cities with the message of the gospel.
          </p>
        </BlurFade>

        <BlurFade delay={0.25 * 3} inView>
          <div className="my-6 lg:my-10">
            <RainbowButton>
              Ways to give <ChevronDoubleDownIcon className="ml-2 w-4" />
            </RainbowButton>
          </div>
        </BlurFade>

        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      </div>

      <div className="container mx-auto">
        <div className="flex w-full flex-col mx-auto">
          <Tabs
            aria-label="Disabled Options"
            disabledKeys={["International"]}
            color="primary"
            classNames={{
              tabList: "flex items-center justify-center mx-auto",
              tabContent: "text-[20px] font-semibold",
              tab: "!py-5 !px-8",
            }}>
            <Tab key="Local" title="Naira Account">
              <div className="w-full lg:max-w-[90%] mx-auto">
                <AccountDetailsGrid />
              </div>
            </Tab>
            <Tab key="International" title="Domiciliaty Account">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default GivePage;
