/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { Fragment, useMemo } from "react";
import dayjs from "dayjs";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Note that the dayjsLocalizer extends Day.js with the following plugins:
// - IsBetween
// - IsSameOrAfter
// - IsSameOrBefore
// - LocaleData
// - LocalizedFormat
// - MinMax
// - UTC

// add optional time zone support
import timezone from "dayjs/plugin/timezone";
import { eventList } from "@/lib/events";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@nextui-org/react";
import { BentoDemo } from "@/app/(home)/_components/bento";
dayjs.extend(timezone);

const djLocalizer = dayjsLocalizer(dayjs);

const ColoredDateCellWrapper = ({ children }: any) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "whitesmoke",
    },
  });

const ChurchCalendar = () => {
  const { components, defaultDate, max } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(),
      max: dayjs().endOf("day").subtract(1, "hours").toDate(),
      views: ["month", "week", "day", "agenda"],
    }),
    []
  );

  return (
    <Fragment>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background">
        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-bold tracking-tighter text-black dark:text-white mb-4">
          Church <span className="text-yellow-500">Calendar</span>
        </p>
        <p className="text-sm text-gray-500 mx-auto max-w-[500px] text-center">
          Stay up-to-date with our upcoming events, weekly programs, and special
          gatherings. Explore what&apos;s happening in the life of our church
          community and join us in fellowship.
        </p>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
      <div className="container mx-auto px-[20px] md:px-[100px] py-[32px] md:py-[100px] font-josefin_sans">
        <div className="h-[600px]">
          <Calendar
            components={components}
            defaultDate={defaultDate}
            events={eventList}
            localizer={djLocalizer}
            max={max}
            showMultiDayTimes
            step={60}
            views={["month", "week", "day", "agenda"]}
          />
        </div>
        <div className="py-10 lg;py-20">
          <BentoDemo />
        </div>
      </div>
    </Fragment>
  );
};

export default ChurchCalendar;
