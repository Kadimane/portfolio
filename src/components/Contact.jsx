// src/components/Contact.jsx

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Contact Me</h2>

      <p className="text-gray-300 mb-8 text-lg">
        I am open to backend development roles, freelance projects, and collaborations.
        Feel free to reach out to me via email or phone.
      </p>

      <div className="space-y-4 text-lg">
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
      </div>
    </section>
  );
}