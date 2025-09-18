export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 drop-shadow-lg">
              Alphiqz Design
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Hi! I am an individual designer passionate about helping creators and gamers develop their gaming worlds in the most vibrant and creative way possible.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-2xl shadow-cyan-400/10 border border-cyan-400/20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-300">My Mission</h3>
            <p className="text-gray-300">To empower game creators and developers with stunning visual assets that bring their gaming worlds to life in the most vibrant way.</p>
          </div>
          
          <div className="text-center p-6 bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-2xl shadow-teal-400/10 border border-teal-400/20">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold mb-2 text-teal-300">My Vision</h3>
            <p className="text-gray-300">A gaming universe where every creator has access to brilliant design assets to build immersive and captivating gaming experiences.</p>
          </div>
          
          <div className="text-center p-6 bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-2xl shadow-blue-400/10 border border-blue-400/20">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-300">My Values</h3>
            <p className="text-gray-300">Creativity, gaming passion, community support, and the belief that amazing visuals can transform any gaming world into something extraordinary.</p>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-cyan-600/20 via-teal-600/20 to-blue-700/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-cyan-400/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              My Story
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              As a passionate gamer and designer, I understand the struggles of finding the perfect visual assets to bring gaming ideas to life. 
              That is why I created Alphiqz - to bridge the gap between creative vision and accessible design resources.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Every asset I create is crafted with love for the gaming community. Whether you are an indie developer building your first game, 
              a content creator designing gaming thumbnails, or a gamer looking to customize your setup - I am here to help make your gaming world shine brighter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full text-cyan-300 font-medium shadow-sm border border-cyan-400/20">🎨 Game UI Design</span>
              <span className="bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full text-teal-300 font-medium shadow-sm border border-teal-400/20">🎮 Gaming Assets</span>
              <span className="bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full text-blue-300 font-medium shadow-sm border border-blue-400/20">🌟 Creative Illustrations</span>
              <span className="bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full text-purple-300 font-medium shadow-sm border border-purple-400/20">🚀 Free Downloads</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Level Up Your Gaming World?</h3>
          <p className="text-gray-300 mb-8">Explore my collection of gaming assets and bring your creative vision to life!</p>
          <a 
            href="/designs"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105 border border-cyan-400/30"
          >
            <span>🎮</span>
            <span>Browse Gaming Assets</span>
          </a>
        </div>
      </div>
    </main>
  );
}
