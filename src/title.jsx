"use client";

import React, { useRef, useEffect } from "react";
import imgSrc from "/image.png"; // put image.png in /public folder

export default function Title() {
  const sketchRef = useRef(null);

  useEffect(() => {
    let myP5 = null;

    import("p5").then((p5Module) => {
      const p5 = p5Module.default;

      const sketch = (P) => {
        let img;
        let originalImg;
        let vs = 10;
        let ts = 12;
        const Cset = "#";

        P.setup = () => {
          // Use clientWidth/clientHeight for accurate sizing
          const w = sketchRef.current.clientWidth;
          const h = sketchRef.current.clientHeight;

          // Dynamically adjust vs and ts based on canvas size and pixel density
          if (w < 768) {
            vs = Math.max(4, Math.floor(w / 80));
            ts = Math.max(6, Math.floor(w / 64));
          } else {
            vs = Math.max(8, Math.floor(w / 160));
            ts = Math.max(10, Math.floor(w / 128));
          }
          P.createCanvas(w, h);
          // Set pixel density to devicePixelRatio for crispness
          P.pixelDensity(window.devicePixelRatio || 1);

          P.loadImage(imgSrc, (loadedImg) => {
            originalImg = loadedImg;
            img = originalImg.get();
            img.resize(P.width / vs, P.height / vs);
          });
        };

        P.windowResized = () => {
          let w = sketchRef.current.clientWidth;
          let h = sketchRef.current.clientHeight;
          P.resizeCanvas(w, h);

          P.pixelDensity(window.devicePixelRatio || 1);

          // Recalculate vs and ts
          if (w < 768) {
            vs = Math.max(10, Math.floor(w / 80));
            ts = Math.max(5, Math.floor(w / 64));
          } else {
            vs = Math.max(10, Math.floor(w / 160));
            ts = Math.max(10, Math.floor(w / 128));
          }

          // Resize the image again to match new scale
          if (originalImg) {
            img = originalImg.get();
            img.resize(P.width / vs, P.height / vs);
          }
        };

        P.draw = () => {
          P.frameRate(8);
          P.background(255, 0);
          P.clear();

          if (!img) return; // 🚨 wait until image is ready

          img.loadPixels();

          for (let y = 0; y < img.height; y++) {
            for (let x = 0; x < img.width; x++) {
              const ind = (x + y * img.width) * 4;
              const r = img.pixels[ind + 0];
              const g = img.pixels[ind + 1];
              const b = img.pixels[ind + 2];
              const bright = (r + g + b) / 3;

              if (Cset.length > 0) {
                let q = P.floor(P.map(bright, 0, 255, Cset.length, 0));
                P.fill(177, 129, 16);
                P.noStroke();
                P.textFont("Verdana", 9);
                P.textStyle(P.BOLD);
                // P.textSize(ts);

                let txt = "";
                if (Cset[q] === "#") {
                  txt = P.random([0, 1]);
                }

                // Use integer positions for crisp text
                P.text(txt, Math.round(x * vs + 2), Math.round(y * vs + 8));
              }
            }
          }
        };
      };

      myP5 = new p5(sketch, sketchRef.current);
    });

    return () => {
      if (myP5) {
        myP5.remove();
      }
    };
  }, []);

  return (
    <>
      <div ref={sketchRef} className="canvas"></div>
    </>
  );
}
