import React from "react";
// import eldershipCover from "@/assets/images/eldership-cover.jpg";
import pioneerAssociatePastor from "@/assets/images/eldership/mummy_chy.jpg";
import generalPastor from "@/assets/images/eldership/gp.jpg";
import assistantPastor from "@/assets/images/eldership/ap.jpg";

import elderUponi from "@/assets/images/eldership/elder_uponi.jpg";
import elderAdewunmi from "@/assets/images/eldership/elder_adewumni.jpg";
import elderAgbokeye from "@/assets/images/eldership/elder_agbokeye.jpg";
import elderOshafi from "@/assets/images/eldership/elder_oshafi.jpg";
import elderAlao from "@/assets/images/eldership/elder_alao.jpg";

import Image from "next/image";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { RainbowButton } from "@/components/ui/rainbow-button";
import BlurFade from "@/components/ui/blur-fade";

const pastors = [
  {
    name: "Pastor C. A. Obed",
    post: "Pioneer Associate",
    image: pioneerAssociatePastor,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },
  {
    name: "Prof. G. E. Akinbola",
    post: "General",
    image: generalPastor,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },
  {
    name: "Pastor J. Emmanuel",
    post: "Assistant",
    image: assistantPastor,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },
];

const eldersList = [
  {
    name: "J. Uponi",
    image: elderUponi,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },
  {
    name: "J. Adewunmi",
    image: elderAdewunmi,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },
  {
    name: "S. Agbokeye",
    image: elderAgbokeye,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },
  {
    name: "D. Oshafi",
    image: elderOshafi,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },
  {
    name: "Y. Alao",
    image: elderAlao,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },
];

const Eldership = () => {
  return (
    <section>
      <div className="w-full container mx-auto">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background px-6">
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-bold tracking-tighter text-black dark:text-white mb-4 max-w-[500px]">
            GT <span className="text-yellow-500 mx-1">Eldership</span>{" "}
          </p>
          <p className="text-sm text-gray-500 mx-auto max-w-[500px] text-center">
            We may be biased, but we think we have the very best team of people
            around leading our House week in and week out! Passion City Church
            is led by Louie + Shelley Giglio, who are supported by an incredible
            team of some of the most gifted, creative, winsome and hard-working
            people around.
          </p>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>

        <div className="w-full lg:w-[90%] mx-auto">
          <div className="px-6">
            {pastors.map((pastor, idx: number) => (
              <div className="py-10 md:py-20 lg:py-30" key={idx}>
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  <div className="w-full lg:w-[45%]">
                    <BlurFade inView>
                      <Image
                        src={pastor.image}
                        alt=""
                        className="rounded-2xl h-[400px] lg:h-[500px] object-cover object-top"
                      />
                    </BlurFade>
                  </div>
                  <div className="w-full lg:w-[55%]">
                    <BlurFade inView>
                      <p className="font-semibold text-[20px] lg:text-[28px] text-gray-700">
                        {pastor.post}{" "}
                        <span className="text-yellow-500">Pastor</span>
                      </p>
                    </BlurFade>
                    <BlurFade delay={0.25} inView>
                      <p className="text-[28px] lg:text-[56px] font-bold">
                        {pastor.name}
                      </p>
                    </BlurFade>
                    <BlurFade delay={0.375} inView>
                      <p className="text-sm lg:text-base text-gray-500 mb-6">
                        {pastor.description}
                      </p>
                    </BlurFade>

                    <BlurFade delay={0.5} inView>
                      <RainbowButton className="shadow-2xl">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                          Read more
                        </span>
                      </RainbowButton>
                    </BlurFade>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-10 bg-yellow-50 rounded-lg lg:rounded-2xl">
            <div className="flex flex-col gap-20 lg:gap-10">
              {eldersList.map((elder, idx: number) => (
                <div
                  className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-10"
                  key={idx}>
                  <div className="w-full lg:w-[50%] order-2 lg:order-1">
                    <BlurFade delay={0.25} inView>
                      <p className="text-black font-bold text-[24px] lg:text-[32px] mb-3">
                        <span className="text-yellow-500 mr-1">Elder</span>
                        {elder.name}
                      </p>
                    </BlurFade>
                    <BlurFade delay={0.5} inView>
                      <p className="text-sm lg:text-base text-gray-500 mb-6">
                        {elder.description}
                      </p>
                      <RainbowButton className="shadow-2xl">
                        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                          Read more
                        </span>
                      </RainbowButton>
                    </BlurFade>
                  </div>
                  <div className="w-full lg:w-[40%]  order-1 lg:order-2">
                    <BlurFade delay={0.1} inView>
                      <Image
                        src={elder.image}
                        alt=""
                        className="rounded-2xl h-[400px] object-cover object-top"
                      />
                    </BlurFade>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="my-10 lg:my-20">
            <p className="font-bold mb-2 text-[24px] lg:text-[32px]">
              Board <span className="text-yellow-500">of Trustees</span>
            </p>
            <p className="text-sm text-gray-500 font-light mb-6">
              Passion, Inc. is governed by a board of directors made up of
              individuals with a long history with the ministry of Passion.
              Their integrity, wisdom, experience and spiritual maturity are
              exceptional. As well, they are fully engaged with all God is doing
              through Passion to serve the collegiate generation and build up
              the local church. They prayerfully provide guidance and
              discernment for all that happens in and through the ministries of
              Passion.
            </p>
            <p className="text-sm text-gray-500 font-light mb-2">
              Below is a list of the current members of the Glory Tabernacle
              Ministry Board of trustees:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eldership;
