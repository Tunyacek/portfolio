import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col md:flex-row gap-50 justify-center pt-10 flex-1 ">
        <div className="flex flex-col gap-15">
          <div className=" mx-auto">
            <div className="flex flex-row -rotate-10">
              <div className="relative w-13 h-10 sm:w-16 sm:h-12 md:w-28 md:h-24">
                <Image src="/star-removebg.png" alt="image of star" fill />
              </div>
              <h1 className=" text-5xl ml-[-10px] sm:text-6xl md:text-8xl mb-[-10px]  md:ml-[-30px]">
                Welcome!
              </h1>
            </div>
            <div className="flex flex-row -rotate-7">
              <p className="text-md pl-10 sm:text-lg md:text-xl sm:pl-30 md:pl-50 pt-2 ">
                My name is Nikola
              </p>
              <div className="relative w-10 h-6 mt-2 sm:mt-0 md:w-15 md:h-11">
                <Image
                  src="/white-flower-removebg.png"
                  alt="image of white flower"
                  fill
                />
              </div>
            </div>
          </div>
          <div className="xl:hidden flex justify-center pl-10">
            <div className="relative w-50 h-50">
              <Image
                src="/me.png"
                alt="cartoon image of me"
                className="rounded-[100%] "
                fill
              />
            </div>
          </div>
          <div className="max-w-[600px] mx-auto px-4 pb-10 xl:p-0 flex flex-col items-center">
            <p className="text-center text-md md:text-xl max-w-[40rem] mx-auto px-4 pb-10 xl:p-0">
              {`   My journey into web development began in 2023, after my boyfriend
              inspired me with his own career change. After many months spent
              learning, I found React to be the one that clicked for me and made
              me want to keep learning more! I am learning with AI (ChatGPT),
              StackOverflow and other forums. Evaluating their suggestions,
              adapting them to my needs and making sure I understand what I'm
              doing. Now, I'm learning Next.js and Tailwind CSS as I continue
              taking small, steady steps toward becoming a confident and skilled
              React Master. `}
              <Image
                src="https://user-images.githubusercontent.com/74038190/226127923-0e8b7792-7b3c-462b-951b-63c96ba1a5af.gif"
                alt="cute bongo cat gif"
                width={24}
                height={24}
                className="inline-block ml-1 align-baseline"
              />
            </p>
          </div>
        </div>
        <div className="hidden xl:block pt-20 pb-20">
          <div className="relative w-100 h-100">
            <Image
              src="/me.png"
              alt="cartoon image of me"
              className="rounded-[100%]"
              fill
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
