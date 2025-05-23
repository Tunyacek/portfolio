import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PorftolioCarousel from "@/components/portfolio/carousel";

export default function CarouselCard() {
  return (
    <div className=" pb-10">
      <Card>
        <div className="flex flex-col gap-10 justify-center items-center">
          <CardHeader>
            <CardTitle>
              <p className="font-bold text-5xl ">NomNomNation</p>
            </CardTitle>
            <CardDescription>
              <p className=" w-150 text-lg">
                My first app ever — NomNomNation, a recipe app where I and
                others can keep all our favorite recipes in one place.
              </p>
            </CardDescription>
          </CardHeader>
        </div>
        <CardContent>
          <div className="pt-5 flex flex-col gap-1 justify-center items-center">
            <div className=" w-105">
              <p className="font-bold text-lg">Technologies used:</p>
            </div>
            <ol className=" text-lg pb-5">
              <li>Vite + React</li>
              <li>ChakraUI</li>
              <li>Prisma ORM</li>
              <li>Supabase</li>
              <li>Express.js</li>
            </ol>
          </div>
          <PorftolioCarousel />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
