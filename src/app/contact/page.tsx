import React from "react";

import { Button, Input, Textarea } from "@nextui-org/react";
import Link from "next/link";
import { siteUrls } from "@/config";
import { LocateFixedIcon, Phone } from "lucide-react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

import image from "@/assets/images/eldership-cover.jpg";
import Image from "next/image";
import { PageHeader } from "@/components";

const Contact = () => {
  return (
    <>
      <div className="">
        <div className={"relative"}>
          <PageHeader
            title={
              <>
                Reach <span className="text-yellow-500 mx-1">Us</span>{" "}
              </>
            }
            description="We're here to connect, serve, and answer any questions you might have. Whether you're exploring faith, need assistance, or want to learn more about our church, we'd love to hear from you!"
          />

          <div className={"w-full bg-[#f9f9f9]"}>
            <div className="container mx-auto  px-[20px] md:px-[100px] ">
              <div className="px-[20px] md:px-[40px]">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[75px]">
                  <div className={`w-full py-[100px]`}>
                    <div className="mb-5">
                      <h3
                        className="font-semibold text-black text-[28px] md:text-[42px] mb-[5px]"
                        data-aos="fade-up">
                        Get in <span className="text-yellow-500">touch</span>
                      </h3>
                      <p
                        className="font-raleway text-[15px] text-[#838383] font-light"
                        data-aos="fade-up">
                        We believe in creating a welcoming and supportive
                        environment for everyone. If you&apos;d like to connect,
                        leave us a message below, and our team will get back to
                        you promptly.
                      </p>
                    </div>

                    <div className="">
                      <form
                        id="contact-form"
                        role="form"
                        method="post"
                        encType="text/plain"
                        action="mailto:noahtochukwu10@gmail.com"
                        className="font-montserrat"
                        data-aos="fade-up">
                        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5 my-6">
                          <div className="form-group w-full md:w-1/2">
                            <Input
                              variant="faded"
                              label="Email"
                              type="email"
                              required
                            />
                          </div>
                          <div className="form-group w-full md:w-1/2">
                            <Input
                              variant="faded"
                              label="Full name"
                              type="text"
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group">
                            <Textarea
                              variant="faded"
                              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                              label="Leave us a message"
                              //   labelPlacement="outside"
                              //   placeholder="Enter your description"
                            />
                          </div>
                          <br />
                          <div className="col-md-12">
                            <Button className="bg-yellow-500 font-semibold text-white">
                              Send message
                            </Button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    className={
                      "w-full h-[400px] mb-[30px] md:mb-0 shadow-[0px_8px_24px_rgba(149,157,165,0.2)]"
                    }
                    data-aos="zoom-in-up">
                    <iframe
                      title=""
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3956.2974929237753!2d3.9175446!3d7.4322955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed51c6f2bf8f%3A0x2baa9ae9082a5ea0!2sGlory%20Tabernacle%20Ministry!5e0!3m2!1sen!2sng!4v1678534932864!5m2!1sen!2sng"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
              <div className="text-center ">
                <h1 className="mt-2 text-2xl font-semibold text-penn_blue md:text-3xl dark:text-white">
                  We&apos;d love to hear
                  <span className="text-yellow-500 ml-2">from you</span>
                </h1>
              </div>

              <Image
                className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96"
                src={image}
                alt=""
              />

              <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
                <div className="p-4 rounded-lg bg-purple-50 md:p-6 dark:bg-gray-800">
                  <Link
                    href={`mailto:${siteUrls.config.email}`}
                    className="inline-block p-3 text-primary rounded-lg bg-purple-100/80 dark:bg-gray-700">
                    <EnvelopeIcon className="w-5 h-5" />
                  </Link>

                  <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                    Send us a mail
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Drop us a note anytime. We&apos;re here to connect, pray
                    with you, and support you in your journey of faith.
                  </p>
                  <Link
                    href={`mailto:${siteUrls.config.email}`}
                    className="mt-2 text-sm font-medium text-primary underline decoration-yellow-500">
                    {siteUrls.config.email}
                  </Link>
                </div>

                <div className="p-4 rounded-lg bg-purple-50 md:p-6 dark:bg-gray-800">
                  <Link
                    href={siteUrls.config.addressUrl}
                    className="inline-block p-3 text-primary rounded-lg bg-purple-100/80 dark:bg-gray-700">
                    <LocateFixedIcon className="w-5 h-5" />
                  </Link>

                  <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                    Visit us
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    We&apos;d love to see you at one of our services. Join us
                    and be part of our community. Hours: Sundays 9 AM - 12 PM,
                    Wednesdays 6 PM - 8 PM.
                  </p>
                  <Link
                    href={siteUrls.config.addressUrl}
                    className="mt-2 text-sm font-medium text-primary underline decoration-yellow-500">
                    {siteUrls.config.address}
                  </Link>
                </div>

                <div className="p-4 rounded-lg bg-purple-50 md:p-6 dark:bg-gray-800">
                  <Link
                    href={`tel:${siteUrls.config.phone.replaceAll("\\D", "")}`}
                    className="inline-block p-3 text-primary rounded-lg bg-purple-100/80 dark:bg-gray-700">
                    <Phone className="w-5 h-5" />
                  </Link>
                  <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                    Call us
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    Our team is available Monday to Friday from 9 AM to 5 PM to
                    answer your questions or provide assistance.
                  </p>
                  <Link
                    href={`tel:${siteUrls.config.phone.replaceAll("\\D", "")}`}
                    className="mt-2 text-sm font-medium text-primary underline decoration-yellow-500">
                    {siteUrls.config.phone}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
