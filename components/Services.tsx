import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">Our Expertise</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Helmet Care</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            From the outer shell to the inner lining, we rejuvenate every inch of your gear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-gray-500 text-sm font-medium">Starting from</span>
                <span className="text-lg font-bold text-indigo-600">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;