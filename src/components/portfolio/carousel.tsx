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
        className="w-100 shadow-lg rounded-3xl"
        onMouseEnter={() => {
          plugin.current.stop();
        }}
        onMouseLeave={() => {
          plugin.current.play();
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <img
              className="rounded-3xl w-100 object-cover h-75"
              src="home-image.png"
              alt="Image of the homepage"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="rounded-3xl w-100  object-cover h-75"
              src="register-image.png"
              alt="Image of the register page"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="rounded-3xl w-100  object-cover h-75"
              src="login-image.png"
              alt="Image of the login page"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="rounded-3xl w-100 object-cover h-75"
              src="create-image.png"
              alt="Image of the creation page"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="rounded-3xl w-100 object-cover h-75"
              src="preview-image.png"
              alt="Image of the list of recipes"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="rounded-3xl w-100 object-cover h-75"
              src="recipe-image.png"
              alt="Image of the single recipe page"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="ml-10" />
        <CarouselNext className="mr-10" />
      </Carousel>
    </div>
  );
}
