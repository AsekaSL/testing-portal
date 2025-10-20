import logo from "../assets/logo.jpg";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="EduPortal Logo"
                className="h-10 w-10 rounded-full border-2 border-purple-300 object-cover mr-3"
              />
              <h3 className="text-xl font-bold text-white">EduPortal</h3>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed mb-4">
              Streamlining education with smart attendance management and innovative technology solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center hover:bg-purple-600 transition-colors duration-200 hover:scale-110 transform"
                title="Follow on Facebook"
              >
                <i className="fab fa-facebook-f text-sm text-purple-200 hover:text-white"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center hover:bg-purple-600 transition-colors duration-200 hover:scale-110 transform"
                title="Follow on Twitter"
              >
                <i className="fab fa-twitter text-sm text-purple-200 hover:text-white"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center hover:bg-purple-600 transition-colors duration-200 hover:scale-110 transform"
                title="Connect on LinkedIn"
              >
                <i className="fab fa-linkedin-in text-sm text-purple-200 hover:text-white"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center hover:bg-purple-600 transition-colors duration-200 hover:scale-110 transform"
                title="View on GitHub"
              >
                <i className="fab fa-github text-sm text-purple-200 hover:text-white"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="text-purple-200 hover:text-white transition-colors duration-200 text-sm block flex items-center gap-2">
                <i className="fas fa-home w-4 h-4"></i> Home
              </a>
              <a href="/features" className="text-purple-200 hover:text-white transition-colors duration-200 text-sm block flex items-center gap-2">
                <i className="fas fa-bolt w-4 h-4"></i> Features
              </a>
              <a href="/services" className="text-purple-200 hover:text-white transition-colors duration-200 text-sm block flex items-center gap-2">
                <i className="fas fa-tools w-4 h-4"></i> Services
              </a>
              <a href="/about" className="text-purple-200 hover:text-white transition-colors duration-200 text-sm block flex items-center gap-2">
                <i className="fas fa-info-circle w-4 h-4"></i> About
              </a>
              <a href="/contact" className="text-purple-200 hover:text-white transition-colors duration-200 text-sm block flex items-center gap-2">
                <i className="fas fa-envelope w-4 h-4"></i> Contact
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
            <p className="text-purple-200 text-sm mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest updates and educational insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-purple-800/50 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg text-white font-medium transition-all duration-200 hover:scale-105 text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-purple-300 text-xs mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-700 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-purple-300 text-sm text-center sm:text-left">
              © 2025 EduPortal. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-purple-300 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors duration-200 text-sm">Terms of Service</a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors duration-200 text-sm">Help Center</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
