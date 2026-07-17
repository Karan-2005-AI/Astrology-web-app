import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-purple-400 font-semibold"
      : "text-gray-300 hover:text-purple-400 transition";

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <Sparkles className="text-purple-400" size={30} />

          <span className="text-3xl font-bold text-white">
            AstroAI
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-lg">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/kundli" className={navClass}>
            Kundli
          </NavLink>

          <NavLink to="/horoscope" className={navClass}>
            Horoscope
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-slate-950 border-t border-white/10">

          <NavLink
            to="/"
            className="block px-6 py-4 hover:bg-purple-600/20"
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/kundli"
            className="block px-6 py-4 hover:bg-purple-600/20"
            onClick={closeMenu}
          >
            Kundli
          </NavLink>

          <NavLink
            to="/horoscope"
            className="block px-6 py-4 hover:bg-purple-600/20"
            onClick={closeMenu}
          >
            Horoscope
          </NavLink>

          <NavLink
            to="/about"
            className="block px-6 py-4 hover:bg-purple-600/20"
            onClick={closeMenu}
          >
            About
          </NavLink>

        </nav>
      )}

    </header>
  );
}

export default Navbar;