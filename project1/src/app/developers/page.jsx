
import Image from "next/image";
import Link from "next/link";

const developers = [
  {
    username: "sagar",
    name: "Sagar Rout",
    role: "Full Stack Developer",
    image: "/developers/sagar.jpg",
    skills: ["React", "Next.js", "Node.js"],
  },
  {
    username: "rahul",
    name: "Rahul Sharma",
    role: "Frontend Developer",
    image: "/developers/rahul.jpg",
    skills: ["React", "JavaScript", "Tailwind"],
  },
  {
    username: "aman",
    name: "Aman Kumar",
    role: "Backend Developer",
    image: "/developers/aman.jpg",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    username: "priya",
    name: "Priya Singh",
    role: "UI/UX Developer",
    image: "/developers/priya.jpg",
    skills: ["Figma", "React", "CSS"],
  },
];

export default function Developers() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-20">

      {/* Header */}
      <section className="max-w-6xl mx-auto mb-14">

        <p className="text-sm uppercase tracking-[0.3em] text-pink-500 mb-4">
          Community
        </p>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Discover
          <span className="text-pink-500"> Developers.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-zinc-400 text-lg">
          Explore developers, their skills, and the technologies
          they work with.
        </p>

      </section>


      {/* Developer Grid */}
      <section className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {developers.map((developer) => (

            <div
              key={developer.username}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 hover:border-pink-500/50 transition"
            >

              {/* Profile Image */}
              <div className="flex items-center gap-4">

                <Image
                  src={developer.image}
                  alt={developer.name}
                  width={72}
                  height={72}
                  className="rounded-full object-cover"
                />

                <div>
                  <h2 className="text-xl font-semibold">
                    {developer.name}
                  </h2>

                  <p className="text-zinc-500 text-sm">
                    @{developer.username}
                  </p>
                </div>

              </div>


              {/* Role */}
              <p className="mt-6 text-zinc-300">
                {developer.role}
              </p>


              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-5">

                {developer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>


              {/* Profile Link */}
              <Link
                href={`/developers/${developer.username}`}
                className="inline-block mt-7 text-pink-500 hover:text-pink-400 transition"
              >
                View Profile →
              </Link>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}
