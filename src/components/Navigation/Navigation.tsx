"use client";
import Link from "next/link";
import { useFormData } from "../../hooks";

export const Navigation = () => {
  const { currentStep, getFormCompletion } = useFormData();

  return (
    <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white font-semibold text-lg hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/info" 
              className="text-white/70 hover:text-white transition-colors"
            >
              Form Demo
            </Link>
            <Link 
              href="/recommendations" 
              className="text-white/70 hover:text-white transition-colors"
            >
              Recommendations
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-white/70">
              Step: {currentStep}/6
            </div>
            <div className="w-20 bg-white/20 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${getFormCompletion()}%` }}
              />
            </div>
            <div className="text-sm text-white/70">
              {getFormCompletion()}%
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
