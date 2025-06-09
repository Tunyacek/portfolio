export default function Education() {
  return (
    <div className="w-full max-w-[600px] border-2 border-dotted border-black rounded-lg h-auto ">
      <div className="p-5 flex flex-col gap-2">
        <p className="font-bold text-2xl ">Education</p>
        <p className="text-sm md:text-md">
          {" "}
          🦜Exotic animal breeder SOŠ a SOU Čakovice 2013 - 2017 🐆
        </p>
        <hr className="border-dotted border-black w-full max-w-[500px] mx-auto mt-2" />
        <p className="font-bold text-xl sm:text-2xl">Skills</p>
        <ol>
          <li className="text-sm md:text-md">
            ✨Frontend Development: React and TypeScript.
          </li>
          <li className="text-sm md:text-md">
            ✨Backend Development: Express and Prisma.
          </li>
          <li className="text-sm md:text-md">
            ✨Database Management: Prisma ORM and Supabase.
          </li>
          <li className="text-sm md:text-md">
            ✨Full-Stack Development: Created a recipe app with features like
            user authentication, CRUD operations, and search functionality.
          </li>
          <li className="text-sm md:text-md">
            ✨Self-Learner: Learned React, TypeScript, Express, and Prisma
            through online tutorials and selfguided project.
          </li>
        </ol>
        <hr className="border-dotted border-black w-full max-w-[500px] mx-auto mt-2" />
        <p className="font-bold text-xl sm:text-2xl">Language</p>
        <ol>
          <li className="text-sm md:text-md">✨Czech</li>
          <li className="text-sm md:text-md">✨English</li>
        </ol>
      </div>
    </div>
  );
}
