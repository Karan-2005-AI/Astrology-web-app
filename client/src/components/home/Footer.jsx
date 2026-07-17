const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="text-center">

          <h2 className="text-3xl font-bold text-purple-400">
            AstroAI
          </h2>

          <p className="mt-4 text-gray-400">
            AI-Powered Astrology Platform
          </p>

          <div className="mt-8 flex justify-center gap-8">
            <a href="/" className="hover:text-purple-400">
              Home
            </a>

            <a href="/kundli" className="hover:text-purple-400">
              Kundli
            </a>

            <a href="/horoscope" className="hover:text-purple-400">
              Horoscope
            </a>

            <a href="/about" className="hover:text-purple-400">
              About
            </a>
          </div>

          <p className="mt-10 text-gray-500">
            © 2026 AstroAI. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;