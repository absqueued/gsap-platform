/**
 * Multicamera Block Animation
 */

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import { log } from './utils';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function multiCameraBlock() {
  const multi = document.querySelector('.multicamera');
  const multiImagesLeft = multi.querySelector('.i-left');
  const multiImagesTop = multi.querySelector('.i-top');
  const multiImagesRight = multi.querySelector('.i-right');
  const multiTexts = multi.querySelector('article');

  const multiTL = gsap.timeline({
    delay: 0.1,
    scrollTrigger: {
      trigger: multi,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
      pinSpacing: false,
    },
  });

  multiTL
    .from(multiImagesLeft, { opacity: 0, scale: 0.7, x: 30 }, '<')
    .from(multiImagesRight, { opacity: 0, scale: 0.7, x: -40 }, '<')
    .from(multiImagesTop, { opacity: 0, scale: 0.7, y: 50 }, '<')
    .from(multiTexts, { opacity: 0, y: 50 });
}

export { multiCameraBlock };
