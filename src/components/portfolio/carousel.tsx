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

export default function PorftolioCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-100 "
        onMouseEnter={() => {
          plugin.current.stop();
        }}
        onMouseLeave={() => {
          plugin.current.stop();
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <img
              className="rounded-3xl w-100 object-cover h-75"
              src="home-image.png"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="rounded-3xl w-100  object-cover h-75"
              src="register-image.png"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="rounded-3xl w-100  object-cover h-75"
              src="login-image.png"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="rounded-3xl w-100 object-cover h-75"
              src="create-image.png"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="rounded-3xl w-100 object-cover h-75"
              src="preview-image.png"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="rounded-3xl w-100 object-cover h-75"
              src="recipe-image.png"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="ml-20" />
        <CarouselNext className="mr-20" />
      </Carousel>
    </div>
  );
}
