import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate(); 

  return (
    <div className="relative w-screen h-screen bg-black flex flex-col items-center justify-center overflow-hidden font-sans">
      
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-900/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/20 to-transparent blur-3xl"></div>
        
        <svg className="absolute top-0 w-full h-full" viewBox="0 0 1440 800" fill="none">
          <path d="M0 100 Q 360 250 720 100 T 1440 100" stroke="url(#grad1)" strokeWidth="2" opacity="0.5" />
          <path d="M0 700 Q 360 550 720 700 T 1440 700" stroke="url(#grad2)" strokeWidth="2" opacity="0.5" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Vector
          </span>
          Shift.
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10 tracking-wide">
          Build AI Pipelines. Scalable Workflows.
        </p>

        <button
          onClick={() => navigate('/workspace')} 
          className="group relative px-8 py-3 bg-purple-600 text-white font-bold rounded-full transition-all duration-300 hover:bg-purple-500 hover:scale-105 
          hover:shadow-[0_0_45px_rgba(168,85,247,0.6)] active:scale-95"
        >
          Get start
          <div className="absolute -inset-1 bg-purple-500 rounded-full blur opacity-15 group-hover:opacity-15 transition duration-300"></div>
        </button>
      </div>

      <div className="absolute bottom-10 text-slate-500 text-xs uppercase tracking-[0.3em]">
        Frontend Technical Assessment
      </div>
    </div>
  );
};

export default LandingPage;