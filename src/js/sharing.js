/**
 * sharingcamera Block Animation
 */

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import { log } from './utils';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function sharingBlock() {
  const sharing = document.querySelector('.socialsharing');
  const sharingTitle = sharing.querySelector('h2');
  const sharingTitleBy = sharing.querySelector('p');

  const sharingTL = gsap.timeline({
    delay: 0.2,
    scrollTrigger: {
      trigger: sharing,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
      pinSpacing: false,
    },
  });

  sharingTL.from(sharingTitle, { opacity: 0, y: 20 }, '<').from(sharingTitleBy, { opacity: 0, y: 18 }, '<');
}

export { sharingBlock };
