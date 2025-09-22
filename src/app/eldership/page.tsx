import Image from 'next/image';
import React from 'react';

import elderAdedapo from '@/assets/images/eldership/10_Adedapo.jpg';
import assistantPastor from '@/assets/images/eldership/ap.jpg';
import elderBamgbose from '@/assets/images/eldership/bamgbose.webp';
import pioneerPastorAndMummyChy from '@/assets/images/eldership/combined.jpg';
import mummyChy from '@/assets/images/eldership/dr_chy.jpg';
import pioneerPastor from '@/assets/images/eldership/dr_obed.jpg';
import elderAdewunmi from '@/assets/images/eldership/elder_adewumni.jpg';
import elderAgbokeye from '@/assets/images/eldership/elder_agbokeye.jpg';
import elderAlao from '@/assets/images/eldership/elder_alao.jpg';
import elderOshafi from '@/assets/images/eldership/elder_oshafi.jpg';
import elderUponi from '@/assets/images/eldership/elder_uponi.jpg';
import generalPastor from '@/assets/images/eldership/gp.jpg';
import elderHans from '@/assets/images/eldership/hans_adudappah.jpg';
// import eldershipCover from "@/assets/images/eldership-cover.jpg";
import pioneerAssociatePastor from '@/assets/images/eldership/mummy-chy.jpg';
import BlurFade from '@/components/ui/blur-fade';
import DotPattern from '@/components/ui/dot-pattern';
import { MagicCard } from '@/components/ui/magic-card';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { cn } from '@/lib/utils';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import { CardContent } from '@mui/material';
import { Card, CardHeader } from '@nextui-org/react';

const pastors = [
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
  {
    name: "Pastor C. A. Obed",
    post: "Pioneer Associate",
    image: pioneerAssociatePastor,
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
  {
    name: "G. Adebayo",
    image: null,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },
];

const pastElders = [
  {
    name: "Rev. Prof. Hans Adu-dapah",
    deceased: false,
    bndYears: "",
    image: elderHans,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },
  {
    name: "Dr. Philip Idinoba",
    deceased: false,
    bndYears: "",
    image: null,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },
  {
    name: "Late Justice O. J. Bamgbose",
    deceased: true,
    bndYears: "(1960 - 2023)",
    image: elderBamgbose,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },
  {
    name: "Late Elder Josiah Agbakuru",
    deceased: true,
    bndYears: "",
    image: null,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },
  {
    name: "Elder O. D. Kajogbola",
    deceased: false,
    bndYears: "",
    image: null,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },

  {
    name: "Prof. A. A. Adedapo",
    deceased: false,
    bndYears: "",
    image: elderAdedapo,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },
  {
    name: "Engr. Adebayo Oke",
    deceased: false,
    bndYears: "",
    image: null,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, repudiandae eveniet sint alias tempore eligendi quian autem voluptatem ut facilis? Excepturi deleniti quisquam dignissimos, aperiam debitis dolores amet ullam molestias!",
  },
];

const boardOfTrustees = [
  { name: "Bishop Ralph Okafor", chairman: false },
  { name: "Pastor Chy Obed", chairman: false },
  { name: "Pastor Philip Idinoba", chairman: true },
  { name: "Pastor Gabriel Akinbola", chairman: false },
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
            <p className="text-4xl font-bold text-black dark:text-white md:text-6xl mb-6 lg:mb-10 tracking-tighter">
              Elders
            </p>
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
                        src={elder?.image || ""}
                        alt=""
                        className="rounded-2xl h-[400px] object-cover object-top"
                        placeholder='blur'
                      />
                    </BlurFade>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="my-10 lg:my-20 px-6">
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
            <p className="text-sm text-gray-500 font-light mb-6">
              Below is a list of the current members of the Glory Tabernacle
              Ministry Board of trustees:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {boardOfTrustees.map((trustee, index) => (
                <MagicCard
                  key={index}
                  className="cursor-pointer shadow-xl whitespace-nowrap text-4xl p-4  h-full"
                  gradientColor={"#D9D9D955"}>
                  <div className="flex flex-row items-center gap-4 h-full">
                    <div className="h-[96px] w-[120px] bg-gray-300 rounded-xl"></div>
                    <div className="flex-col items-start justify-center">
                      <div className="pb-2">
                        <p
                          className={`${
                            trustee.chairman
                              ? "text-yellow-700"
                              : "text-gray-700"
                          } text-xl`}>
                          {trustee.name}
                        </p>
                      </div>
                      <div className="text-base">
                        {trustee.chairman ? (
                          <p className="text-yellow-500 font-semibold">
                            Board Chairman
                          </p>
                        ) : (
                          <p className="text-gray-500">Board Member</p>
                        )}
                      </div>
                    </div>
                  </div>
                </MagicCard>
              ))}
            </div>
          </div>

          <div className="my-10 lg:my-20 px-6">
            <p className="font-bold mb-2 text-[24px] lg:text-[32px]">
              <span className="text-yellow-500">Past</span> Elders
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastElders.map((elder, index) => (
                <Card
                  key={index}
                  className={`border ${
                    elder.deceased ? "bg-gray-100" : "bg-white"
                  } shadow-md hover:shadow-lg !transition-all !duration-400`}>
                  <CardHeader className="gap-2">
                    <p className="font-semibold text-gray-700">{elder.name}</p>
                    {elder.deceased && (
                      <span className="text-yellow-500 text-sm">
                        {elder.bndYears}
                      </span>
                    )}
                  </CardHeader>
                  <CardContent>
                    {elder.image ? (
                      <div className="mb-4">
                        <Image
                          src={elder?.image || ""}
                          alt={elder.name}
                          className="w-full h-48 object-cover rounded-md"
                          placeholder='blur'
                        />
                      </div>
                    ) : (
                      <div className="mb-4 bg-gray-200 h-48 flex items-center justify-center rounded-md">
                        <p className="text-gray-500 font-normal">
                          No Image Available
                        </p>
                      </div>
                    )}
                    <p
                      className={`text-sm font-normal ${
                        elder.deceased ? "text-gray-500" : "text-gray-700"
                      }`}>
                      {elder.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="my-10 lg:my-20 px-6">
            <p className="font-bold mb-2 text-[24px] lg:text-[32px]">
              The <span className="text-yellow-500">Pioneer</span> Pastors
            </p>

            <p className="text-sm text-gray-500 font-light mb-6 lg:mb-10">
              Below is a list of the current members of the Glory Tabernacle
              Ministry Board of trustees:
            </p>

            <div
              className={`w-full container mx-auto flex flex-col md:flex-row lg:gap-10`}>
              <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-2">
                <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4">
                  <BlurFade delay={0.75} inView>
                    <div
                      className={`rounded-[20px] text-white border-none h-[400px] mt-20`}>
                      <Image
                        src={pioneerPastor}
                        className={`object-cover h-[400px] rounded-[20px]`}
                        alt="Dr. U. A. O Obed"
                      />
                    </div>
                  </BlurFade>

                  <BlurFade delay={0.5} inView>
                    <div
                      className={`rounded-[20px] text-white border-none h-[400px] mt-10`}>
                      <Image
                        src={pioneerPastorAndMummyChy}
                        className={`object-cover h-[400px] rounded-[20px]`}
                        alt="The Obeds"
                      />
                    </div>
                  </BlurFade>

                  <BlurFade delay={0.25} inView>
                    <div
                      className={`rounded-[20px] text-white border-none h-[400px]`}>
                      <Image
                        src={mummyChy}
                        className={`object-cover h-[400px] rounded-[20px]`}
                        alt="Mrs. C. A. Obed"
                      />
                    </div>
                  </BlurFade>
                </div>
              </div>

              <div className={`w-full md:w-1/2 mt-4 md:mt-0 text-black`}>
                <h1
                  className={
                    "mt-[15px] mb-4 text-[24px] md:text-[32px] font-bold"
                  }>
                  Dr. & Mrs.<span className="text-yellow-500 ml-2">Obed</span>
                </h1>
                <p className={"font-light text-gray-500"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam accusamus, quae tempore molestias autem cupiditate
                  corrupti illum laudantium, ipsum laboriosam odio, ipsam
                  ratione quisquam commodi! A officiis voluptates ut sapiente!
                </p>
                <p className={"font-light text-gray-500"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam accusamus, quae tempore molestias autem cupiditate
                  corrupti illum laudantium, ipsum laboriosam odio, ipsam
                  ratione quisquam commodi! A officiis voluptates ut sapiente!
                </p>
                <RainbowButton className="shadow-2xl mt-6 lg:mt-8">
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg flex items-center">
                    Learn more <ChevronDoubleRightIcon className="w-4 ml-3" />
                  </span>
                </RainbowButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eldership;
