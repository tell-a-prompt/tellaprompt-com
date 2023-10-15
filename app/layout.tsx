import { Plus_Jakarta_Sans } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "../global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tellaprompt.com"),
  title: {
    default:
      "Tellaprompt: AI-Driven Solutions & Consultation | Reshaping Digital Interactions",
    template: "%s | tellaprompt.com",
  },
  description: "Unlock the future of digital experiences with Tellaprompt. From AI-driven consulting to innovative development, we redefine how businesses engage with AI.",
  openGraph: {
    title:
      "Tellaprompt: AI-Driven Solutions & Consultation | Reshaping Digital Interactions",
    description: "Unlock the future of digital experiences with Tellaprompt. From AI-driven consulting to innovative development, we redefine how businesses engage with AI.",
    url: "https://tellaprompt.com",
    siteName: "tellaprompt.com",
    images: [
      {
        url: "https://tellaprompt.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "tellaprompt.com",
    creator: "@tellaprompt",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className="bg-black">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
