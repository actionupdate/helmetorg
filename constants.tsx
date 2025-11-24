import React from 'react';
import { ServiceItem, Testimonial } from './types';
import { ShieldCheck, Sparkles, Wind, Zap } from 'lucide-react';

export const SERVICES: ServiceItem[] = [
  {
    id: 'deep-clean',
    title: 'Deep Interior Clean',
    description: 'Complete removal of liner for steam cleaning, sanitization, and odor elimination.',
    price: '$45',
    icon: <Sparkles className="w-6 h-6 text-blue-500" />,
  },
  {
    id: 'exterior-polish',
    title: 'Exterior Polish & Protect',
    description: 'Scratch reduction, UV protection coating, and high-gloss or matte finish care.',
    price: '$30',
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
  },
  {
    id: 'ozone-treatment',
    title: 'Ozone Sanitization',
    description: 'Advanced bacteria and mold killing treatment using medical-grade ozone generators.',
    price: '$25',
    icon: <Wind className="w-6 h-6 text-teal-500" />,
  },
  {
    id: 'visor-restore',
    title: 'Visor Restoration',
    description: 'Anti-fog treatment and hydrophobic coating for crystal clear vision in rain.',
    price: '$20',
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'Daily Commuter',
    text: "I didn't realize how bad my helmet smelled until I got it back. It's like brand new!",
    avatar: 'https://picsum.photos/100/100?random=1',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Track Rider',
    text: 'The anti-fog treatment on my visor is a game changer for early morning rides. Highly recommend.',
    avatar: 'https://picsum.photos/100/100?random=2',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'Touring Enthusiast',
    text: 'Fast service, great price. The interior feels softer and fresher. Will be back after my next tour.',
    avatar: 'https://picsum.photos/100/100?random=3',
  },
];
