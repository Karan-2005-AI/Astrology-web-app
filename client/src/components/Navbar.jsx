function Navbar() {
  return (
    <nav className="w-full px-8 py-5 flex justify-between items-center bg-transparent">
      <div className="flex items-center gap-2">
        <span className="text-3xl">🔮</span>
        <h1 className="text-2xl font-bold text-white">
          AstroAI
        </h1>
      </div>

      <div>
        <span className="text-sm text-purple-200">
          AI Astrology Assistant
        </span>
      </div>
    </nav>
  );
}

export default Navbar;