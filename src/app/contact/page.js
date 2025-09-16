"use client";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-6">
            Have questions or want to work with us? Reach out directly or fill out the form and we’ll get back to you shortly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600 w-6 h-6" />
              <span className="text-gray-800 text-lg font-medium">+1 (416) 555-1234</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <span className="text-gray-800 text-lg font-medium">info@consultantpropertyservices.ca</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
