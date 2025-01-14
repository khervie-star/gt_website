import { PageHeader } from "@/components";
import Marquee from "@/components/ui/marquee";
import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Finding Hope in Difficult Times",
      excerpt:
        "A powerful message about maintaining faith during life's challenges.",
      author: "Pastor John",
      date: "June 15, 2024",
      category: "Interview",
    },
    {
      title: "Community Outreach Recap",
      excerpt: "Highlights from our recent community service weekend.",
      author: "Sarah Thompson",
      date: "June 10, 2024",
      category: "Outreach",
    },
    {
      title: "Youth Ministry Summer Program",
      excerpt: "Exciting details about our upcoming summer activities.",
      author: "Mark Rodriguez",
      date: "June 5, 2024",
      category: "Youth",
    },
  ];

  return (
    <div>
      <Marquee className="bg-yellow-100 text-gray-700 py-2" pauseOnHover>
        Welcome to Glory Tabernacle MinistryBlog - Contact us to share your
        story.
      </Marquee>

      <PageHeader
        title={
          <>
            Coming <span className="text-yellow-500">Soon.</span>
          </>
        }
        description=" Sharing inspiration, faith, and community stories"
      />

      {/* <div className="container mx-auto px-6 py-10 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Featured <span className="text-yellow-500">Posts</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ap-5">
          {blogPosts.map((post, index) => (
            <Card isFooterBlurred className="w-full h-[300px]" key={index}>
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  {post.category}
                </p>
                <h4 className="text-white/90 font-medium text-xl">
                  {post.title}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src="https://canary.nextui.org/images/card-example-5.jpeg"
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <Image
                    alt="Breathing app icon"
                    className="rounded-full w-10 h-11 bg-black"
                    src="https://canary.nextui.org/images/breathing-app-icon.jpeg"
                  />
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">{post.author}</p>
                    <p className="text-tiny text-white/60">{post.date}</p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  Read
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-10 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          New <span className="text-yellow-500">Posts</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ap-5">
          {blogPosts.map((post, index) => (
            <Card isFooterBlurred className="w-full h-[300px]" key={index}>
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  {post.category}
                </p>
                <h4 className="text-white/90 font-medium text-xl">
                  {post.title}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src="https://canary.nextui.org/images/card-example-5.jpeg"
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <Image
                    alt="Breathing app icon"
                    className="rounded-full w-10 h-11 bg-black"
                    src="https://canary.nextui.org/images/breathing-app-icon.jpeg"
                  />
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">{post.author}</p>
                    <p className="text-tiny text-white/60">{post.date}</p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  Read
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-10 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Most <span className="text-yellow-500">Read</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ap-5">
          {blogPosts.map((post, index) => (
            <Card isFooterBlurred className="w-full h-[300px]" key={index}>
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  {post.category}
                </p>
                <h4 className="text-white/90 font-medium text-xl">
                  {post.title}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src="https://canary.nextui.org/images/card-example-5.jpeg"
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <Image
                    alt="Breathing app icon"
                    className="rounded-full w-10 h-11 bg-black"
                    src="https://canary.nextui.org/images/breathing-app-icon.jpeg"
                  />
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">{post.author}</p>
                    <p className="text-tiny text-white/60">{post.date}</p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  Read
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Blog;
