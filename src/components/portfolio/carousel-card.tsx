"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PorftolioCarousel from "@/components/portfolio/carousel";
import FlowerButton from "../button";

export default function CarouselCard() {
  return (
    <div className="sm: flex-col md: flex flex-row justify-center items-center pb-20">
      <Card className="w-70 sm:w-110 shadow-2xl">
        <CardHeader className="flex flex-col justify-center items-center">
          <CardTitle>
            <p className="font-bold text-md sm:text-2xl ">NomNomNation</p>
          </CardTitle>
          <CardDescription>
            <p className="max-w-100 text-xs sm:text-md">
              My first app ever — NomNomNation, a recipe app where I and others
              can keep all our favorite recipes in one place.
            </p>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-1 pb-3 justify-center items-center">
            <div className="max-w-105">
              <p className="pl-3 font-bold text-sm sm:text-md">
                Technologies used:
              </p>
            </div>
            <p className="text-xs sm:text-sm">
              Vite + React, ChakraUI, Prisma ORM, Supabase and Express.js
            </p>
          </div>
          <PorftolioCarousel />
        </CardContent>

        <CardFooter className="flex justify-center">
          <a
            href="https://nomnomnation.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FlowerButton />
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
