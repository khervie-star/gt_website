import { CalendarIcon, VideoIcon } from "@radix-ui/react-icons";
import { HandHeart, Users2, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";

const ministries = [
  { name: "Children's Ministry", time: "Sundays 9:00 AM" },
  { name: "Youth Fellowship", time: "Fridays 6:00 PM" },
  { name: "Women of Purpose", time: "1st Saturday / Month" },
  { name: "Men of Valor", time: "2nd Saturday / Month" },
  { name: "Choir & Worship", time: "Thursdays 5:00 PM" },
];

import Image from "next/image";

const features = [
  {
    Icon: VideoIcon,
    name: "Watch Live",
    description: "Join our worship services online from anywhere in the world.",
    href: "#",
    cta: "Join Stream",
    className:
      "col-span-3 lg:col-span-2 group/bento hover:shadow-2xl transition-all duration-300",
    lightText: true,
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/scripture-for-the-week.jpg"
          alt="Watch Live"
          fill
          className="object-cover transition-transform duration-700 group-hover/bento:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-black/60 to-black/80 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover/bento:opacity-100 z-0">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform transition-transform duration-500 hover:scale-110 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
          </div>
        </div>
      </div>
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Upcoming Events",
    description: "Stay updated with our church calendar and special programs.",
    className: "col-span-3 lg:col-span-1 border-l-4 border-l-yellow-500",
    href: "#",
    cta: "View Calendar",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 flex items-center justify-end overflow-hidden">
        <div className="w-64 h-64 bg-yellow-400 rounded-full blur-[100px] absolute -top-20 -right-20 opacity-30" />
        <Calendar
          mode="single"
          selected={new Date()}
          className="absolute -right-8 top-12 origin-top rounded-xl border border-gray-100/50 bg-white/60 backdrop-blur-md transition-all duration-500 ease-out [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)] group-hover:scale-[1.05] group-hover:-translate-y-2 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)]"
        />
      </div>
    ),
  },
  {
    Icon: Users2,
    name: "Our Ministries",
    description: "Find a community where you can grow, serve, and belong.",
    href: "#",
    cta: "Explore Ministries",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-indigo-50/30 overflow-hidden">
        {/* Solid gradient fade at the top to hide scrolling items behind the text */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbfcff] via-[#fbfcff]/90 to-transparent h-[160px] z-10 pointer-events-none" />
        <Marquee
          pauseOnHover
          vertical
          className="absolute top-32 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] pl-6">
          {ministries.map((m, idx) => (
            <figure
              key={idx}
              className={cn(
                "relative w-56 cursor-pointer overflow-hidden rounded-xl border border-white shadow-sm p-4 mb-4",
                "bg-white/80 backdrop-blur-md hover:bg-white hover:shadow-md transition-all hover:-translate-y-1",
              )}>
              <div className="flex flex-col">
                <figcaption className="text-sm font-bold text-gray-900">
                  {m.name}
                </figcaption>
                <p className="mt-1 text-xs text-indigo-600 font-medium">
                  {m.time}
                </p>
              </div>
            </figure>
          ))}
        </Marquee>
      </div>
    ),
  },
  {
    Icon: HandHeart,
    name: "Give Online",
    description:
      "Support the ministry and make an impact through your generosity.",
    href: "#",
    cta: "Donate Now",
    className: "col-span-3 lg:col-span-1 overflow-hidden group/give",
    lightText: true,
    background: (
      <div className="absolute inset-0">
        <Image
          src="/og.jpg"
          alt="Give"
          fill
          className="object-cover transition-transform duration-1000 group-hover/give:scale-110 saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
      </div>
    ),
  },
  {
    Icon: MapPin,
    name: "Visit Us",
    description: "Get directions to our main campus for in-person worship.",
    href: "#",
    cta: "Get Directions",
    className: "col-span-3 lg:col-span-1 relative overflow-hidden",
    background: (
      <div className="absolute inset-0">
        {/* Minimalist Map Background Illusion */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-50 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-125">
          <div className="w-20 h-20 bg-indigo-100/50 rounded-full animate-pulse flex items-center justify-center">
            <MapPin className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
      </div>
    ),
  },
];

export function BentoDemo() {
  return (
    <div className="w-full">
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
