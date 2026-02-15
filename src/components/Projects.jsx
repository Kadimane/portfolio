// src/components/Projects.jsx

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Rental Radar
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            A rental property discovery and management platform built with a
            scalable backend architecture. Features secure RESTful APIs,
            database optimization, authentication, and structured API
            documentation using Swagger.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Learning Management System
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            A comprehensive LMS platform enabling course creation, student enrollment,
            and progress tracking. Built with Django REST Framework, featuring role-based
            access control, content management, and analytics dashboard.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            E-Commerce API
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            RESTful API for an e-commerce platform with product catalog, shopping cart,
            order processing, and payment integration. Implements JWT authentication,
            inventory management, and real-time order tracking.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Data Analytics Dashboard
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Backend system for processing and visualizing large datasets. Features
            data aggregation pipelines, automated reporting, and API endpoints for
            real-time analytics with PostgreSQL and Redis caching.
          </p>
        </div>
      </div>
    </section>
  );
}
