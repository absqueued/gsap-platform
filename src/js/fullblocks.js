/**
 * Multicamera Block Animation
 */

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { log } from './utils';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function fullBlocks() {
  gsap.utils.toArray('.block-all').forEach((block, i) => {
    //   gsap.utils.toArray('.tfp-block-full').forEach((block, i) => {
    const blockTL = gsap.timeline({
      transformOrigin: '0 0',
      defaults: { opacity: 0, delay: 0, duration: 2 },
    });

    const blockText = block.querySelector('article');

    let transforms = {
      scale: 1,
      duration: 2,
      y: -30,
    };

    if (i % 2 === 0) {
      transforms.scale = 0.99;
      transforms.y = 60;
    }

    blockTL
      .from(block, { opacity: 0 })
      .from(blockText, { ...transforms }, '<')
      .from(block, { opacity: 1 }, 1);

    ScrollTrigger.create({
      animation: blockTL,
      trigger: block,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
      pinSpacing: false,
      toggleActions: 'play reverse play reverse',
    });
  });
}

export { fullBlocks };
