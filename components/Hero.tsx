import React from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-100 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Rated #1 Helmet Care Service</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Ride Fresh. <br />
              <span className="text-indigo-600">Ride Safe.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Your helmet protects your head. Who protects your helmet? We provide professional deep cleaning, sanitization, and restoration for all helmet types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-3.5 rounded-full bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2">
                Book a Clean
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-3.5 rounded-full bg-white text-gray-700 border border-gray-200 font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center">
                Learn More
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/50/50?random=4" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/50/50?random=5" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/50/50?random=6" alt="User" />
              </div>
              <p>Trusted by 500+ riders this month</p>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Clean Motorcycle Helmet"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Premium Detailing</p>
                <p className="text-sm opacity-90">Restore that new helmet smell</p>
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Hygiene Score</p>
                  <p className="font-bold text-gray-900">100% Sanitized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;