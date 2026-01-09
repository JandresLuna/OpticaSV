
// Fix: Import React to provide access to the React namespace for types like ReactNode
import React from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
  imageUrl?: string;
  isGeneratingImage?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  color: string;
}
