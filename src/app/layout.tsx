import type { Metadata } from "next";
import { Delius, Emilys_Candy, Meow_Script } from "next/font/google";
import "./globals.css";

const emily = Emilys_Candy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-emily",
});

const delius = Delius({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-delius",
});

const meow = Meow_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-meow",
});

export const metadata: Metadata = {
  title: " Portfolio of Nikola Beránková",
  description:
    "Hello! Welcome to my portfolio! I am frontend developer who wants to build user-friendly and pretty responsive websites!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${meow.variable} ${delius.variable} ${emily.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
