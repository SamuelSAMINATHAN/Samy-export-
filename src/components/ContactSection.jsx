import React, { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="relative bg-white pt-56 pb-20">
      {/* Titre géant en fond */}
      <h1 className="absolute left-1/2 top-10 -translate-x-1/2 text-[7vw] font-extrabold text-gray-100 select-none pointer-events-none z-0 uppercase tracking-widest">
        Contact
      </h1>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Cartes coordonnées */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
          <div className="flex-1 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <span className="text-orange-500 text-3xl mb-2">
              <i className="fas fa-phone-alt"></i>
            </span>
            <h3 className="font-bold text-lg mb-1">Phone number</h3>
            <p className="text-gray-700">+91 7200610599</p>
          </div>
          <div className="flex-1 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <span className="text-orange-500 text-3xl mb-2">
              <i className="fas fa-envelope"></i>
            </span>
            <h3 className="font-bold text-lg mb-1">Email address</h3>
            <p className="text-gray-700">samyexport28@gmail.com</p>
          </div>
          <div className="flex-1 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <span className="text-orange-500 text-3xl mb-2">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <h3 className="font-bold text-lg mb-1">Address info</h3>
            <p className="text-gray-700">
              142, Alexander Main Road, Sembalur Pattukkottai
            </p>
          </div>
        </div>
        {/* Formulaire + Carte */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-full min-h-[500px]">
            <iframe
              title="Samy Exports Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.050477337635!2d79.317!3d10.437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTAuNDM3LCDcJzEyJzE3LjMiTiA3OcKwMTknMDEuMiJF!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[500px]"
            ></iframe>
          </div>
          {/* Formulaire */}
          <form className="bg-white rounded-xl shadow-lg p-8 space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Drop us a message</h2>
            <input
              type="text"
              name="name"
              placeholder="Please Enter Your Name *"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-orange-500 bg-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="Please Enter Your Email ID *"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-orange-500 bg-transparent"
            />
            <input
              type="text"
              name="phone"
              placeholder="Please Enter Your Phone Number *"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-orange-500 bg-transparent"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-orange-500 bg-transparent"
              rows={4}
            />
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-md font-bold text-lg mt-4 hover:bg-orange-500 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
