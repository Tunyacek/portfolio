"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", icon: "/home.svg", alt: "Home Icon" },
  { href: "/portfolio", label: "My portfolio" },
  { href: "/cv", label: "My CV" },
  {
    href: "https://www.linkedin.com/in/nik-berankova/",
    icon: "/InBug-Black.png",
    alt: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/Tunyacek",
    icon: "/github-mark.svg",
    alt: "GitHub",
    external: true,
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="pt-5 pb-10 pr-3">
        <ul className="flex flex-row justify-end">
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            const sharedClasses = `rounded-4xl p-2 flex items-center justify-center ${
              !isActive ? "hover:bg-[#ff9abc94] transition-colors" : ""
            }`;

            return (
              <li key={i}>
                {link.icon && !link.external ? (
                  <Link
                    href={link.href}
                    className={`${sharedClasses} ${
                      isActive
                        ? "pointer-events-none border-2 border-[#ff9abc94]"
                        : "sm:border-2 border-transparent"
                    }`}
                  >
                    <Image
                      src={link.icon}
                      alt={link.alt || ""}
                      width={40}
                      height={0}
                      className="m-auto w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
                    />
                  </Link>
                ) : link.label ? (
                  <Link
                    href={link.href}
                    className={`text-xl sm:text-3xl m-auto ${sharedClasses} ${
                      isActive
                        ? "pointer-events-none border-2 border-[#ff9abc94]"
                        : "sm:border-2 border-transparent"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={sharedClasses}
                  >
                    <Image
                      src={link.icon!}
                      alt={link.alt || ""}
                      width={40}
                      height={0}
                      className="m-auto w-[25px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
                    />
                  </a>
                )}{" "}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
