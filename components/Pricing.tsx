import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600">Choose the package that fits your riding habits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="border border-gray-200 rounded-3xl p-8 hover:border-indigo-300 transition-colors relative">
            <h3 className="text-xl font-semibold text-gray-900">Essential Refresh</h3>
            <div className="mt-4 flex items-baseline text-gray-900">
              <span className="text-4xl font-extrabold tracking-tight">$35</span>
              <span className="ml-1 text-xl font-semibold text-gray-500">/visit</span>
            </div>
            <p className="mt-2 text-gray-500">Quick turnaround for daily commuters.</p>
            <ul className="mt-8 space-y-4">
              {['Exterior Steam Clean', 'Odor Neutralizer', 'Visor Wipe', '24h Turnaround'].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="ml-3 text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full block bg-gray-50 border border-gray-200 rounded-xl py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
              Book Essential
            </button>
          </div>

          {/* Popular Plan */}
          <div className="border-2 border-indigo-600 rounded-3xl p-8 shadow-xl relative transform scale-105 bg-white z-10">
            <div className="absolute top-0 right-0 -mt-4 mr-4 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Deep Restoration</h3>
            <div className="mt-4 flex items-baseline text-gray-900">
              <span className="text-5xl font-extrabold tracking-tight">$65</span>
              <span className="ml-1 text-xl font-semibold text-gray-500">/visit</span>
            </div>
            <p className="mt-2 text-gray-500">Full strip-down and sanitization.</p>
            <ul className="mt-8 space-y-4">
              {['Everything in Essential', 'Full Liner Removal & Wash', 'Ozone Sanitization', 'Visor Polishing', 'Matte/Gloss Protection'].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-600 shrink-0" />
                  <span className="ml-3 text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full block bg-indigo-600 border border-transparent rounded-xl py-3 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors shadow-lg">
              Book Restoration
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border border-gray-200 rounded-3xl p-8 hover:border-indigo-300 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900">Race Ready</h3>
            <div className="mt-4 flex items-baseline text-gray-900">
              <span className="text-4xl font-extrabold tracking-tight">$95</span>
              <span className="ml-1 text-xl font-semibold text-gray-500">/visit</span>
            </div>
            <p className="mt-2 text-gray-500">Showroom quality detail.</p>
            <ul className="mt-8 space-y-4">
              {['Everything in Restoration', 'Vent Deep Clean', 'Scratch Removal', 'Ceramic Coating', 'Priority Service'].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="ml-3 text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full block bg-gray-50 border border-gray-200 rounded-xl py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
              Book Premium
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;