import Education from "@/components/cv/ed";
import Experience from "@/components/cv/exp";
import Extra from "@/components/cv/extra";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function CV() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pb-15 px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-8 xl:gap-12 2xl:gap-16 max-w-[1500px] mx-auto">
          <div className="bg-[#fff0f5] rounded-xl py-10 px-5 w-full">
            <div className="flex flex-col justify-between gap-5 h-full items-center">
              <Education />
              <Extra />
            </div>
          </div>

          <div className="bg-[#fff0f5] rounded-xl py-10 px-5 w-full">
            <div className="flex flex-col justify-between gap-5 h-full items-center">
              <Experience />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
