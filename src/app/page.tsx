import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <div className="">
          <div>
            <h1 className="text-8xl">Welcome</h1>
          </div>
          <div>
            <p>to my page, my name is Nikola</p>
            <p className="w-150">
              My journey into web development began in 2023, after my boyfriend
              inspired me with his own career change. After many hours spent
              learning, I found React to be the one that made the most sense to
              me and fit the way I think. Now, I'm learning Next.js and Tailwind
              CSS as I continue taking small, steady steps toward becoming a
              confident and skilled React Master.
            </p>
          </div>
        </div>
        <div className="">
          <p className="border solid rounded-[100%] h-100 w-100">Image</p>
        </div>
      </div>
    </div>
  );
}
