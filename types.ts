export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum HelmetType {
  FULL_FACE = 'Full Face',
  OPEN_FACE = 'Open Face',
  MODULAR = 'Modular',
  OFF_ROAD = 'Off-Road',
}