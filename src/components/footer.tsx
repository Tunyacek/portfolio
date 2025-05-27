export default function Footer() {
  return (
    <footer className="bg-[#ff7aa7] text-white px-6 py-4 text-sm mt-auto">
      <div className=" mx-auto flex flex-col gap-2 text-center">
        <p>
          This page was made with{" "}
          <a
            href="https://nextjs.org/"
            className="underline hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
          ,{" "}
          <a
            href="https://ui.shadcn.com/"
            className="underline hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            shadcn/ui
          </a>
          , and{" "}
          <a
            href="https://tailwindcss.com/"
            className="underline hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          . 🤍
        </p>

        <p className="flex justify-center gap-1">
          Icons:
          <a
            href="https://icons8.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black transition"
          >
            Icons8
          </a>
        </p>
      </div>
    </footer>
  );
}
