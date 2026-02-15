// src/components/Hero.jsx

import profile from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 pt-24 bg-gray-950"
    >
      {/* Profile Image */}
      <img
        src={profile}
        alt="Kadimane Gloriah"
        className="w-64 h-64 rounded-full object-cover border-4 border-blue-600 shadow-lg"
      />

      {/* Text Section */}
      <div className="text-center md:text-left max-w-xl">
        <p className="text-blue-400 text-lg mb-2">
          Hello, I'm Kadimane 👋
        </p>

        <h1 className="text-5xl font-bold mb-4 text-white">
          Kadimane Gloriah
        </h1>

        <p className="text-xl text-gray-400 mb-6">
          Backend Engineer | API Developer | LMS & Data Specialist
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="border border-blue-600 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
