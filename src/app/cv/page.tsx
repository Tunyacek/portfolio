import Education from "@/components/cv/ed";
import Experience from "@/components/cv/exp";
import Extra from "@/components/cv/extra";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function CV() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pb-15">
        <div className="flex flex-row justify-center gap-15 bg-[#fff0f5] rounded-xl py-10 w-[1500px] mx-auto">
          <div className="flex flex-col justify-between gap-auto">
            <Education />
            <Extra />
          </div>

          <Experience />
        </div>
      </main>

      <Footer />
    </div>
  );
}
