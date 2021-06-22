/**
 * Canvas For Video Frames
 */

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { log } from './utils';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function canvasFrames(startInt, endInt) {
  const canvas = document.getElementById('canvasframes');
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
      start: startInt,
      end: endInt,
    },
    // onStart: () => drawContents,
    onUpdate: () => {
      render();
    }, // use animation onUpdate instead of scrollTrigger's onUpdate
  });

  images[0].onload = render;

  function drawImageScaled(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio,
    );
    drawContents(context);
  }

  function drawContents(ctx) {
    ctx.fillStyle = 'white';
    ctx.font = 'bold 96px Nunito Sans, sans-serif';
    ctx.fillText('Video Frames!', 40, 125);
    ctx.font = '22px Andale Mono, serif';
    ctx.fillText(
      'Video frames are loaded as image and tied to scroll tick. Every tick updates the image giving you the control to manimupate.',
      40,
      125,
    );
  }

  function render() {
    drawImageScaled(images[frames.frame], context);
  }
}

export { canvasFrames };
