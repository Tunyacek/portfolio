import Link from "next/link";

export default function Header() {
  return (
    <div>
      <nav className="h-[150px]">
        <ul className="flex flex-row-reverse pt-5 pr-10 gap-3">
          <li className="pr-2 pt-[7px]">
            <a
              href="https://github.com/Tunyacek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/github-mark.svg"
                alt="Github Icon"
                width={30}
                height={30}
              />
            </a>
          </li>
          <li className="text-5xl pointer-events-none">|</li>
          <li className=" pt-[7px]">
            <a
              href="https://www.linkedin.com/in/nik-berankova/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/InBug-Black.png"
                alt="Linkedin Icon"
                width={30}
                height={30}
              />
            </a>
          </li>
          <li className="text-5xl pointer-events-none">|</li>
          <li className="text-3xl pt-[5px]">
            <Link href="/cv">My CV</Link>
          </li>
          <li className="text-5xl pointer-events-none">|</li>
          <li className="text-3xl  pt-[5px]">
            <Link
              href={
                "https://unsplash.com/photos/silhouette-of-leaves-against-a-colorful-sunset-wF83jEn6ZKA"
              }
            >
              My portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
