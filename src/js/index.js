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
// import { airtimeBlock } from './airtime';
// import { multiCameraBlock } from './multicamera';
// import { fullBlocks } from './fullblocks';
import { fixedBlocks } from './fixedBlocks';

function initPlatform() {
  // airtimeBlock();
  // multiCameraBlock();
  // fullBlocks();
  fixedBlocks();
}

if (gsap) {
  initPlatform();
}
