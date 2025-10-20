function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Comprehensive Services for Educational Excellence
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            From attendance tracking to advanced analytics, our suite of services is designed to
            support every aspect of modern educational management and student success.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-user-graduate text-3xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Student Management</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Complete student profile management with attendance tracking, performance analytics,
                    and personalized dashboards for each student.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-sm"></i>
                      Profile management and updates
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-sm"></i>
                      Attendance history and trends
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-sm"></i>
                      Performance analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-chalkboard-teacher text-3xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Professor Tools</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Powerful tools for educators to manage classes, generate QR codes for attendance,
                    and monitor student engagement effectively.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-sm"></i>
                      QR code generation for classes
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-sm"></i>
                      Real-time attendance monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-sm"></i>
                      Class performance insights
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-cogs text-3xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Administrative Solutions</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Comprehensive administrative tools for managing courses, generating reports,
                    and overseeing institutional operations with ease.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-sm"></i>
                      Course and curriculum management
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-sm"></i>
                      Advanced reporting and analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-sm"></i>
                      User role management
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-cloud text-3xl text-white"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Cloud Integration</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Seamless cloud-based platform with automatic backups, real-time synchronization,
                    and secure data storage across all your devices.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-sm"></i>
                      Automatic data backup and sync
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-sm"></i>
                      Cross-device accessibility
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500 text-sm"></i>
                      99.9% uptime guarantee
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;