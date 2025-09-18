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
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-300"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Contact info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-2">📧</div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-gray-600">hello@alphiqz.design</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-2">💬</div>
            <h3 className="font-semibold mb-1">Chat</h3>
            <p className="text-gray-600">Live support available</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-2">🌐</div>
            <h3 className="font-semibold mb-1">Social</h3>
            <p className="text-gray-600">Follow us on social media</p>
          </div>
        </div>
      </div>
    </main>
  );
}
