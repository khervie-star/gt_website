"use client";

import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import logo from "@/assets/images/gt_logo.png";
import Image from "next/image";
import {
  CalendarDaysIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { usePathname, useRouter } from "next/navigation";
import { siteUrls } from "@/config";
import { ChevronDown } from "lucide-react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const goToGive = () => {
    router.push(siteUrls.give);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Eldership", path: "/eldership" },
    { name: "Missions", path: "#" },
    { name: "Ministries", path: "#" },
    { name: "Human teams", path: "#" },
    { name: "Ministering teams", path: "#" },
    { name: "Programmes", path: "#" },
    { name: "Church Calendar", path: "#" },
    { name: "Media", path: "#" },
    { name: "Contact us", path: "#" },
  ];

  return (
    <NextUINavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="bg-[#5f147b] from-[#5F147B] to-[#460E58]">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          className="!text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <div className="relative w-8 h-8 mr-2">
            <Image
              src={logo}
              alt="Glory Tabernacle Ministry"
              // className="object-c"
              fill
            />
          </div>
          <p className="font-bold text-white text-sm">
            Glory <span className="text-[gold]">Tabernacle</span>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <div className="relative w-9 h-9 mr-3">
            <Image
              src={logo}
              alt="Glory Tabernacle Ministry"
              // className="object-c"
              fill
            />
          </div>
          <p className="font-bold text-white text-base">
            Glory <span className="text-[gold]">Tabernacle</span>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="">
          <Link
            color="foreground"
            href={siteUrls.home}
            className={`!text-[14px] ${
              pathname == "/" ? "!text-[gold] !font-bold" : "!text-gray-300"
            }`}>
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            aria-current="page"
            href={siteUrls.about}
            className={`!text-[14px] ${
              pathname.startsWith("/about")
                ? "!text-[gold] !font-bold"
                : "!text-gray-300"
            }`}>
            About
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href={siteUrls.eldership}
            className={`!text-[14px] ${
              pathname.startsWith("/eldership")
                ? "!text-[gold] !font-bold"
                : "!text-gray-300"
            }`}>
            Eldership
          </Link>
        </NavbarItem>

        {/* <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Link
                as={Button}
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent !text-gray-300 !text-[14px]"
                endContent={<ChevronDown />}
                radius="sm"
                variant="light">
                Teams
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}>
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}>
              Human Teams
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We'll show you exactly where."
              startContent={icons.activity}>
              Ministry Teams
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}>
              Dorcas Mission
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}>
              ADMI
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Link
                as={Button}
                disableRipple
                className={`p-0 bg-transparent data-[hover=true]:bg-transparent ${
                  pathname.startsWith("/programs")
                    ? "!text-[gold] !font-bold"
                    : "!text-gray-300"
                } !text-[14px]`}
                endContent={<ChevronDown />}
                radius="sm"
                variant="light">
                Programs
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}>
            <DropdownItem
              key="weekly_services"
              description="View the schedule for our weekly worship services and fellowship gatherings."
              startContent={<ClockIcon className="h-5 w-5 text-blue-500" />}>
              Weekly Services
            </DropdownItem>

            <DropdownItem
              key="upcoming_events"
              description="Stay updated with the latest upcoming church events, programs, and special gatherings."
              startContent={<UsersIcon className="h-5 w-5 text-green-500" />}>
              Upcoming Events
            </DropdownItem>

            <DropdownItem
              as={Link}
              href={siteUrls.churchCalendar}
              key="church_calendar"
              description="Explore the church's calendar to keep track of important dates and activities."
              startContent={
                <CalendarDaysIcon className="h-5 w-5 text-yellow-500" />
              }>
              Church Calendar
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="!text-[14px] !text-gray-300">
            Media
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="!text-[14px] !text-gray-300">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <RainbowButton className="shadow-2xl" onClick={goToGive}>
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Give
            </span>
          </RainbowButton>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-[#5f147b] from-[#5F147B] to-[#460E58]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`!text-[14px] ${
                pathname == item.path
                  ? "!text-[gold] !font-bold"
                  : "!text-gray-300"
              }`}
              href={item.path}
              size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
