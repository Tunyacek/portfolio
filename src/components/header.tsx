"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  let content;
  let pathname = usePathname();

  switch (pathname) {
    case (pathname = "/"):
      content = (
        <div>
          <nav className="h-[125px]">
            <ul className="flex flex-row-reverse pt-5 pr-10 ">
              <li className=" w-15 rounded-3xl hover:bg-[#ff9abc94] transition-colors ">
                <a
                  href="https://github.com/Tunyacek"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/github-mark.svg"
                    alt="Github Icon"
                    className="ml-4 mt-2.5"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
              <li className="text-5xl pointer-events-none">|</li>
              <li className=" w-15 rounded-3xl hover:bg-[#ff9abc94] transition-colors ">
                <a
                  href="https://www.linkedin.com/in/nik-berankova/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/InBug-Black.png"
                    alt="Linkedin Icon"
                    width={30}
                    height={30}
                    className="ml-4.5 mt-2.5"
                  />
                </a>
              </li>
              <li className="text-5xl pointer-events-none">|</li>
              <li className="text-xl pt-[8px] sm:text-3xl sm:pt-[5px] rounded-3xl hover:bg-[#ff9abc94] transition-colors px-3 border  border-2 border-transparent">
                <Link href="/cv">My CV</Link>
              </li>
              <li className="text-5xl pointer-events-none">|</li>
              <li className="text-xl pt-[8px] sm:text-3xl sm:pt-[5px] rounded-3xl hover:bg-[#ff9abc94] transition-colors px-3 border  border-2 border-transparent">
                <Link href="/portfolio">My portfolio</Link>
              </li>
              <li className="text-5xl pointer-events-none">|</li>
              <li className="h-12 pt-[5px] w-15 rounded-3xl hover:bg-[#ff9abc94] transition-colors pointer-events-none border border-[#ff9abc94] border-2">
                <Link href="/">
                  <Image
                    src="home.svg"
                    alt="Home Icon"
                    className="ml-2 mt-[-2px]"
                    width={40}
                    height={40}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      );
      break;
    case (pathname = "/cv"):
      content = (
        <div>
          <nav className="h-[125px]">
            <ul className="flex flex-row-reverse pt-5 pr-10 ">
              <li className=" w-15 rounded-3xl hover:bg-[#ff9abc94] transition-colors ">
                <a
                  href="https://github.com/Tunyacek"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/github-mark.svg"
                    alt="Github Icon"
                    className="ml-4 mt-2.5"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
              <li className="text-5xl pointer-events-none">|</li>
              <li className=" w-15 rounded-3xl hover:bg-[#ff9abc94] transition-colors ">
                <a
                  href="https://www.linkedin.com/in/nik-berankova/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/InBug-Black.png"
                    alt="Linkedin Icon"
                    width={30}
                    height={30}
                    className="ml-4.5 mt-2.5"
                  />
                </a>
              </li>
              <li className="text-5xl pointer-events-none">|</li>
              <li className=" text-xl pt-[8px] sm:text-3xl sm:pt-[5px] rounded-3xl hover:bg-[#ff9abc94] transition-colors px-3 pointer-events-none border border-[#ff9abc94] border-2">
                <Link href="/cv">My CV</Link>
              </li>
              <li className="text-5xl pointer-events-none">|</li>
              <li className="text-xl pt-[8px] sm:text-3xl sm:pt-[5px] rounded-3xl hover:bg-[#ff9abc94] transition-colors px-3 border  border-2 border-transparent">
                <Link href="/portfolio">My portfolio</Link>
              </li>
              <li className="text-5xl pointer-events-none">|</li>
              <li className="text-3xl pt-[5px] w-15 rounded-3xl hover:bg-[#ff9abc94] transition-colors border  border-2 border-transparent">
                <Link href="/">
                  <Image
                    src="home.svg"
                    alt="Home Icon"
                    className="ml-2 mt-[-2px]"
                    width={40}
                    height={40}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      );
      break;
    case (pathname = "/portfolio"):
      content = (
        <div>
          <nav className="h-[125px]">
            <ul className="flex flex-row-reverse pt-5 pr-10 ">
              <li className=" w-15 rounded-3xl hover:bg-[#ff9abc94] transition-colors ">
                <a
                  href="https://github.com/Tunyacek"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/github-mark.svg"
                    alt="Github Icon"
                    className="ml-4 mt-2.5"
                    width={30}
                    height={30}
                  />
                </a>
              </li>
              <li className="text-5xl pointer-events-none">|</li>
              <li className=" w-15 rounded-3xl hover:bg-[#ff9abc94] transition-colors ">
                <a
                  href="https://www.linkedin.com/in/nik-berankova/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/InBug-Black.png"
                    alt="Linkedin Icon"
                    width={30}
                    height={30}
                    className="ml-4.5 mt-2.5"
                  />
                </a>
              </li>
              <li className="text-5xl pointer-events-none">|</li>
              <li className="text-xl pt-[8px] sm:text-3xl sm:pt-[5px] rounded-3xl hover:bg-[#ff9abc94] transition-colors px-3 border  border-2 border-transparent">
                <Link href="/cv">My CV</Link>
              </li>
              <li className="text-5xl pointer-events-none">|</li>
              <li className="text-xl pt-[8px] sm:text-3xl sm:pt-[5px] rounded-3xl hover:bg-[#ff9abc94] transition-colors px-3 pointer-events-none border border-[#ff9abc94] border-2">
                <Link href="/portfolio">My portfolio</Link>
              </li>
              <li className="text-5xl pointer-events-none">|</li>
              <li className="text-3xl pt-[5px] w-15 rounded-3xl hover:bg-[#ff9abc94] transition-colors border  border-2 border-transparent ">
                <Link href="/">
                  <Image
                    src="home.svg"
                    alt="Home Icon"
                    className="ml-2 mt-[-2px]"
                    width={40}
                    height={40}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      );

      break;
  }

  return <>{content}</>;
}
