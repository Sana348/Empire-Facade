function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Empire Facade specializes in aluminum fabrication, providing high-quality designs and installations for residential and commercial properties. We pride ourselves on innovation and craftsmanship.
          </p>
        </div>
        
        {/* Adding a border to visually separate sections */}
        <div className="sm:border-l sm:border-gray-700 sm:pl-6">
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        {/* Adding padding or margin to increase spacing */}
        <div className="sm:border-l sm:border-gray-700 sm:pl-6">
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>B Block, Nehru Vihar</p>
          <p>Delhi 110094, India</p>
          <p>Email: empirefacade07@gmail.com</p>
          <p>Phone: +91 99909 33786</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">© 2024 Empire Facade. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
