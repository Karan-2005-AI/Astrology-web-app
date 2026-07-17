import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-lg mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-3xl font-bold text-purple-400">
              🔮 AstroAI
            </h2>

            <p className="mt-4 text-gray-300 leading-7">
              Explore your birth chart with AI-powered astrology.
              Discover Moon Sign, Kundli, planetary positions,
              Nakshatra, and personalized insights.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="/" className="hover:text-purple-400">
                  Home
                </a>
              </li>

              <li>
                <a href="/kundli" className="hover:text-purple-400">
                  Kundli
                </a>
              </li>

              <li>
                <a href="/horoscope" className="hover:text-purple-400">
                  Horoscope
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-purple-400">
                  About
                </a>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-semibold text-white mb-4">
              Connect
            </h3>

            <div className="flex gap-5">

              <Github className="cursor-pointer hover:text-purple-400 transition" />

              <Linkedin className="cursor-pointer hover:text-purple-400 transition" />

              <Mail className="cursor-pointer hover:text-purple-400 transition" />

            </div>

            <p className="mt-5 text-gray-400">
              Powered by React • Express • AI
            </p>

          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500">

          © 2026 AstroAI. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;