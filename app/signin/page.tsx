'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
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
              Access Portal
            </h2>
          </div>
          <form className="space-y-6" onSubmit={handleEmailSignIn}>
            {error && (
              <div className="text-red-400 text-center text-sm bg-red-900/20 p-2 rounded-lg">
                {error}
              </div>
            )}
            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-blue-300/20 rounded-lg text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Neural ID (Email)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-blue-300/20 rounded-lg text-blue-100 placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Access Key"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="cyber-button w-full rounded-lg"
              >
                Initialize Session
              </button>
            </div>
          </form>

          <div>
            <button
              onClick={handleGoogleSignIn}
              className="w-full glassmorphism py-3 px-4 rounded-lg text-blue-100 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Image src="/google.svg" width={20} height={20} alt="Google" />
              Connect with Google
            </button>
          </div>

          <div className="text-center">
            <Link href="/signup" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              New user? Create neural profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 