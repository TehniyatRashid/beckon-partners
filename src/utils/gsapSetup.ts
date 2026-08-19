import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin once globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // Set default animation easing for refined, high-end editorial feel
  gsap.defaults({
    ease: 'power2.out',
    duration: 0.9,
  });
}

export { gsap, ScrollTrigger };
