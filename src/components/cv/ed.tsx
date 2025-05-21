export default function Education() {
  return (
    <div className="w-150 border-2 border-dotted rounded-lg h-auto ">
      <div className="p-5 flex flex-col gap-2">
        <p className="font-bold text-2xl ">Education</p>
        <p> 🦜Exotic animal breeder SOŠ a SOU Čakovice 2013 - 2017 🐆</p>
        <hr className="border-dotted border-black w-125 mx-auto mt-2" />
        <p className="font-bold text-2xl">Skills</p>
        <ol>
          <li>✨Frontend Development: React and TypeScript.</li>
          <li>✨Backend Development: Express and Prisma.</li>
          <li>✨Database Management: Prisma ORM and Supabase.</li>
          <li>
            ✨Full-Stack Development: Created a recipe app with features like
            user authentication, CRUD operations, and search functionality.
          </li>
          <li>
            ✨Self-Learner: Learned React, TypeScript, Express, and Prisma
            through online tutorials and selfguided project.
          </li>
        </ol>
        <hr className="border-dotted border-black w-125 mx-auto mt-2" />
        <p className="font-bold text-2xl">Language</p>
        <ol>
          <li>✨Czech</li>
          <li>✨English</li>
        </ol>
      </div>
    </div>
  );
}
