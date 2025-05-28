import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col md:flex-row gap-50 justify-center pt-10 flex-1 ">
        <div className="flex flex-col gap-15">
          <div>
            <h1 className="text-8xl mb-[-10px] -rotate-10"> ✨Welcome!</h1>
            <p className="text-xl pl-50 pt-2 -rotate-7">My name is Nikola 🌸</p>
          </div>
          <div className="xl:hidden flex justify-center">
            <img
              src="me.png"
              alt="cartoon image of me"
              className="rounded-[100%] h-100 w-100"
            />
          </div>
          <div className="pt-1">
            <p className="w-150 text-xl text-center ml-15 md:ml-0 pb-10 xl:p-0">
              My journey into web development began in 2023, after my boyfriend
              inspired me with his own career change. After many months spent
              learning, I found React to be the one that clicked for me and made
              me want to keep learning more! I am learning with AI (ChatGPT),
              StackOverflow and other forums. Evaluating their suggestions,
              adapting them to my needs and making sure I understand what I'm
              doing. Now, I'm learning Next.js and Tailwind CSS as I continue
              taking small, steady steps toward becoming a confident and skilled
              React Master.{" "}
              <img
                src="https://user-images.githubusercontent.com/74038190/226127923-0e8b7792-7b3c-462b-951b-63c96ba1a5af.gif"
                alt="cute bongo cat gif"
                className="w-10 h-10 ml-[460px] mt-[-30px]"
              />
            </p>
          </div>
        </div>
        <div className="hidden xl:block pt-20">
          <img
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
