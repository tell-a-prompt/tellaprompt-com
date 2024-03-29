"use client";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const navigation = [
  { name: "Blog", href: "https://tellaprompt.hashnode.dev", noLink: false }, // Define noLink property
  { name: "GitHub", href: "https://github.com/tell-a-prompt", noLink: false }, // Define noLink property
  { name: "Team", href: "/team", noLink: false }, // Define noLink property
];

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="mb-8" ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500 border-zinc-800"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hidden md:inline-block duration-500 text-xs md:text-sm text-zinc-400 hover:text-zinc-100 hover:scale-110"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="mailto:khoa@tellaprompt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-white border border-green-600 rounded hover:bg-zinc-800 hover:scale-110 hover:rounded-xl duration-1000 flex items-center"
              title="Let's Talk"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>Let's Talk</span>
            </a>
          </div>

          <Link
            href="/"
            className="text-zinc-300 hover:text-zinc-100 flex items-center gap-4 font-display text-xl text-transparent duration-1000 bg-white text-edge-outline whitespace-nowrap bg-clip-text "
          >
            <ArrowLeft className="hidden md:flex md:w-6 md:h-6 " />{" "}
            <span className="tracking-wider">Tellaprompt</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
