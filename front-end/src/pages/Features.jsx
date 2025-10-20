function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Powerful Features for Modern Education
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools designed to streamline attendance management,
            enhance student engagement, and provide valuable insights for educational institutions.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-qrcode text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">QR Code Attendance</h3>
              <p className="text-gray-600 leading-relaxed">
                Instant attendance marking with secure QR codes. Students simply scan to mark their presence,
                eliminating manual processes and reducing errors.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-time Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive dashboards with live attendance statistics, trends analysis,
                and predictive insights to help educators make informed decisions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-mobile-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mobile Optimized</h3>
              <p className="text-gray-600 leading-relaxed">
                Fully responsive design that works seamlessly across all devices.
                Access attendance data anytime, anywhere with our mobile-friendly interface.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade security with encrypted data storage and secure authentication.
                Your educational data is protected with the highest standards.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-file-pdf text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Advanced Reporting</h3>
              <p className="text-gray-600 leading-relaxed">
                Generate detailed reports with customizable filters, export options in multiple formats,
                and automated report scheduling for administrative efficiency.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-bell text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Smart Notifications</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent notification system that alerts students and professors about attendance status,
                upcoming classes, and important academic updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;