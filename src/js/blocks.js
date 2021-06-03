/**
 * Multicamera Block Animation
 */

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { log } from './utils';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function animateBlocks(options) {
  const sections = gsap.utils.toArray('.tfp-block');
  let currentSection = sections[0];

  gsap.defaults({ overwrite: 'auto', duration: 0.3 });

  // stretch out the body height according to however many sections there are.
  gsap.set('body', { height: sections.length * 200 + '%' });

  // create a ScrollTrigger for each section
  sections.forEach((section, i) => {
    let startInt = (i - 0.5) * (innerHeight * 2);
    let endInt = (i + 0.5) * (innerHeight * 2);

    ScrollTrigger.create({
      // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
      start: startInt,
      end: endInt,
      scrub: true,
      // when a new section activates (from either direction), set the section accordingly.
      onToggle: (self) => self.isActive && setSection(section),
      onEnter: () => {
        if (typeof options[section.id] === 'function') {
          options[section.id](startInt, endInt);
        }
      },
    });
  });

  function setSection(newSection) {
    if (newSection !== currentSection) {
      gsap.to(currentSection, { autoAlpha: 0, duration: 2 });
      gsap.to(newSection, { autoAlpha: 1, duration: 2 });
      currentSection = newSection;
    }
  }

  // handles the infinite part, wrapping around at either end....
  // ScrollTrigger.create({
  //   start: 1,
  //   end: () => ScrollTrigger.maxScroll(window) - 1,
  //   onLeaveBack: (self) => self.scroll(ScrollTrigger.maxScroll(window) - 2),
  //   onLeave: (self) => self.scroll(2),
  // }).scroll(2);
}

export { animateBlocks };
