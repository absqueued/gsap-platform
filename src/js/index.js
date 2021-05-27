/**
 * Index
 */

// import '../styles.scss';
import '../fixed.scss';

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

// Blocks
import { airtimeBlock } from './airtime';
import { multiCameraBlock } from './multicamera';
import { automatedBlock } from './automated';
import { sharingBlock } from './sharing';
// import { canvasFrames } from './canvas';
import { animateBlocks } from './blocks';

function initPlatform() {
  animateBlocks({
    airtime: airtimeBlock,
    multicamera: multiCameraBlock,
    automated: automatedBlock,
    socialsharing: sharingBlock,
  });
  // canvasFrames();
}

if (gsap) {
  initPlatform();
}
