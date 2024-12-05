"use client";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurFade from "@/components/ui/blur-fade";
import { RainbowButton } from "@/components/ui/rainbow-button";
import SparklesText from "@/components/ui/sparkles-text";
import { cn } from "@/lib/utils";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa6";
import AccountDetailsGrid from "./ind";

const GivePage = () => {
  return (
    <section>
      <div className="w-full py-20 px-6">
        <div className="text-center mx-auto">
          <div className="z-10 flex items-center justify-center">
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
          <BlurFade delay={0.25} inView>
            <p className="text-center font-bold uppercase md:text-[40px] lg:text-[64px]">
              YOUR <span className="text-yellow-500">GENEROUSITY</span>
            </p>
            <SparklesText
              text={
                <p className="text-center font-bold uppercase md:text-[40px] lg:text-[64px]">
                  <span className="text-yellow-500">OUR</span> MISSION
                </p>
              }
            />
          </BlurFade>

          <BlurFade delay={0.25 * 2} inView>
            <p className="w-full text-center mx-auto max-w-[400px] text-sm text-gray-500 my-10">
              Give towards our mission to reach a billion souls in ten thousand
              cities with the message of the gospel.
            </p>
          </BlurFade>
          <BlurFade delay={0.25 * 3} inView>
            <div className="my-6 lg:my-10">
              <RainbowButton>Give now</RainbowButton>
            </div>
          </BlurFade>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="w-full justify-between items-center">
          <p className="text-center font-bold uppercase md:text-[40px] lg:text-[64px]">
            WAYS TO GIVE
          </p>
        </div>
        <div className="flex w-full flex-col mx-auto">
          <Tabs
            aria-label="Disabled Options"
            disabledKeys={["International"]}
            color="primary"
            classNames={{
              tabList: "items-center justify-center",
            }}>
            <Tab key="Local" title="Naira Account">
              <AccountDetailsGrid />
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
