import Header from "@/components/header";
import CarouselCard from "@/components/portfolio/carousel-card";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <CarouselCard />
      </main>

      <Footer />
    </div>
  );
}
