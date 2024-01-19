import { Plus_Jakarta_Sans } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "../global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tellaprompt.com"),
  title: {
    default: "Tellaprompt - AI Tools and Solutions",
    template: "%s | tellaprompt.com",
  },
  description:
    "Explore Tellaprompt's suite of AI tools, designed to amplify the impact of AI the more you TAP in to our ecosystem. Discover our custom solutions and consulting services to empower your AI needs.",
  openGraph: {
    title: "Tellaprompt - AI Tools and Solutions",
    description:
      "Explore Tellaprompt's suite of AI tools, designed to amplify the impact of AI the more you TAP in to our ecosystem. Discover our custom solutions and consulting services to empower your AI needs.",
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
