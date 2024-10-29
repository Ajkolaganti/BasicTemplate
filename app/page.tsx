import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-purple-900 animate-gradient">
      <div className="container mx-auto px-4 py-16">
        <main className="flex flex-col items-center text-center gap-12">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse">
            Voice Transcription AI
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Transform your voice into text with cutting-edge AI technology. 
            Experience the future of transcription.
          </p>
          
          <div className="flex gap-6 mt-8">
            <Link
              href="/signup"
              className="cyber-button rounded-lg"
            >
              Launch App
            </Link>
            <Link
              href="/signin"
              className="px-6 py-3 glassmorphism rounded-lg text-blue-100 hover:bg-white/20 transition-all"
            >
              Access Portal
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Real-time AI', 'Multi-Language', 'Smart Export'].map((feature, i) => (
              <div key={i} className="glassmorphism p-8 rounded-2xl transform hover:scale-105 transition-all">
                <div className="w-12 h-12 mb-4 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">{'🤖 🌍 💫'[i]}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-100">{feature}</h3>
                <p className="text-blue-200">
                  {[
                    'Neural processing in real-time with quantum accuracy',
                    'Universal language support with AI enhancement',
                    'Export to any format with smart formatting'
                  ][i]}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
