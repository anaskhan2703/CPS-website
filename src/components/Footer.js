export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Consultant Property Services</h3>
          <p>
            Your trusted partner in property management, real estate, and
            maintenance services across the GTA.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-red-500 transition">About</a></li>
            <li><a href="/services" className="hover:text-red-500 transition">Services</a></li>
            <li><a href="/properties" className="hover:text-red-500 transition">Properties</a></li>
            <li><a href="/contact" className="hover:text-red-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p>📍 Brampton, Ontario</p>
          <p>📞 647-770-9090</p>
          <p>✉️ realtor.nawazish@gmail.com</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Consultant Property Services. All rights reserved.
      </div>
    </footer>
  );
}
