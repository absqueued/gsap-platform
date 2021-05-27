/**
 * Canvas For Video Frames
 */

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { log } from './utils';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function canvasFrames() {
  const canvas = document.getElementById('boxerFrames');
  const context = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const frameCount = 288;
  const currentFrame = (index) => `frames/Vid_1/Vid1_${(index + 1).toString()}.png`;

  const images = [];
  const frames = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }

  gsap.to(frames, {
    frame: frameCount - 1,
    snap: 'frame',
    scrollTrigger: {
      scrub: 0.5,
    },
    onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
  });

  images[0].onload = render;

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[frames.frame], 0, 0);
  }
}

export { canvasFrames };
