import { Sparkles, Brain, Globe, ShieldCheck } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-black text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <span className="inline-block px-4 py-2 rounded-full border border-purple-500 bg-purple-600/20 text-purple-300">
            ✨ About AstroAI
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold">
            The Future of
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              AI Powered Astrology
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 leading-8">
            AstroAI combines the timeless principles of Vedic Astrology with
            Artificial Intelligence to deliver fast, personalized and
            easy-to-understand astrological insights through a modern web
            application.
          </p>

        </div>

      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:border-purple-500 transition">

            <Sparkles size={40} className="text-purple-400 mb-5" />

            <h2 className="text-2xl font-bold mb-3">
              Our Vision
            </h2>

            <p className="text-gray-400 leading-7">
              Make astrology simple, modern and accessible for everyone using
              intelligent digital experiences.
            </p>

          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:border-cyan-500 transition">

            <Brain size={40} className="text-cyan-400 mb-5" />

            <h2 className="text-2xl font-bold mb-3">
              AI Technology
            </h2>

            <p className="text-gray-400 leading-7">
              AI helps explain astrology in clear language while reducing the
              complexity of traditional charts.
            </p>

          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:border-pink-500 transition">

            <Globe size={40} className="text-pink-400 mb-5" />

            <h2 className="text-2xl font-bold mb-3">
              Modern Experience
            </h2>

            <p className="text-gray-400 leading-7">
              Built using React, Express.js, Tailwind CSS and REST APIs with a
              responsive user interface.
            </p>

          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:border-green-500 transition">

            <ShieldCheck size={40} className="text-green-400 mb-5" />

            <h2 className="text-2xl font-bold mb-3">
              Reliable Platform
            </h2>

            <p className="text-gray-400 leading-7">
              Designed with modular architecture so different astrology API
              providers can be integrated easily.
            </p>

          </div>

        </div>

      </section>

      {/* Tech Stack */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10">

          <h2 className="text-4xl font-bold text-center mb-10">
            Technology Stack
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">
                Frontend
              </h3>

              <ul className="space-y-3 text-gray-300">
                <li>• React.js</li>
                <li>• React Router</li>
                <li>• Tailwind CSS</li>
                <li>• Framer Motion</li>
                <li>• Axios</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                Backend
              </h3>

              <ul className="space-y-3 text-gray-300">
                <li>• Node.js</li>
                <li>• Express.js</li>
                <li>• REST API</li>
                <li>• Astrology API Integration</li>
                <li>• Modular Service Architecture</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;