function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            About EduPortal
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing education through innovative technology. We're committed to making
            attendance management seamless, efficient, and insightful for modern educational institutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower educational institutions with cutting-edge technology that simplifies attendance management,
                enhances student engagement, and provides actionable insights for academic success.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-eye text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading platform for educational technology, setting new standards for attendance management
                and student success tracking worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-purple-100">Students</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-100">Professors</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-purple-100">Institutions</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-purple-100">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 mb-12">
            Passionate educators and technologists working together to transform education
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-code text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Heshan Sandeepana</h3>
              <p className="text-purple-600 font-medium text-sm mb-3">Team Member</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Dedicated team member contributing to project development.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-laptop-code text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Sanjaya Samudra</h3>
              <p className="text-purple-600 font-medium text-sm mb-3">Team Member</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Focused on technical implementation and development.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-database text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Saranga Samarakoon</h3>
              <p className="text-purple-600 font-medium text-sm mb-3">Team Member</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Handling data management and backend systems.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-mobile-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Praveen Tharuka</h3>
              <p className="text-purple-600 font-medium text-sm mb-3">Team Member</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Working on mobile and responsive design solutions.
              </p>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cogs text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Dulneth Ranaweera</h3>
              <p className="text-purple-600 font-medium text-sm mb-3">Team Member</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Focused on system configuration and optimization.
              </p>
            </div>

            {/* Team Member 6 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-palette text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Ramla Muhajireen</h3>
              <p className="text-purple-600 font-medium text-sm mb-3">Team Member</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Contributing to UI/UX design and user experience.
              </p>
            </div>

            {/* Team Member 7 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-network-wired text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Malith Dilshan</h3>
              <p className="text-purple-600 font-medium text-sm mb-3">Team Member</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Working on network integration and connectivity.
              </p>
            </div>

            {/* Team Member 8 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Sithara Gunasekara</h3>
              <p className="text-purple-600 font-medium text-sm mb-3">Team Member</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Analyzing data and creating insightful reports.
              </p>
            </div>

            {/* Team Member 9 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-search text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Nimesha Ranasinghe</h3>
              <p className="text-purple-600 font-medium text-sm mb-3">Team Member</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Research and quality assurance specialist.
              </p>
            </div>

            {/* Team Member 10 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-tools text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Rasindu Dissanayake</h3>
              <p className="text-purple-600 font-medium text-sm mb-3">Team Member</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Technical support and maintenance specialist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Constantly pushing boundaries to create better educational experiences.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Security</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Protecting student data with enterprise-grade security measures.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Collaboration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Working together with educators to build better learning environments.
              </p>
            </div>

            {/* Value 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Committed to delivering the highest quality educational technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;