/* eslint-disable react/no-unescaped-entities */

export default function Extra() {
  return (
    <div className="w-full max-w-[600px] border-2 border-dotted border-black rounded-lg h-auto ">
      <div className="p-5 flex flex-col gap-2">
        <p className="font-bold text-2xl">Extras</p>
        <p className="font-bold text-lg "> {` My fav "quotes"`}</p>
        <p className="italic text-sm md:text-md">
          {" "}
          {` 🌹“Born to blossom, bloom to perish”🥀`}
        </p>
        <p className="italic text-sm md:text-md">
          {`   🙂“Money doesn't change character, it exposes it”🙃 `}
        </p>
        <hr className="border-dotted border-black w-full max-w-[500px] mx-auto mt-2" />
        <p className="font-bold text-lg">Udemy courses</p>
        <ol>
          <li className="text-sm md:text-md">
            <a
              href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              ✨The Complete Full-Stack Web Development Bootcamp
            </a>
          </li>

          <li className="text-sm md:text-md">
            <a
              href="https://www.udemy.com/course/next-js-the-complete-developers-guide/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {`  ✨Next JS: The Complete Developer's Guide `}
            </a>
          </li>

          <li className="text-sm md:text-md">
            <a
              href="https://www.udemy.com/course/react-node-authentication/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              ✨The Ultimate Authentication Course with NodeJS and React
            </a>
          </li>
        </ol>
        <hr className="border-dotted border-black w-full max-w-[500px] mx-auto mt-2" />

        <p className="font-bold text-lg">Career Goals</p>
        <ol>
          <li className="text-sm md:text-md">
            {`    ✨ I'm looking for a supportive team where I can grow as a frontend
            developer. `}
          </li>
          <li className="text-sm md:text-md">
            {`   ✨I aim to build user-friendly, accessible interfaces that improve
            people's experience. `}
          </li>
          <li className="text-sm md:text-md">
            {` ✨I'm excited to work on products that have a real impact, whether
            for users, clients, or society. `}
          </li>
        </ol>
      </div>
    </div>
  );
}
