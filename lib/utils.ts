import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const data = [
  { id: 4, link: '/', title: 'Home' },
  {
    id: 1,
    link: '/allrecipes',
    title: 'Recipes',
  },
  {
    id: 2,
    link: '/about',
    title: 'About',
  },
  { id: 3, link: '/contact', title: 'Contact' },
];
