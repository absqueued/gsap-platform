/**
 * Index
 */

import './styles.scss';

const log = (...m) => console.log(...m);
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function initPlatform() {
  function initAirtime() {
    const airtime = document.querySelector('#airtime');
    const airtimeImg = airtime.querySelector('img');
    const airtimeTitle = airtime.querySelector('h1');
    const airtimeTitleBy = airtime.querySelector('.title-by');
    const airtimeFooter = airtime.querySelector('footer p');

    const airtimeTL = gsap.timeline({
      delay: 0.1,
      onComplete: () => {
        makeTL2();
      },
    });

    airtimeTL
      .from(airtimeImg, { opacity: 0, y: 2, duration: 2, ease: 'power4.in' })
      .from(airtimeTitle, { opacity: 0, duration: 2, ease: 'power2.in' }, '-=1')
      .from(airtimeTitleBy, { opacity: 0, duration: 2, y: -10 }, '-=1')
      .from(airtimeFooter, { opacity: 0, duration: 1, y: -10 }, '-=1');

    function makeTL2() {
      const tl2 = gsap.timeline({
        paused: true,
        transformOrigin: '25% 25%',
        scrollTrigger: {
          trigger: airtime,
          start: 'top top',
          end: 'bottom center',
          scrub: 2,
          pin: true,
          pinSpacing: false,
          // markers: true,
        },
      });

      tl2
        .fromTo(airtimeImg, { opacity: 1, x: 0 }, { opacity: 0, x: 30 })
        .fromTo(airtimeTitle, { opacity: 1, y: 0 }, { opacity: 0, y: -20 }, '<')
        .fromTo(airtimeTitleBy, { opacity: 1, y: 0 }, { opacity: 0, y: -18 }, '<')
        .fromTo(airtimeFooter, { opacity: 1, y: 0 }, { opacity: 0, y: 15 }, '-=0.5');
    }
  }

  // Airtime
  initAirtime();
}

if (gsap) {
  initPlatform();
}
