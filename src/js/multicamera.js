/**
 * Multicamera Block Animation
 */

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { log } from './utils';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function multiCameraBlock() {
  log('Multicamera');
  const multi = document.querySelector('.multicamera');
  const multiImages = multi.querySelector('.multicamera-media');
  const multiTexts = multi.querySelector('article');

  log(multiImages);

  const multiTL = gsap.timeline({
    // transformOrigin: '50% 50%',
    scrollTrigger: {
      trigger: multi,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
      pinSpacing: false,
      markers: true,
      id: 'multicamera',
      toggleActions: 'play reverse play reverse',
    },
  });

  multiTL
    // .from(multiImages, { opacity:0, duration: 1 })
    .from(multi, { opacity: 0 })
    .from(multiTexts, { y: -20, duration: 1 }, '<')
    .from(multi, { opacity: 1 }, 1);
}

export { multiCameraBlock };
