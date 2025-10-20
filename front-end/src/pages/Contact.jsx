function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Have questions about EduPortal? We're here to help! Reach out to our team for support,
            partnerships, or any inquiries about our attendance management solutions.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors duration-200">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership Opportunities</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <i className="fas fa-envelope text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">support@eduportal.com</p>
                      <p className="text-gray-600">sales@eduportal.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <i className="fas fa-phone text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-EDUP</p>
                      <p className="text-gray-600">Mon-Fri: 9AM - 6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <i className="fas fa-map-marker-alt text-white text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Education Street<br />
                        Tech Valley, CA 94043<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Support</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <i className="fas fa-rocket text-purple-500"></i>
                      How do I get started?
                    </h4>
                    <p className="text-gray-600 text-sm">Contact our support team and we'll help you get started with EduPortal for your institution.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <i className="fas fa-graduation-cap text-purple-500"></i>
                      Do you offer training?
                    </h4>
                    <p className="text-gray-600 text-sm">Yes! We provide comprehensive training sessions and detailed documentation.</p>
                  </div>
                  <div className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <i className="fas fa-clock text-purple-500"></i>
                      What's your response time?
                    </h4>
                    <p className="text-gray-600 text-sm">We typically respond to inquiries within 24 hours during business days.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Visit Us at University of Sri Jayewardenapura</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Colombo's premier government university
            </p>
          </div>

          {/* University Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-200">
            <a
              href="https://www.google.com/maps/place/University+of+Sri+Jayewardenepura/@6.8528,79.9036,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae25a2a2a35a0b1:0x5b5e5b5e5b5e5b5e!8m2!3d6.8528!4d79.9036!16s%2Fg%2F11b6q3q3q3"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="University of Sri Jayewardenepura Campus"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">University of Sri Jayewardenepura</h3>
                  <p className="text-lg opacity-90 mb-1">Gangodawila, Nugegoda</p>
                  <p className="text-lg opacity-90">Colombo, Sri Lanka</p>
                  <div className="flex items-center mt-3 text-sm font-medium">
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Open in Google Maps
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <i className="fas fa-map-marked-alt text-xl"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;