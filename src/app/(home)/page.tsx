"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import {
  ChurchIcon,
  HandHelpingIcon,
  BookOpenIcon,
  CalendarIcon,
  ChevronRight,
  Link,
  TextQuoteIcon,
} from "lucide-react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { BoxReveal } from "@/components/ui/box-reveal";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import TextReveal from "@/components/ui/text-reveal";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import MessageOfTheWeek from "./_components/pastors-desk";
import { BentoDemo } from "./_components/bento";

export default function Home() {
  const { theme } = useTheme();

  return (
    <section>
      <header
        className="relative h-[90vh] bg-cover bg-top"
        style={{ backgroundImage: 'url("/og.jpg")' }}>
        <div className="absolute inset-0 bg-black/75 bg-opacity-60 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Glory Tabernacle Ministry
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-md">
              Building Faith, Serving Community, Transforming Lives
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition">
                Join Us This Sunday
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-900 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Links */}
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-4 gap-6">
        {[
          {
            icon: ChurchIcon,
            title: "Our Mission",
            desc: "Connecting people to God",
          },
          {
            icon: HandHelpingIcon,
            title: "Worship",
            desc: "Sundays 9:30 & 11 AM",
          },
          { icon: BookOpenIcon, title: "Small Groups", desc: "Grow together" },
          { icon: CalendarIcon, title: "Events", desc: "Community activities" },
        ].map((item, index) => (
          <MagicCard
            key={index}
            className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
            <item.icon size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 !text-[12px]">{item.desc}</p>
          </MagicCard>
        ))}
      </div>
      <section className="container mx-auto my-[50px] w-full md:w-[90%] p-[20px] md:p-[50px] bg-white flex justify-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:gap-[50px]">
          <div
            className="mb-[20px] md:mb-0 relative w-full lg:w-[55%]"
            data-aos="zoom-in-up">
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
                <p className="text-[3em] font-bold">
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

      <section>
        {/* <VelocityScroll
          text="Velocity Scroll"
          default_velocity={5}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        /> */}

        <div className="z-10 flex items-center justify-center rounded-lg border bg-white dark:bg-black">
          <TextReveal text="Have you won a soul for the Lord this year? Be wise; be a soul winner!" />
        </div>
      </section>
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
