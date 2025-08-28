export default function Designs() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Design Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our collection of premium design assets, illustrations, and creative resources.
          </p>
        </div>
        
        {/* Content coming soon */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-md">
            <span className="text-2xl mr-3">🎨</span>
            <span className="text-gray-600">Design gallery coming soon...</span>
          </div>
        </div>
      </div>
    </main>
  );
}
