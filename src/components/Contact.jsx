export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Contact Me</h2>

      <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
        I am open to backend development roles, freelance projects, and collaborations.
        Feel free to reach out to me via email, phone, or simply fill out the form below.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-4xl mx-auto">

        {/* Contact Info & Socials */}
        <div className="flex flex-col space-y-6 text-lg text-left w-full md:w-1/2">
          <h3 className="text-xl font-semibold text-white mb-2">Get in Touch</h3>

          {/* Email */}
          <p>
            📧{" "}
            <a
              href="mailto:kadimanegloriah@gmail.com"
              className="text-blue-500 hover:underline"
            >
              kadimanegloriah@gmail.com
            </a>
          </p>

          {/* Phone */}
          <p>
            📱{" "}
            <a
              href="tel:+254757902786"
              className="text-blue-500 hover:underline"
            >
              +254 757 902 786
            </a>
          </p>

          {/* Social Links - using text for now since icons need npm install */}
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/kadimane" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition">
              GitHub
            </a>
            <a href="https://twitter.com/kadimane" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition">
              Twitter
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}