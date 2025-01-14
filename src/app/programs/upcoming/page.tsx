import { PageHeader } from '@/components'
import { BorderBeam } from '@/components/ui/border-beam';
import { Card, Divider } from '@nextui-org/react';
import React from 'react'

const events = [
  {
    month: "January 2025",
    items: [
      {
        title: "New Year's Service",
        date: "January 1, 2025",
        description:
          "Join us for a special New Year's worship service to welcome the new year with prayer and thanksgiving.",
      },
      {
        title: "Annual Fasting and Prayer",
        date: "January 6 - 25, 2025",
        description:
          "Join us for a time of spiritual renewal through fasting, prayer, and Bible study.",
      },
    ],
  },
  {
    month: "February 2025",
    items: [
      {
        title: "Christian's Business Summit",
        date: "February 8, 2025",
        description:
          "A summit to empower Christian entrepreneurs and professionals with biblical principles for success.",
      },
      {
        title: "Membership Induction Course",
        date: "February 14 - 15, 2025",
        description:
          "A course designed to welcome and guide new members into the church community.",
      },
      {
        title: "GADS Starts",
        date: "February 24, 2025",
        description:
          "The start of the Glory Academy Discipleship School (GADS) for spiritual growth and leadership training.",
      },
    ],
  },
  {
    month: "March 2025",
    items: [
      {
        title: "Church Worker's Retreat",
        date: "March 8, 2025",
        description:
          "A retreat for church workers to rejuvenate their spirit and enhance their ministry skills.",
      },
      {
        title: "Congregational Vigil",
        date: "March 28 - 29, 2025",
        description:
          "A night of prayer and worship for the entire congregation.",
      },
    ],
  },
  {
    month: "April 2025",
    items: [
      {
        title: "Family / Easter Week Programme",
        date: "April 17 - 20, 2025",
        description:
          "A week-long programme celebrating Easter with family-oriented activities and services.",
      },
    ],
  },
  {
    month: "May 2025",
    items: [
      {
        title: "Glory Men's Convention",
        date: "May 8 - 11, 2025",
        description:
          "A convention aimed at inspiring and equipping men to lead with integrity and faith.",
      },
      {
        title: "Glory Women's Convention",
        date: "May 22 - 25, 2025",
        description:
          "A gathering to empower women in their spiritual, family, and community lives.",
      },
    ],
  },
  {
    month: "June 2025",
    items: [
      {
        title: "Discipleship Centres Leaders' Convention",
        date: "June 13 - 14, 2025",
        description:
          "A convention for leaders of discipleship centres to share insights and strengthen their leadership.",
      },
    ],
  },
  {
    month: "July 2025",
    items: [
      {
        title: "Christian Leadership Training School",
        date: "July 7 - 26, 2025",
        description:
          "A comprehensive training programme for current and aspiring church leaders.",
      },
    ],
  },
  {
    month: "August 2025",
    items: [
      {
        title: "Glory Children's Convention",
        date: "August 7 - 10, 2025",
        description:
          "A special convention designed to teach children biblical values through fun and engaging activities.",
      },
      {
        title: "Glory Youth Convention",
        date: "August 21 - 24, 2025",
        description:
          "An inspiring event to nurture the faith and leadership of young people.",
      },
      {
        title: "GADS Ends (Graduation)",
        date: "August 31, 2025",
        description:
          "The graduation ceremony for participants of the Glory Academy Discipleship School (GADS).",
      },
    ],
  },
  {
    month: "September 2025",
    items: [
      {
        title: "Congregational Vigil",
        date: "September 12 - 13, 2025",
        description:
          "A night of collective prayer and worship for the church family.",
      },
      {
        title: "Blessed Singles Team Convention",
        date: "September 25 - 28, 2025",
        description:
          "A convention focused on empowering singles with biblical teachings and practical life guidance.",
      },
    ],
  },
  {
    month: "October 2025",
    items: [
      {
        title: "Operation Win and Disciple a Soul",
        date: "October 9 - 12, 2025",
        description:
          "An outreach programme to encourage members to evangelize and disciple new believers.",
      },
      {
        title: "Annual Mission Awareness Week",
        date: "October 23 - 26, 2025",
        description:
          "A week dedicated to raising awareness and support for missionary work.",
      },
    ],
  },
  {
    month: "November 2025",
    items: [
      {
        title: "Empowering The Church Programme",
        date: "November 13 - 16, 2025",
        description:
          "A programme focused on equipping the church with tools and strategies for effective ministry.",
      },
      {
        title: "Festival Of Nations",
        date: "November 30, 2025",
        description:
          "A multicultural celebration showcasing the diversity within the church.",
      },
    ],
  },
  {
    month: "December 2025",
    items: [
      {
        title: "Workers End of the Year Meeting",
        date: "December 13, 2025",
        description:
          "A meeting to reflect on the year's accomplishments and prepare for the coming year.",
      },
      {
        title: "Christmas Carol",
        date: "December 21, 2025",
        description:
          "A festive gathering with carol singing and Christmas-themed performances.",
      },
      {
        title: "Christmas Service",
        date: "December 25, 2025",
        description: "A special service celebrating the birth of Jesus Christ.",
      },
      {
        title: "Crossover Service",
        date: "December 31, 2025",
        description:
          "A night of worship and prayer to usher in the new year with blessings.",
      },
    ],
  },
];



const UpcomingPrograms = () => {
  return (
    <div className="container mx-auto px-6">
      <PageHeader
        title={
          <>
            Upcoming <span className="text-yellow-500">Programs</span>
          </>
        }
        description="Discover what's happening at our church this season. Stay connected and be part of the journey."
      />
      <div className="py-10 lg:py-20">
        {events.map((group) => (
          <div key={group.month} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 underline decoration-yellow-500">
              {group.month}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((event, index) => (
                <Card
                  key={index}
                  className="p-6 border border-gray-200 shadow-md relative">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                  <BorderBeam size={250} duration={12} delay={9} />
                </Card>
              ))}
            </div>
            <Divider className="my-6" />
          </div>
        ))}

        <p className="text-center text-gray-600 mt-12 font-semibold">
          Stay tuned for more events as they get scheduled!
        </p>
      </div>
    </div>
  );
}

export default UpcomingPrograms