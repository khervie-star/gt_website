"use client";

import {
  Button,
} from "@nextui-org/react";
import { ChevronRight } from "lucide-react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { BoxReveal } from "@/components/ui/box-reveal";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import upcoming from "@/assets/images/icons/upcoming.png";
import church from "@/assets/images/icons/church.png";
import motto from "@/assets/images/icons/motto.png";
import BlurFade from "@/components/ui/blur-fade";
import { Give, LiveSection, Services, TextScroll } from "./_components";
import generalPastor from "@/assets/images/eldership/GENERAL PASTOR.jpg"


export default function Home() {

    const scripture = {
      verse:
        "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
      reference: "Jeremiah 29:11",
      backgroundImage: "/images/scripture-for-the-week.jpg",
    };


      const message = {
        title: "Glory to God",
        paragraphs: [
          "Beloved, as we step into this week, let us be reminded of God's enduring love and grace. Trust in His plans, and let faith guide your steps. May His peace and blessings fill your heart today and always.",
          "The Lord calls us to be a light in the world. Let us strive to show compassion, extend kindness, and live with purpose, reflecting His glory in all we do. Together, we can make a difference, one act of love at a time.",
          "As you face the days ahead, remember that you are never alone. God's presence is with you, strengthening and guiding you. Take comfort in His promises and rejoice in the hope He provides.",
        ],
        pastorName: "Prof. G. E. Akinbola",
        role: "General Pastor",
        image: generalPastor,
      };

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

      <section
        className="relative w-full h-[500px] flex items-center justify-center overflow-hidden rounded-lg shadow-lg"
        style={{
          backgroundImage: `url(${scripture.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white p-6 md:p-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Scripture <span className="text-yellow-500">for the Week</span>
          </h2>
          <blockquote className="italic text-lg md:text-2xl font-light mb-6 max-w-4xl mx-auto">
            &lsquo;{scripture.verse}&rsquo;
          </blockquote>
          <p className="text-lg md:text-xl font-medium">
            {scripture.reference}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-6xl mx-auto bgwhite rounded-lg p-8 flex flex-col md:flex-row items-center">
          <div className="w-32 h-32 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-8 relative flex-shrink-0">
            <Image
              src={message.image}
              alt="General Pastor"
              className="object-cover object-top"
              fill
            />
          </div>

          <div className="text-center md:text-left">
            <AnimatedGradientText className="text-gray-600 mb-4">
              From the pastor&apos;s desk
            </AnimatedGradientText>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {message.title}
            </h2>
            {message.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="mt-6">
              <p className="text-gray-800 font-semibold text-lg">
                {message.pastorName}
              </p>
              <p className="text-gray-600">{message.role}</p>
            </div>
          </div>
        </div>
      </section>

      <TextScroll />

      <div className="container mx-auto w-full py-10 lg:py-20">
        <p className="text-2xl md:text-3xl font-semibold mb-6">
          Quick <span className="text-yellow-500">Links</span>
        </p>
        {/* <BentoDemo /> */}
      </div>
    </section>
  );
}
