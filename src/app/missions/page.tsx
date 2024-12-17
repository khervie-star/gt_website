"use client";

import { PageHeader } from "@/components";
import BlurFade from "@/components/ui/blur-fade";
import { Card, Tab, Tabs } from "@nextui-org/react";
import React from "react";

const Missions = () => {
  const images = Array.from({ length: 9 }, (_, i) => {
    const isLandscape = i % 2 === 0;
    const width = isLandscape ? 800 : 600;
    const height = isLandscape ? 600 : 800;
    return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
  });

  return (
    <div className="container mx-auto">
      <PageHeader
        title={<>Missions</>}
        description="We're here to connect, serve, and answer any questions you might have. Whether you're exploring faith, need assistance, or want to learn more about our church, we'd love to hear from you!"
      />

      <div className="w-full lg:w-[90%] mx-auto py-10 lg:py-20 px-5">
        <p className="text-3xl font-bold text-black dark:text-white md:text-4xl mb-6">
          The Beginning Of
          <span className="text-yellow-500"> Mission Support </span>
        </p>
        <p className="text-gray-600 mb-4">
          The Glory Tabernacle Ministry was established on 7th January, 1990. It
          is a single congregation Ministry which has been involved in missions
          work from its inception. One very unique experience the ministry had
          from the beginning was that the Lord inspired the leadership of the
          Ministry on the need to tithe all the tithes and offerings. The tithe
          of tithes was designated for mission support. In this way, the fund
          for mission support was secured. This was the direct outcome of the
          favorable disposition of the Pastor to missions.
        </p>
        <p className="text-gray-600">
          The missions support has had intensive growth all glory be to God and
          has now dedicated itself by establishing different programs and
          different teams and other activities such as Annual Mission, Awareness
          Week, Missions Luncheon (for mobilizing Pastors), Missionary Children
          Carnival and so on
        </p>
      </div>

      <section
        id="missionSupport"
        className="w-full lg:w-[90%] mx-auto py-10 lg:py-20 px-5">
        <p className="text-3xl font-bold text-black dark:text-white md:text-4xl mb-6 lg:mb-10 text-center">
          Mission Support <span className="text-yellow-500">Areas</span>
        </p>
        <div className="flex w-full flex-col mx-auto">
          {/* ["solid", "underlined", "bordered", "light" */}
          <Tabs
            aria-label="Mission Support Areas"
            variant="bordered"
            color="primary"
            classNames={{
              tabList: "flex items-center justify-center mx-auto",
              tabContent: "font-semibold",
              tab: "!py-5 !px-8",
            }}>
            <Tab key="1" title="PMSP">
              <Card className="p-5 mt-0 lg:mt-8 !shadow-none">
                <p className="text-gray-700 font-semibold">
                  Partial Missionary Sponsorship Program
                </p>
                <div className="mt-4">
                  <p className="text-gray-600 mb-4">
                    From 1990 to 1994 the tithe of tithes was shared among some
                    mission agencies. The fund was sent to the headquarters of
                    these agencies as general support to their work. However the
                    church leadership soon thought that the field based
                    missionaries needed the money more than their headquarters.
                    From 1995 the mission fund was now used to support field
                    based missionaries. It was also decided at that time that
                    the support would be in phases of three years.
                  </p>
                  <p className="text-gray-600 mb-4">
                    During this period the money was sent as monthly stipend to
                    the missionaries. The missionaries were all nominated from
                    and by several mission agencies. The income of the church
                    was not much at that time. So we could only afford to pay
                    each missionary five hundred Naira per month. It was
                    regarded as partial support to augment whatever other
                    support they were receiving from elsewhere, hence the name
                    &quot;Partial Missionary Sponsorship program&quot;. When
                    PMSP entered its second phase (1998-2000), the income of the
                    church had begun to increase.
                  </p>
                  <p className="text-gray-600">
                    Consequently, the stipend of the missionaries was increased
                    to seven hundred and fifty Naira per month. The number of
                    missionaries and mission agencies enjoying the support was
                    increased by more than 100%. We also began sponsorship of
                    missionary children. In subsequent phases, the number of
                    missionaries and missionary children benefiting from the
                    scheme further increased. The table below shows GT&apos;s
                    progressive involvement in Missions.
                  </p>
                </div>
              </Card>
            </Tab>
            <Tab key="2" title="SMSP">
              <Card className="p-5 mt-0 lg:mt-8 !shadow-none">
                <p className="text-gray-700 font-semibold">
                  Special Missionary Sponsorship Program
                </p>
                <div className="mt-4">
                  <p className="text-gray-600 mb-4">
                    In July 1997, Dr. U. Obed attended the Global Consultation
                    on World Evangelism in Pretoria, South Africa. On his
                    return, he initiated the formulation of the church view on
                    missions as follows: We believe that the current global
                    emphasis on evangelizing the world by 2000AD (and beyond) is
                    a divine initiative. We also believe that the most effective
                    way of achieving this goal is by aggressive missionary work.
                    It is therefore our desire in the Glory Tabernacle Ministry
                    to participate in this final global thrust, by supporting
                    mission endeavors.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The church consequently adopted three of the critically
                    unreached people groups in Nigeria on the Joshua Project.
                    Three missionaries were selected and placed on special
                    sponsorship. This gave rise to the program we now refer to
                    as Special Missionary Sponsorship Program(SMSP). Each of the
                    missionaries was placed on a stipend of five thousand naira
                    per month. Since then we have had and still have several
                    missionaries in critically unreached areas under our
                    sponsorship.
                  </p>
                  <p className="text-gray-600 mb-4">
                    At this juncture, the Pastor encouraged individuals and
                    teams in the church to get personally involved in mission
                    support. Everyone was made to realize that this is an
                    acceptable service to God, which has both temporal and
                    eternal rewards. Any amount was acceptable as long as it
                    will be given on a regular basis. Over 100 people made
                    monthly pledges of between 50 and 5000 naira. In addition,
                    many teams (Ushers, Choir, Children, Deacons, Singles, etc.)
                    in the church decided to sponsor one or more missionaries in
                    the PMSP.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Private businesses, Schools and other enterprises provided
                    corporate contributions. Together with the tithe of tithes,
                    more resources became available for mission support. In
                    order to coordinate all these contributions and enhance the
                    effective and fruitful use of the resources, the Mission
                    Support Clearing House (MSCH) was set up.
                  </p>
                  <p className="text-gray-600">
                    GT is divided into zones based on the grouping of our home
                    cells (Discipleship Fellowship Centers). Each of these zones
                    collects special missionary offerings at the home cells.
                    With these offering they participate in the PMSP and carry
                    out other forms of mission support. One of the zones has
                    bought a motorcycle for a field based missionary.
                  </p>
                </div>
              </Card>
            </Tab>
            <Tab key="3" title="Teams">
              <Card className="p-5 mt-0 lg:mt-8 !shadow-none">
                <p className="text-gray-700 font-semibold">Mission Teams</p>
                <div className="mt-4">
                  <p className="text-gray-600 mb-4">
                    Members of the church who feel that they have missionary
                    calling can avail themselves of the various opportunities
                    provided in the church. There are three mission related
                    teams in the church.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6">
                    <div>
                      <h2 className="text-lg font-semibold mb-2">
                        Mission Support Group
                      </h2>
                      <ul className="flex flex-col gap-2 list-disc list-inside text-gray-600">
                        <li>Raises material support for missionaries</li>
                        <li>Visits parents of missionaries </li>
                        <li>Organizes carnival for missionary children</li>
                        <li>
                          Correspond with missionaries - by letters, phoning,
                          etc.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold mb-2">
                        Mission Prayer Support Group
                      </h2>
                      <ul className="flex flex-col gap-2 list-disc list-inside text-gray-600">
                        <li>
                          Meets every Thursday to pray for missionaries and
                          mission agencies using the prayer/testimony bulletins
                          provided by the agencies.
                        </li>
                        <li>
                          Writes to missionaries to update the status of their
                          prayer requests/testimonies
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold mb-2">
                        Short-term Mission Volunteers
                      </h2>
                      <ul className="flex flex-col gap-2 list-disc list-inside text-gray-600">
                        <li>
                          Organizes short term mission trips to assist
                          missionaries in the mission fields.
                        </li>
                        <li>
                          Evaluates the effectiveness of the missionaries in the
                          field Identifies further possible areas of support in
                          the field.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </section>

      <section
        id="photos"
        className="w-full lg:w-[90%] mx-auto py-10 lg:py-20 px-5">
        <p className="text-3xl font-bold text-black dark:text-white md:text-4xl mb-6">
          Mission <span className="text-yellow-500">Media</span>
        </p>
        <div className="columns-2 gap-4 sm:columns-3">
          {images.map((imageUrl, idx) => (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Missions;
