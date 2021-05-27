/**
 * Index
 */

import '../styles.scss';

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

// Blocks
import { airtimeBlock } from './airtime';
import { multiCameraBlock } from './multicamera';
import { fullBlocks } from './fullblocks';

function initPlatform() {
  airtimeBlock();
  // multiCameraBlock();
  fullBlocks();
}

if (gsap) {
  initPlatform();
}
