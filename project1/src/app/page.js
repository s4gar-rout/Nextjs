import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-pink-500">
            DevShow
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Discover
            <span className="text-pink-500"> Developers </span>
            Around You
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
            Explore developer profiles, discover their skills, projects,
            and technologies they love working with.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

            <Link
              href="/developers"
              className="px-7 py-3 rounded-full bg-pink-600 hover:bg-pink-500 transition font-medium"
            >
              Explore Developers →
            </Link>

            <Link
              href="/about"
              className="px-7 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 transition font-medium"
            >
              Learn More
            </Link>

          </div>

        </div>
      </section>


      {/* Features Section */}
      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-pink-500 mb-3">
              Why DevShow?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Everything you need to discover developers.
            </h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="p-7 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-pink-500/50 transition">
              <div className="text-3xl mb-5">
                👨‍💻
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Developer Profiles
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Explore developer profiles and learn about their skills,
                experience and interests.
              </p>
            </div>


            {/* Card 2 */}
            <div className="p-7 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-pink-500/50 transition">
              <div className="text-3xl mb-5">
                ⚡
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Explore Skills
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Discover developers based on technologies like React,
                Next.js, Node.js and more.
              </p>
            </div>


            {/* Card 3 */}
            <div className="p-7 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-pink-500/50 transition">
              <div className="text-3xl mb-5">
                🚀
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Discover Projects
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Check out projects built by developers and get inspired
                by their work.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA Section */}
      <section className="px-6 pb-24">

        <div className="max-w-5xl mx-auto rounded-3xl bg-pink-600 p-10 md:p-16 text-center">

          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to explore?
          </h2>

          <p className="mt-4 text-pink-100 max-w-xl mx-auto">
            Find interesting developers and discover what they're building.
          </p>

          <Link
            href="/developers"
            className="inline-block mt-8 px-7 py-3 rounded-full bg-white text-pink-600 font-semibold hover:bg-zinc-100 transition"
          >
            Browse Developers
          </Link>

        </div>

      </section>

    </main>
  );
}