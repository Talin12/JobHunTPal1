const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 sm:px-12">

      {/* Hero Section */}
      <div className="text-center mb-16 pt-20">
        <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 drop-shadow-xl">
          Welcome to JobHuntPal
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 text-gray-300 leading-relaxed">
          Effortlessly track your job applications and never miss an opportunity! Streamline your job search with ease.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/dashboard"
            className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-xl shadow-xl hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Go to Dashboard
          </a>
          <a
            href="/add-job"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-xl shadow-xl hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Add New Job
          </a>
        </div>
      </div>

      {/* Feature Highlights Section */}
      <div className="flex flex-col items-center text-center px-6 mb-16">
        <h2 className="text-3xl font-semibold text-gray-200 mb-8">Why JobHuntPal?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-teal-400 mb-4">Track Applications</h3>
            <p className="text-gray-300">
              Easily keep track of all your job applications in one place. Stay organized and up to date.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-teal-400 mb-4">Set Reminders</h3>
            <p className="text-gray-300">
              Get notified about important deadlines and follow-up tasks for your job applications.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-teal-400 mb-4">Easy Application Updates</h3>
            <p className="text-gray-300">
              Update your job application status effortlessly and track your progress at every step.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-800 py-16 px-6 sm:px-12 rounded-xl shadow-xl mb-16 text-center">
        <h2 className="text-3xl font-semibold text-white mb-6">Ready to get started?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Sign up now and take control of your job search journey. Stay organized and never miss an opportunity!
        </p>
        <a
          href="/signup"
          className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-xl shadow-xl hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 ease-in-out"
        >
          Join Now
        </a>
      </div>

      {/* Footer Section */}
      <footer className="text-center py-8 bg-gray-800 text-gray-400 w-full">
        <p>&copy; 2025 JobHuntPal. All rights reserved.</p>
        <div className="mt-4">
          <a href="/privacy" className="hover:text-white mx-4">Privacy Policy</a>
          <a href="/terms" className="hover:text-white mx-4">Terms & Conditions</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
