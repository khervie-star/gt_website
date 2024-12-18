import { PageHeader } from '@/components'
import { BorderBeam } from '@/components/ui/border-beam';
import { NeonGradientCard } from '@/components/ui/neon-gradient-card';
import { Card, Divider } from '@nextui-org/react';
import React from 'react'

const events = [
  {
    month: "January 2025",
    items: [
      {
        title: "New Year's Service",
        date: "January 1, 2024",
        description: "Join us for a special New Year's worship service.",
      },
      {
        title: "Youth Bible Study",
        date: "January 15, 2024",
        description: "A Bible study session for the youth.",
      },
    ],
  },
  {
    month: "February 2025",
    items: [
      {
        title: "Valentine's Couples Retreat",
        date: "February 14, 2024",
        description: "A special retreat for couples to strengthen their bond.",
      },
      {
        title: "Community Outreach Program",
        date: "February 25, 2024",
        description: "Engage with the community through service and sharing.",
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
                  <p className="text-gray-600">{event.description}</p>
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