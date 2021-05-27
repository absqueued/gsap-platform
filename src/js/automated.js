/**
 * automatedcamera Block Animation
 */

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import { log } from './utils';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function automatedBlock() {
  const automated = document.querySelector('.automated');
  const automatedTitle = automated.querySelector('h2');
  const automatedTitleBy = automated.querySelector('p');

  const automatedTL = gsap.timeline({
    delay: 0.2,
    scrollTrigger: {
      trigger: automated,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
      pinSpacing: false,
    },
  });

  automatedTL.from(automatedTitle, { opacity: 0, y: -20 }).from(automatedTitleBy, { opacity: 0, y: -18 }, '<');
}

export { automatedBlock };
