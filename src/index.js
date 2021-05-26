/**
 * Index
 */

import './styles.scss';

const log = (...m) => console.log(...m);
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

log('Index Module', 'b');

function initPlatform() {
  log('initPlatform ... ');
  gsap.registerPlugin(ScrollTrigger);
}

if (gsap) {
  initPlatform();
}
