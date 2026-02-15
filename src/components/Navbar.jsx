import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-950/90 backdrop-blur-md z-50 px-8 py-4 flex justify-between items-center">
      
      {/* Logo / Name */}
      <h1 className="font-bold text-xl text-blue-400">
        Kadimane Portfolio
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-white">
        <a href="#home" className="hover:text-blue-500 transition">
          Home
        </a>
        <a href="#about" className="hover:text-blue-500 transition">
          About
        </a>
        <a href="#projects" className="hover:text-blue-500 transition">
          Projects
        </a>
        <a href="#skills" className="hover:text-blue-500 transition">
          Skills
        </a>
        <a href="#contact" className="hover:text-blue-500 transition">
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-950 flex flex-col items-center py-4 md:hidden space-y-4 text-white">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">
            Home
          </a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">
            Projects
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">
            Skills
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
