import Link from "next/link";
import React from "react";
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

const navigation = [
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-8 animate-fade-in">
        <div className="flex items-center justify-center gap-4">
          {navigation.map((item) =>
            item.noLink ? (
              <a
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </nav>
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Tellaprompt
      </h1>
      <div className="my-16 mx-4 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
        AI is everywhere, and using it should be easier.
        <br />
        We're here to help with that.
        </h2>
        <div className="pt-8">
          <a
            href="mailto:khoa@tellaprompt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-white bg-zinc-700 border border-zinc-700 rounded hover:bg-zinc-600 duration-500"
            title="Available for consulting and development"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
}