// Import necessary components and icons
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

// Updated socials with photo
const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/khoalam",
    label: "Co-founder & CEO",
    handle: "Khoa Lam",
    description:
      "Inspiration chasing technologist. Craftsman of clarity. Advocate for style points.",
    photo: "PortraitKhoa.png",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/edanford",
    label: "Co-founder & CTO",
    handle: "Erik Danford",
    description:
      "Multifaceted engineer. Torchbearer of tinkering tenets. Fixes anything from bugs to boats.",
    photo: "PortraitErik.png",
  },
];

export default function Example() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-16">
          {socials.map((s) => (
            <Card className="border">
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-24 md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <div className="z-10 flex flex-col items-center">
                  {/* Display photo */}
                  <img
                    src={s.photo || "/path/to/default.jpg"}
                    alt={s.handle}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-1 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                  <span className="mt-4 relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>{" "}
                  <span className="mt-4 text-xs text-center text-zinc-500 group-hover:text-zinc-300">
                    {s.description}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
