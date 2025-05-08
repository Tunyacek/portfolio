import Header from "@/components/header";

export default function CV() {
  return (
    <div>
      <Header />

      <div className="flex flex-row justify-center gap-30 bg-white border-white rounded-xl p5 w-[1600px] mx-auto h-auto">
        <div className="w-150 border-2 border-dotted rounded-lg h-95">
          <div className="p-5">
            <p className="font-bold text-2xl ">Education</p>
            <p> 🦜Exotic animal breeder SOŠ a SOU Čakovice 2013 - 2017 🐆</p>
            <p className="font-bold text-2xl">Skills</p>
            <ol>
              <li>✨Frontend Development: React and TypeScript.</li>
              <li>✨Backend Development: Express and Prisma.</li>
              <li>✨Database Management: Prisma ORM and Supabase.</li>
              <li>
                ✨Full-Stack Development: Created a recipe app with features
                like user authentication, CRUD operations, and search
                functionality.
              </li>
              <li>
                ✨Self-Learner: Learned React, TypeScript, Express, and Prisma
                through online tutorials and selfguided project.
              </li>
            </ol>
            <p className="font-bold text-2xl">Language</p>
            <ol>
              <li>✨Czech</li>
              <li>✨English</li>
            </ol>
          </div>
        </div>
        <div className="w-150 border-2 border-dotted rounded-lg">
          <div className="p-5">
            <div>
              <p className="font-bold text-2xl">About Me</p>{" "}
              <p>
                I'm 28 and a total animal lover. I enjoy cooking (but honestly,
                eating is the best part! 🍕 ), and I like hitting the pool for a
                good swim. When I'm chilling, you'll probably find me smashing
                the keyboard or PS controller, or sleeping on the sofa with one
                of my favorite series playing in the background. I just love
                having fun. Doesn't matter if it's sports, adventures, or
                something totally new! 🛼 🏕️ 🏄
              </p>
            </div>
            <p className="font-bold text-2xl">Working exprience</p>
            <div>
              <p>Now - 2023</p>
              <p className="font-bold text-lg">Career Transition</p>
              <p>
                In 2023, I made a career change from my previous role as a
                kindergarten teacher to pursue my passion for web development.
                During this time, I focused on learning and building projects
                using technologies like React, TypeScript, Express, and Prisma.
                You can find my project here: https://nomnomnation.vercel.app/
                or on my Github
              </p>
            </div>
            <div>
              <p>Now - 2024</p>
              <p className="font-bold text-lg">ZŠ a MŠ Dolákova</p>
              <p className="font-semibold">Kindergarten teaching assistant</p>
              <ol>
                <li>
                  ✨Assisting the teacher in planning and delivering lessons and
                  activities.
                </li>
                <li>
                  ✨Providing one-on-one support to children with additional
                  needs.
                </li>
                <li>
                  ✨Assisting with classroom decorations, such as cutting and
                  decorating windows and displays
                </li>
              </ol>
            </div>
            <div>
              <p>2020 - 2023</p>
              <p className="font-bold text-lg">ZŠ a MŠ Dolákova</p>
              <p className="font-semibold">Kindergarten teacher</p>
              <ol>
                <li>
                  ✨Planning and delivering age-appropriate lessons and
                  activities.
                </li>
                <li>
                  ✨Supporting children's emotional, social, and cognitive
                  development.
                </li>
                <li>✨Ensuring a safe and nurturing environment</li>
                <li>✨Communicating with parents about children's progress</li>
                <li>✨Assisting children with personal care needs</li>
              </ol>
            </div>
            <div>
              <p>2018 - 2020</p>
              <p className="font-bold text-lg">FANY GASTROSERVIS s.r.o.</p>
              <p className="font-semibold">Shipping and billing clerk</p>
              <ol>
                <li>✨Processing, creating, and printing sales documents.</li>
                <li>✨Correcting and reviewing documents from employees.</li>
                <li>
                  ✨Processing financial documents for the accounting department
                </li>
                <li>✨Training new team members.</li>
                <li>✨Handling complaints and issuing credit notes.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
