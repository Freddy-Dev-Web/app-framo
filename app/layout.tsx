import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Framo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative overflow-x-hidden">
      <body className={twMerge(dmSans.className)}>
        {children}
      </body>
    </html>
  )
}