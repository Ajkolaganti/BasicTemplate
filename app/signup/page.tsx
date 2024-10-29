'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-900 to-purple-900 animate-gradient py-12 px-4">
      <div className="max-w-md w-full">
        <div className="glassmorphism rounded-2xl p-8 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Create Neural Profile
            </h2>
            <p className="mt-2 text-center text-blue-200 text-sm">
              Initialize your journey into the future
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={handleEmailSignUp}>
            {error && (
              <div className="text-red-400 text-center text-sm bg-red-900/20 p-2 rounded-lg">
                {error}
              </div>
            )}
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-blue-300/20 rounded-lg text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Neural ID (Email)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="absolute right-3 top-3 w-6 h-6 text-blue-300/50">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-blue-300/20 rounded-lg text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Access Key"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="absolute right-3 top-3 w-6 h-6 text-blue-300/50">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="cyber-button w-full rounded-lg group"
              >
                Initialize Profile
              </button>
            </div>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-blue-300/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-blue-200">Or connect with</span>
            </div>
          </div>

          <div>
            <button
              onClick={handleGoogleSignUp}
              className="w-full glassmorphism py-3 px-4 rounded-lg text-blue-100 hover:bg-white/20 transition-all flex items-center justify-center gap-2 group"
            >
              <Image src="/google.svg" width={20} height={20} alt="Google" 
                className="group-hover:scale-110 transition-transform" />
              <span>Google Neural Network</span>
            </button>
          </div>

          <div className="text-center">
            <Link 
              href="/signin" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
              Return to Access Portal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 