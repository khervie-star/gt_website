"use client";

import { ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

import generalPastor from "@/assets/images/eldership/GENERAL PASTOR.jpg";
import church from "@/assets/images/icons/church.png";
import motto from "@/assets/images/icons/motto.png";
import upcoming from "@/assets/images/icons/upcoming.png";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import BlurFade from "@/components/ui/blur-fade";
import { BoxReveal } from "@/components/ui/box-reveal";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";

import {
  BentoDemo,
  Give,
  LiveSection,
  Services,
  TextScroll,
} from "./_components";

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
      <header className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/hero.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/80 bg-opacity-80 flex items-center justify-center text-center z-10">
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
            className="mb-[20px] md:mb-0 w-full lg:w-[55%]"
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
                      `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
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

      <section className="py-10 px-6 md:px-12 lg:px-24 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <BlurFade delay={0.2} inView>
            <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow2xl group min-h-[500px] flex items-center justify-center">
              <div
                className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${scripture.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Rich gradient overlays for depth and contrast */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 mix-blend-multiply" />
              <div className="absolute inset-0 bg-[#5046e6]/10 mix-blend-overlay" />

              {/* Decorative inner framing */}
              <div className="absolute inset-6 md:inset-10 border border-white/20 rounded-[1.5rem] pointer-events-none z-10 transition-all duration-700 group-hover:border-white/40" />

              <div className="relative z-20 flex flex-col items-center justify-center p-8 md:p-16 text-center">
                <AnimatedGradientText className="mb-8 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-white/90 bg-white/10 px-6 py-2 rounded-full backdrop-blur-md border border-white/20">
                  Scripture for the Week
                </AnimatedGradientText>

                <div className="relative max-w-4xl mx-auto px-6 md:px-12">
                  <Quote className="absolute -top-6 -left-2 md:-top-10 md:-left-8 w-12 h-12 md:w-20 md:h-20 text-yellow-500/30 rotate-180" />

                  <blockquote className="text-2xl md:text-4xl lg:text-5xl font-serif text-white leading-normal md:leading-snug mb-8 font-medium drop-shadow-lg relative z-10">
                    &ldquo;{scripture.verse}&rdquo;
                  </blockquote>

                  <Quote className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-8 w-12 h-12 md:w-20 md:h-20 text-yellow-500/30" />
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <div className="h-px w-10 bg-yellow-500" />
                  <p className="text-lg md:text-xl font-bold text-yellow-400 tracking-wide uppercase">
                    {scripture.reference}
                  </p>
                  <div className="h-px w-10 bg-yellow-500" />
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-50 blur-3xl" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-yellow-50 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <BlurFade delay={0.2} inView>
            <div className="flex flex-col items-center mb-16 text-center">
              <AnimatedGradientText className="mb-4 text-sm font-semibold tracking-wider uppercase">
                From the Pastor&apos;s Desk
              </AnimatedGradientText>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Weekly <span className="text-yellow-500">Desk</span>
              </h2>
            </div>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 overflow-hidden group">
              {/* Decorative Quote Mark */}
              <Quote className="absolute -top-6 -right-6 w-48 h-48 text-gray-50 -rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110" />

              <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                {/* Image Column */}
                <div className="w-full lg:w-2/5 flex-shrink-0">
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                    <Image
                      src={message.image}
                      alt={message.pastorName}
                      className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-90" />
                    <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 hover:translate-y-0 transition-transform duration-500">
                      <p className="text-yellow-400 font-medium text-sm mb-2 uppercase tracking-widest">
                        {message.role}
                      </p>
                      <p className="text-white text-3xl font-bold">
                        {message.pastorName}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Text Column */}
                <div className="w-full lg:w-3/5 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                    &ldquo;{message.title}&rdquo;
                  </h3>

                  <div className="space-y-6 text-gray-600 text-lg md:text-xl font-light leading-relaxed">
                    {message.paragraphs.map((paragraph, index) => (
                      <p key={index} className="relative">
                        {index === 0 && (
                          <span className="float-left text-7xl text-[#5046e6] font-serif leading-[0.7] mr-4 mt-2">
                            {paragraph.charAt(0)}
                          </span>
                        )}
                        {index === 0 ? paragraph.slice(1) : paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-12 flex items-center gap-6">
                    <RainbowButton>
                      Read Full Message{" "}
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </RainbowButton>
                    <div className="h-px bg-gray-200 flex-grow" />
                    <span className="text-gray-400 font-medium italic">
                      2026/10/10
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <TextScroll />

      <div className="container mx-auto w-full py-10 lg:py-20">
        <p className="text-2xl md:text-3xl font-semibold mb-6">
          Quick <span className="text-yellow-500">Links</span>
        </p>
        <BentoDemo />
      </div>
    </section>
  );
}
