import type { Metadata } from "next";
import { Comfortaa, Emilys_Candy, Meow_Script } from "next/font/google";
import "./globals.css";

const emily = Emilys_Candy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-emily",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-comfortaa",
});

const meow = Meow_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-meow",
});

export const metadata: Metadata = {
  title: "My Portfolio | Nikola Beránková",
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
        className={` ${meow.variable} ${comfortaa.variable} ${emily.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
