// src/components/Skills.jsx

export default function Skills() {
  // Define all your skill categories
  const skills = [
    {
      category: "Languages",
      items: ["Python", "JavaScript (Node.js, Express.js)"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["Flask", "React", "SQLAlchemy"],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL"],
    },
    {
      category: "Tools",
      items: ["Git", "Swagger", "VS Code"],
    },
    {
      category: "Best Practices",
      items: ["Agile Methodologies", "API Design", "Task Automation", "Security Implementation"],
    },
    {
      category: "LMS & Data",
      items: ["Moodle", "Canvas", "Data Entry"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-950 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Skills</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-blue-500/30 transition"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">{skill.category}</h3>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              {skill.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}