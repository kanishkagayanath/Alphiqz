export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Alphiq Design
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're passionate about creating beautiful, high-quality design assets for creators worldwide.
          </p>
        </div>
        
        {/* Mission section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">To democratize design by providing free, high-quality assets for everyone.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">A world where creativity knows no bounds and great design is accessible to all.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">Quality, creativity, community, and the belief that design can change the world.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
