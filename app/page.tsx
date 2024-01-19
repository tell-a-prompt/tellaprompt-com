import Link from "next/link";
import React from "react";
import { ExternalLink, BellPlus, Bot, Mail } from "lucide-react";
import { Badge } from "./components/badge";
import { Card, CardContent } from "./components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/carousel";

const navigation = [
  { name: "Blog", href: "https://tellaprompt.hashnode.dev", noLink: false }, // Define noLink property
  { name: "Projects", href: "https://github.com/tell-a-prompt", noLink: false }, // Define noLink property
  { name: "Team", href: "/team", noLink: false }, // Define noLink property
];

export default function Home() {
  const carouselItems = [
    {
      text: "TapGPT",
      icon: (
        <Bot className="text-white w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] md:w-[3rem] md:h-[3rem]" />
      ),
      description: "Chat assistant",
      link: "https://chat.tellaprompt.com/",
    },
    {
      text: "RemindBase",
      icon: (
        <BellPlus className="text-white w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] md:w-[3rem] md:h-[3rem]" />
      ),
      description: "Instant reminders",
      link: "https://remindbase.tellaprompt.com/",
    },
  ];
  return (
    <>
      <div className="fixed w-screen h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black"></div>
      <div className="flex flex-col items-center w-screen overflow-hidden">
        <nav className="my-8" style={{ zIndex: 1 }}>
          <div className="flex items-center justify-center gap-4">
            {navigation.map((item) =>
              item.noLink ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-500 hover:text-zinc-300"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-500 hover:text-zinc-300"
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>
        </nav>
        <h1 className="z-10 text-5xl text-transparent bg-white cursor-default font-display sm:text-7xl md:text-8xl whitespace-nowrap bg-clip-text ">
          Tellaprompt
        </h1>
        <p className="mt-4 sm:mt-8 text-xs text-zinc-100 tracking-tight">
          Choose a tool below and...
        </p>
        <div className="mt-14 mb-2 mx-4 text-center">
          <div className="relative">
            <img
              src="tapSwitcher.png"
              className="min-w-[16rem] w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] rounded-full"
            />
            <div className="absolute top-0 right-1 w-full h-full flex flex-col items-center justify-start">
              <Carousel
                className="absolute w-[8rem] h-full z-20 top-[-50px]"
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent>
                  {carouselItems.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <a
                            href={item.link}
                            rel="noopener noreferrer"
                            title="Launch the tool!"
                          >
                            <div className="flex items-center justify-center w-20 py-2 text-sm text-white bg-green-600 border border-green-600 rounded hover:bg-green-500 mx-auto">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Go!
                            </div>
                          </a>
                          <a href={item.link} className="block">
                            <CardContent className="flex flex-col items-center justify-center mt-[30px] sm:mt-[40px]">
                              <Badge
                                variant="outline"
                                className="text-white font-bold hover:cursor-default mt-1 mb-1"
                              >
                                {item.text}
                              </Badge>
                              {item.icon}
                              <div className="text-white text-xs mt-1">
                                {item.description}
                              </div>
                            </CardContent>
                          </a>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="text-white border-green-600 absolute left-[-80px] sm:left-[-120px] hover:text-green-600 active:text-white focus:text-white" />
                <CarouselNext className="text-white border-green-600 absolute right-[-80px] sm:right-[-120px] hover:text-green-600 active:text-white focus:text-white" />
              </Carousel>
            </div>
          </div>
        </div>
        <div className="my-4 mx-4 text-center max-w-[450px]">
          <h2 className="text-sm sm:text-lg text-zinc-300 pb-4 tracking-tight">
            AI is everywhere, and using it should be easier.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 pb-8">
            At Tellaprompt, we're continuously expanding our suite of AI tools.
            Our mission? To empower you with a secure, universal account that
            amplifies the impact of AI across the entire ecosystem.
          </p>
          <p className="text-xs text-zinc-300 tracking-tight">
            Need a custom solution?
          </p>
          <div className="pt-2 flex items-center justify-center w-auto py-2 text-sm mx-auto">
            <a
              href="mailto:khoa@tellaprompt.com"
              style={{ zIndex: 1 }}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm text-white bg-zinc-700 border border-zinc-700 rounded hover:bg-zinc-600"
              title="Available for consulting and development"
            >
              <Mail className="w-4 h-4 mr-2" />
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
