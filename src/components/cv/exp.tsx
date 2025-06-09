import AboutMe from "./about-me";

export default function Experience() {
  return (
    <div className="w-full max-w-[600px] border-2 border-dotted border-black rounded-lg">
      <div className="p-5 flex flex-col gap-2">
        <AboutMe />
        <hr className="border-dotted border-black w-full max-w-[500px] mx-auto mt-2" />
        <p className="font-bold text-xl sm:text-2xl">Working exprience</p>
        <div>
          <p className="text-sm md:text-md">2023 - Now </p>
          <p className="font-bold text-xl sm:text-2xl">Career Transition</p>
          <p className="text-sm md:text-md">
            In 2023, I made a career change from my previous role as a
            kindergarten teacher to pursue my passion for web development.
            During this time, I focused on learning and building projects using
            technologies like React, TypeScript, Express, and Prisma. You can
            find my project{" "}
            <a
              href=" https://nomnomnation.vercel.app/"
              className="underline"
              target="_blank"
            >
              here!
            </a>{" "}
            or on my Github.
          </p>
        </div>
        <hr className="border-dotted border-black w-full max-w-[500px] mx-auto mt-2" />
        <div>
          <p>2024 - Now </p>
          <p className="font-bold text-lg">ZŠ a MŠ Dolákova</p>
          <p className="font-semibold text-sm md:text-md">
            Kindergarten teaching assistant
          </p>
          <ol>
            <li className="text-sm md:text-md">
              ✨Assisting the teacher in planning and delivering lessons and
              activities.
            </li>
            <li className="text-sm md:text-md">
              ✨Providing one-on-one support to children with additional needs.
            </li>
            <li className="text-sm md:text-md">
              ✨Assisting with classroom decorations, such as cutting and
              decorating windows and displays
            </li>
          </ol>
        </div>
        <hr className=" border-dotted border-black my-2 w-80 mx-auto" />
        <div>
          <p>2020 - 2023</p>
          <p className="font-bold text-lg">ZŠ a MŠ Dolákova</p>
          <p className="font-semibold">Kindergarten teacher</p>
          <ol>
            <li className="text-sm md:text-md">
              ✨Planning and delivering age-appropriate lessons and activities.
            </li>
            <li className="text-sm md:text-md">
              {`✨Supporting children's emotional, social, and cognitive
              development.`}
            </li>
            <li className="text-sm md:text-md">
              ✨Ensuring a safe and nurturing environment
            </li>
            <li className="text-sm md:text-md">{`✨Communicating with parents about children's progress`}</li>
            <li className="text-sm md:text-md">
              ✨Assisting children with personal care needs
            </li>
          </ol>
        </div>
        <hr className=" border-dotted border-black my-2 w-80 mx-auto" />
        <div className="pb-2">
          <p>2018 - 2020</p>
          <p className="font-bold text-lg">FANY GASTROSERVIS s.r.o.</p>
          <p className="font-semibold">Shipping and billing clerk</p>
          <ol>
            <li className="text-sm md:text-md">
              ✨Processing, creating, and printing sales documents.
            </li>
            <li className="text-sm md:text-md">
              ✨Correcting and reviewing documents from employees.
            </li>
            <li className="text-sm md:text-md">
              ✨Processing financial documents for the accounting department
            </li>
            <li className="text-sm md:text-md">✨Training new team members.</li>
            <li className="text-sm md:text-md">
              ✨Handling complaints and issuing credit notes.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
