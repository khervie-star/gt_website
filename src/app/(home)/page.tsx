"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { ChevronRight, Link, TextQuoteIcon } from "lucide-react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { BoxReveal } from "@/components/ui/box-reveal";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import MessageOfTheWeek from "./_components/pastors-desk";
import { BentoDemo } from "./_components/bento";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import upcoming from "@/assets/images/icons/upcoming.png";
import church from "@/assets/images/icons/church.png";
import motto from "@/assets/images/icons/motto.png";
import BlurFade from "@/components/ui/blur-fade";
import { Give, LiveSection, Services, TextScroll } from "./_components";

export default function Home() {
  return (
    <section>
      <header
        className="relative h-[90vh] bg-cover bg-top"
        style={{ backgroundImage: 'url("/og.jpg")' }}>
        <div className="absolute inset-0 bg-black/80 bg-opacity-60 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Glory <span className="text-yellow-500">Tabernacle</span> Ministry
            </h1>
            <p className="text-base lg:text-xl text-gray-300 mb-8 drop-shadow-md font-medium max-w-[500px] mx-auto">
              That every member may be a living model of genuine salvatation,
              sacntification and service
            </p>
            <div className="flex justify-center space-x-4">
              <RainbowButton className="mt-6">
                Learn more
                <ChevronDownIcon className="w-5 h-5 ml-2" />
              </RainbowButton>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Links */}
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            icon: motto,
            title: "Our Motto",
            desc: "Jesus gave Himself for me, that He might redeem me from all iniquity and purify me unto Himself a peculiar child, zealous of good works",
            others: [],
          },
          {
            icon: church,
            title: "Worship",
            desc: "Experience God's presence and grow in faith through our uplifting worship services.",
            others: ["Sundays: 9:00 - 11:30 AM", "Thurdays: 4:30 - 6:15 PM"],
          },
          {
            icon: upcoming,
            title: "Upcoming Programmes",
            desc: "Join us for exciting and impactful events designed to strengthen our community and faith.",
            others: [],
            link: "#",
          },
        ].map((item, idx: number) => (
          <BlurFade delay={0.25 * idx} inView key={idx} className="!h-full">
            <div
              className="relative w-full bg-white rounded-[12px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] p-[20px] h-full"
              data-aos="fade-up">
              <div className="flex flex-col justify-start items-center gap-1">
                <div className="w-full mb-4">
                  <Image
                    src={item.icon}
                    className="w-10 h-10 md:w-14 md:h-14"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <h6 className="text-black font-montserrat font-semibold text-[20px] lg:text-[24px] mb-1">
                    {item.title}
                  </h6>
                  <p className="text-gray-500 text-[14px] font-raleway font-light">
                    {item.desc}
                  </p>
                  {item.others?.length > 0 && (
                    <ul className="flex flex-col gap-2 list-inside list-disc mt-4">
                      {item.others?.map((other, idx: number) => (
                        <li
                          className="text-primary text-[14px] font-raleway font-medium"
                          key={idx}>
                          {other}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.link && (
                    <Button variant="flat" className="font-semibold !mt-6">
                      Learn more <FaArrowRightLong />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
      <section className="container mx-auto my-[50px] w-full md:w-[90%] p-[20px] md:p-[50px] bg-white flex justify-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:gap-[50px]">
          <div
            className="mb-[20px] md:mb-0 relative w-full lg:w-[55%]"
            data-aos="zoom-in-up">
            <BlurFade delay={0.25}>
              <div className="relative">
                <HeroVideoDialog
                  className="dark:hidden block"
                  animationStyle="from-center"
                  videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                  thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                  thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                  className="hidden dark:block"
                  animationStyle="from-center"
                  videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                  thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                  thumbnailAlt="Hero Video"
                />
              </div>
            </BlurFade>
            {/* <div className="bg-[rgba(0,0,0,0.25)] absolute top-0 left-0 w-full h-full z-[200] rounded-md"></div> */}
          </div>
          <div className="welcome-text w-full lg:w-[45%]" data-aos="fade-left">
            <div className="size-full max-w-lg items-start justify-start overflow-hidden pt-8">
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <AnimatedGradientText>
                  🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                  <span
                    className={cn(
                      `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    )}>
                    Welcome to
                  </span>
                  <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
              </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-[2.5rem] lg:text-[3em] font-bold">
                  Glory
                  <span className="text-[gold] mx-2">Tabernacle</span> Ministry
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <div className="mt-6">
                  <p className="text-gray-500">
                    What a joy it is to introduce you to our church! You&apos;ll
                    discover that our passion is to provide a place where people
                    just like you can have a life-changing experience with God.
                    At our doors are wide open to people from all backgrounds.
                  </p>
                </div>
              </BoxReveal>

              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <RainbowButton className="mt-8">Learn more</RainbowButton>
              </BoxReveal>
            </div>
          </div>
        </div>
      </section>

      <LiveSection />

      <Services />

      <Give />

      <section>
        <MessageOfTheWeek
          pastorName={"Kwesi Jones"}
          pastorImage={undefined}
          shortDescription={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          fullMessage={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          title={"The Great Emancipation"}
        />
      </section>

      <TextScroll />

      <div className="flex flex-col lg:flex-row container mx-auto w-full">
        <section className="flex-1">
          <BentoDemo />
        </section>
        <section className="flex-1">
          <Card
            className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-white shadow-lg"
            radius="lg">
            <CardHeader className="flex gap-3 bg-blue-100 p-4">
              <TextQuoteIcon className="text-blue-600 text-2xl" />
              <div className="flex flex-col">
                <p className="text-xl font-bold text-blue-800">
                  Scripture of the Week
                </p>
              </div>
            </CardHeader>

            <Divider />

            <CardBody className="p-6">
              <blockquote className="italic text-lg text-gray-800 border-l-4 border-blue-500 pl-4 mb-3">
                &quot;Matthew 5: 6-8&quot;
              </blockquote>

              <p className="text-blue-600 font-semibold">— NKJV</p>

              <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                <h3 className="font-bold text-gray-700 mb-2">Reflection:</h3>
                <p className="text-gray-600">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos ducimus numquam omnis corporis sed, aut fugit et!
                  Enim minus, aut quaerat sed a quidem id, mollitia modi debitis
                  nihil deserunt.
                </p>
              </div>
            </CardBody>

            <Divider />

            <CardFooter className="flex justify-between items-center p-4 text-sm text-gray-500">
              <Link href="#" className="text-blue-600">
                Daily Inspiration
              </Link>
              <span>{new Date().toLocaleDateString()}</span>
            </CardFooter>
          </Card>
        </section>
      </div>
    </section>
  );
}
