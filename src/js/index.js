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

function initPlatform() {
  airtimeBlock();
}

if (gsap) {
  initPlatform();
}
