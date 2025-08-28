export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
          Welcome to Alphiq
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Your ultimate destination for premium design assets
        </p>
        <div className="text-center">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
