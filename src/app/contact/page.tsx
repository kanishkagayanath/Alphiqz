export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 drop-shadow-lg">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Have questions? Want to collaborate? We'd love to hear from you!
          </p>
        </div>
        
        {/* Contact form */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-2xl shadow-cyan-400/10 border border-cyan-400/20 p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600/40 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-300 placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600/40 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-300 placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600/40 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors duration-300 placeholder-gray-400"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105 border border-cyan-400/30"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Contact info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 shadow-2xl shadow-cyan-400/10">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-3 text-cyan-300">Email</h3>
            <p className="text-gray-300 text-lg">alphiqz@gmail.com</p>
            <a 
              href="mailto:alphiqz@gmail.com" 
              className="inline-block mt-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-2xl hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105 border border-cyan-400/30"
            >
              Send Email
            </a>
          </div>

          <div className="text-center bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/20 shadow-2xl shadow-teal-400/10">
            <div className="text-4xl mb-4">
              <svg className="w-12 h-12 mx-auto text-pink-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-teal-300">Instagram</h3>
            <p className="text-gray-300 text-lg">@alphiqz</p>
            <a 
              href="https://www.instagram.com/alphiqz?igsh=MXZiN3JmNzZvaTlidQ==" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-2xl hover:shadow-pink-400/25 transition-all duration-300 transform hover:scale-105 border border-pink-400/30"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
