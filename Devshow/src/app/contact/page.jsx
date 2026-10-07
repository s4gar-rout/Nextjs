
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* Header */}
      <section className="px-6 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">

          <p className="text-sm uppercase tracking-[0.3em] text-pink-500 mb-4">
            Get in touch
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Let's
            <span className="text-pink-500"> connect.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-zinc-400 leading-relaxed">
            Have a question, suggestion, or just want to say hello?
            Send us a message and we'll get back to you.
          </p>

        </div>
      </section>


      {/* Contact Section */}
      <section className="px-6 pb-24">

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>

            <h2 className="text-2xl font-semibold mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-sm text-zinc-500 mb-1">
                  Email
                </p>

                <p className="text-zinc-300">
                  hello@devshow.com
                </p>
              </div>


              <div>
                <p className="text-sm text-zinc-500 mb-1">
                  Location
                </p>

                <p className="text-zinc-300">
                  India
                </p>
              </div>


              <div>
                <p className="text-sm text-zinc-500 mb-1">
                  Follow us
                </p>

                <div className="flex gap-4 mt-3">

                  <a
                    href="#"
                    className="text-zinc-400 hover:text-pink-500 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href="#"
                    className="text-zinc-400 hover:text-pink-500 transition"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="#"
                    className="text-zinc-400 hover:text-pink-500 transition"
                  >
                    Twitter
                  </a>

                </div>
              </div>

            </div>

          </div>


          {/* Contact Form */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:p-8">

            <form className="space-y-6">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-zinc-400 mb-2"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none placeholder:text-zinc-600 focus:border-pink-500 transition"
                />
              </div>


              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-zinc-400 mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none placeholder:text-zinc-600 focus:border-pink-500 transition"
                />
              </div>


              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-zinc-400 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none resize-none placeholder:text-zinc-600 focus:border-pink-500 transition"
                />
              </div>


              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-pink-600 py-3 font-medium hover:bg-pink-500 transition"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* Bottom CTA */}
      <section className="border-t border-zinc-800 px-6 py-12">

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h2 className="text-xl font-semibold">
              Want to explore developers?
            </h2>

            <p className="text-zinc-500 mt-1">
              Discover developers and their projects.
            </p>
          </div>

          <Link
            href="/developers"
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition"
          >
            Explore Developers
          </Link>

        </div>

      </section>

    </main>
  );
}
