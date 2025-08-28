export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Premium Design Assets
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Free for Everyone
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
              Discover thousands of high-quality illustrations, icons, and design assets. 
              Download for free and bring your creative projects to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Browse Assets
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-50 animate-bounce-gentle"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Explore Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Illustrations', count: '500+', color: 'from-pink-400 to-purple-500' },
              { name: 'Icons', count: '1000+', color: 'from-blue-400 to-indigo-500' },
              { name: 'Patterns', count: '200+', color: 'from-green-400 to-teal-500' },
            ].map((category, index) => (
              <div key={category.name} className="group cursor-pointer">
                <div className={`h-48 bg-gradient-to-br ${category.color} rounded-xl p-6 text-white transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-lg opacity-90">{category.count} assets</p>
                  <div className="mt-4 inline-block bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                    <span className="text-sm font-semibold">Explore →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Assets?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'High Quality', desc: 'Professional-grade designs created by expert illustrators' },
              { title: 'Free Download', desc: 'All assets are completely free for personal and commercial use' },
              { title: 'Regular Updates', desc: 'New designs added weekly to keep your projects fresh' },
            ].map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
