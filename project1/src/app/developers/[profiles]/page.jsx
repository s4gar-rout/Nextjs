import Image from "next/image";
import Link from "next/link";


const developers = [
  {
    username: "sagar",
    name: "Sagar Rout",
    role: "Full Stack Developer",
    image: "/developers/sagar.jpg",
    bio: "Passionate developer who loves building modern web applications.",
    skills: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    username: "rahul",
    name: "Rahul Sharma",
    role: "Frontend Developer",
    image: "/developers/rahul.jpg",
    bio: "Frontend developer focused on creating beautiful user experiences.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    username: "aman",
    name: "Aman Kumar",
    role: "Backend Developer",
    image: "/developers/aman.jpg",
    bio: "Backend developer who enjoys working with APIs and databases.",
    skills: ["Node.js", "Express", "MongoDB"],
  },
];

const Page = async ({ params }) => {

  const { profiles } = await params;

  const developer = developers.find(
    (developer) => developer.username === profiles
  );

  if (!developer) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
        <div className="text-center">

          <h1 className="text-5xl font-bold">
            Developer Not Found
          </h1>

          <p className="mt-4 text-zinc-500">
            No developer exists with username @{profiles}
          </p>

          <Link
            href="/developers"
            className="inline-block mt-8 px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-500 transition"
          >
            ← Back to Developers
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-20">

      <div className="max-w-4xl mx-auto">

        <Link
          href="/developers"
          className="text-zinc-500 hover:text-white transition"
        >
          ← Back to Developers
        </Link>

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8 md:p-12">

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

            <Image
              src={developer.image}
              alt={developer.name}
              width={140}
              height={140}
              className="rounded-full object-cover"
            />

            <div className="text-center md:text-left">

              <p className="text-pink-500 text-sm">
                @{developer.username}
              </p>

              <h1 className="text-4xl md:text-5xl font-bold mt-2">
                {developer.name}
              </h1>

              <p className="text-xl text-zinc-400 mt-3">
                {developer.role}
              </p>

            </div>

          </div>

          <div className="mt-10">

            <h2 className="text-xl font-semibold">
              About
            </h2>

            <p className="mt-3 text-zinc-400 leading-7">
              {developer.bio}
            </p>

          </div>

          <div className="mt-10">

            <h2 className="text-xl font-semibold">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3 mt-4">

              {developer.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Page;