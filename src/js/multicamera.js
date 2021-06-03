/**
 * Multicamera Block Animation
 */

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import { log } from './utils';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function multiCameraBlock(startInt, endInt) {
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
      end: endInt,
      scrub: true,
      pin: true,
      pinSpacing: false,
    },
  });

  multiTL
    .from(multiImagesLeft, { opacity: 0, x: -50 }, '<')
    .from(multiImagesRight, { opacity: 0, x: 100 }, '<')
    .from(multiImagesTop, { opacity: 0, y: -100 }, '<')
    .from(multiTexts, { opacity: 0, y: 50 });
}

export { multiCameraBlock };
