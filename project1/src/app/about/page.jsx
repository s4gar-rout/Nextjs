import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* Hero */}
      <section className="px-6 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">

          <p className="text-sm uppercase tracking-[0.3em] text-pink-500 mb-4">
            About DevShow
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            A place to
            <span className="text-pink-500"> discover </span>
            developers.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
            DevShow is a simple platform where you can explore developers,
            their skills, technologies, and projects — all in one place.
          </p>

        </div>
      </section>


      {/* About Content */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-5">
              What is DevShow?
            </h2>

            <p className="text-zinc-400 leading-8">
              DevShow is a developer directory created to make it easier
              to discover developers and learn about what they build.
              Each developer can have a profile containing their skills,
              technologies, projects, and other useful information.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-5">
              Why was it created?
            </h2>

            <p className="text-zinc-400 leading-8">
              Finding developers and understanding their work should be
              simple. DevShow brings developer profiles into one place
              so you can quickly explore different people and their
              technical journeys.
            </p>
          </div>

        </div>
      </section>


      {/* Features */}
      <section className="px-6 py-16 border-y border-zinc-800">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold mb-10">
            What you can explore
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="text-3xl mb-4">👨‍💻</div>

              <h3 className="text-xl font-semibold mb-2">
                Developers
              </h3>

              <p className="text-zinc-400">
                Discover developers and learn about their technical
                background.
              </p>
            </div>


            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="text-3xl mb-4">🛠️</div>

              <h3 className="text-xl font-semibold mb-2">
                Skills
              </h3>

              <p className="text-zinc-400">
                Explore technologies and skills used by different
                developers.
              </p>
            </div>


            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="text-3xl mb-4">🚀</div>

              <h3 className="text-xl font-semibold mb-2">
                Projects
              </h3>

              <p className="text-zinc-400">
                See projects built by developers and get inspired
                by their work.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="px-6 py-24 text-center">

        <h2 className="text-4xl md:text-5xl font-bold">
          Start exploring developers.
        </h2>

        <p className="mt-5 text-zinc-400">
          Discover people, skills and projects on DevShow.
        </p>

        <Link
          href="/developers"
          className="inline-block mt-8 px-7 py-3 rounded-full bg-pink-600 hover:bg-pink-500 transition font-medium"
        >
          Explore Developers →
        </Link>

      </section>

    </main>
  );
}