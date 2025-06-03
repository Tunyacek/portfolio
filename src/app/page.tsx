import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col md:flex-row gap-50 justify-center pt-10 flex-1 ">
        <div className="flex flex-col gap-15">
          <div className="pl-[50px] sm:pl-[80px]md:pl-0">
            <div className="flex flex-row -rotate-10">
              <Image
                src="star-removebg.png"
                alt="image of star"
                className="w-30 h-20 "
              />
              <h1 className="text-8xl mb-[-10px]  ml-[-30px]">Welcome!</h1>
            </div>
            <div className="flex flex-row -rotate-7">
              <p className="text-xl pl-50 pt-2 ">My name is Nikola</p>
              <Image
                src="white-flower-removebg.png"
                alt="image of white flower"
                className="w-13 h-8"
              />
            </div>
          </div>
          <div className="xl:hidden flex justify-center">
            <Image
              src="me.png"
              alt="cartoon image of me"
              className="rounded-[100%] h-100 w-100"
            />
          </div>
          <div className="pt-1">
            <p className="w-110 sm:w-130 md:w-150 text-xl text-center ml-15 md:ml-0 pb-10 xl:p-0">
              My journey into web development began in 2023, after my boyfriend
              inspired me with his own career change. After many months spent
              learning, I found React to be the one that clicked for me and made
              me want to keep learning more! I am learning with AI (ChatGPT),
              StackOverflow and other forums. Evaluating their suggestions,
              adapting them to my needs and making sure I understand what I'm
              doing. Now, I'm learning Next.js and Tailwind CSS as I continue
              taking small, steady steps toward becoming a confident and skilled
              React Master.{" "}
              <Image
                src="https://user-images.githubusercontent.com/74038190/226127923-0e8b7792-7b3c-462b-951b-63c96ba1a5af.gif"
                alt="cute bongo cat gif"
                className="w-10 h-10 ml-[430px] mt-[-30px] sm:ml-[505px] sm:mt-[-30px] md:ml-[455px]"
              />
            </p>
          </div>
        </div>
        <div className="hidden xl:block pt-20">
          <Image
            src="me.png"
            alt="cartoon image of me"
            className="rounded-[100%] h-100 w-100"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
