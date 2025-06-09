"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function PorftolioCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="max-w-100 shadow-lg rounded-3xl"
        onMouseEnter={() => {
          plugin.current.stop();
        }}
        onMouseLeave={() => {
          plugin.current.play();
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              className="rounded-3xl object-cover w-full h-[300px]"
              src="/home-image.png"
              alt="Image of the homepage"
              width={1000}
              height={300}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              className="rounded-3xl object-cover w-full h-[300px]"
              src="/register-image.png"
              alt="Image of the register page"
              width={1000}
              height={300}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              className="rounded-3xl object-cover w-full h-[300px]"
              src="/login-image.png"
              alt="Image of the login page"
              width={1000}
              height={300}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              className="rounded-3xl object-cover w-full h-[300px]"
              src="/create-image.png"
              alt="Image of the creation page"
              width={1000}
              height={300}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              className="rounded-3xl object-cover w-full h-[300px]"
              src="/preview-image.png"
              alt="Image of the list of recipes"
              width={1000}
              height={300}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              className="rounded-3xl object-cover w-full h-[300px]"
              src="/recipe-image.png"
              alt="Image of the single recipe page"
              width={1000}
              height={300}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="ml-10" />
        <CarouselNext className="mr-10" />
      </Carousel>
    </div>
  );
}
