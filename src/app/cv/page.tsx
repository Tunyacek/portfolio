import Education from "@/components/cv/ed";
import Experience from "@/components/cv/exp";
import Extra from "@/components/cv/extra";
import Header from "@/components/header";

export default function CV() {
  return (
    <div className="pb-10">
      <Header />

      <div className="flex flex-row justify-center gap-15 bg-[#fff0f5] rounded-xl  py-10 w-[1500px] mx-auto">
        <div className="flex flex-col justify-between gap-auto ">
          <Education />
          <Extra />
        </div>

        <Experience />
      </div>
    </div>
  );
}
