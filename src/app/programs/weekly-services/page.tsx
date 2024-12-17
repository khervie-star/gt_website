import { PageHeader } from "@/components";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import sundayService from "@/assets/images/SUNDAY SERVICE.jpg";
import thursdayService from "@/assets/images/THURSDAY SERVICE.jpg";
import hourOfDivineHelp from "@/assets/images/Hour Of Divine Help.jpg";
import miracleService from "@/assets/images/Miracle and Communion Service.jpg";
import bibleStudy from "@/assets/images/GPdesk.png";
import prayerMeeting from "@/assets/images/Miracle and Communion Service.jpg";

const WeeklyServices = () => {
  const services = [
    {
      day: "Sunday",
      title: "Worship Service",
      time: "9:00 AM",
      location: "Main Worship hall",
      description:
        "Experience heartfelt worship, an inspiring sermon, and vibrant fellowship.",
      image: sundayService,
    },
    {
      day: "Sunday",
      title: "Hour of Divine Help",
      time: "8:00 AM",
      location: "Main Worship hall",
      description:
        "Experience heartfelt worship, an inspiring sermon, and vibrant fellowship.",
      image: hourOfDivineHelp,
    },
    {
      day: "First sunday of the month",
      title: "Miracle and Communion Service",
      time: "8:30 AM",
      location: "Main Worship hall",
      description:
        "Experience heartfelt worship, an inspiring sermon, and vibrant fellowship.",
      image: miracleService,
    },
    {
      day: "Tuesday",
      title: "Bible Study",
      time: "6:30 PM",
      location: "Neighbourhood fellowship centers",
      description: "Dive deep into God's Word with engaging discussions.",
      image: bibleStudy,
    },
    {
      day: "Thursday",
      title: "HolyGhost Encounter",
      time: "4:30 PM",
      location: "Main Worship hall",
      description: "Midweek worship to refresh your spirit and faith.",
      image: thursdayService,
    },
    {
      day: "Friday",
      title: "Prayer Meeting",
      time: "6:30 PM",
      location: "Neighbourhood fellowship centers",
      description: "Gather with others to seek God's guidance and blessings.",
      image: prayerMeeting,
    },
  ];

  return (
    <div className="container mx-auto">
      <PageHeader
        title={
          <>
            Weekly <span className="text-yellow-500">Services</span>
          </>
        }
        description="We're here to connect, serve, and answer any questions you might have. Whether you're exploring faith, need assistance, or want to learn more about our church, we'd love to hear from you!"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 lg:py-20">
        {services.map((service, index) => (
          <Card key={index} isHoverable className="overflow-hidden">
            <Image
              src={service.image}
              alt={`${service.title} image`}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-2">
                <strong>Day:</strong> {service.day}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Time:</strong> {service.time}
              </p>
              <p className="text-gray-600 flex items-center mb-2">
                <FaMapLocationDot className="mr-2" /> {service.location}
              </p>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WeeklyServices;
