import Link from "next/link";

export default function Header() {
  return (
    <div>
      <nav className="h-11">
        <ul className="flex flex-row-reverse pt-2 gap-3">
          <li className="pr-2">
            <a
              href="https://github.com/Tunyacek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/github-mark.svg"
                alt="Github Icon"
                width={26}
                height={26}
              />
            </a>
          </li>
          <li className="text-2xl pointer-events-none">|</li>
          <li>
            <a
              href="https://www.linkedin.com/in/nik-berankova/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/InBug-Black.png"
                alt="Linkedin Icon"
                width={26}
                height={26}
              />
            </a>
          </li>
          <li className="text-2xl pointer-events-none">|</li>
          <li className="text-xl">
            <Link
              href={
                "https://unsplash.com/photos/yellow-magnolia-flowers-blossom-on-a-branch-WZzAGBmw5sY"
              }
            >
              My CV
            </Link>
          </li>
          <li className="text-2xl pointer-events-none">|</li>
          <li className="text-xl">
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
      <hr />
    </div>
  );
}
