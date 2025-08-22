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

        function chanceCanvas(w) {
          if (w < 768) {
            // Larger text, closer spacing for small screens
            vs = 2;
            ts = 6;
          } else {
            // Larger text, closer spacing for desktop
            vs = 3;
            ts = 12;
          }
        }

        P.setup = () => {
          // Use clientWidth/clientHeight for accurate sizing
          const w = sketchRef.current.clientWidth;
          const h = sketchRef.current.clientHeight;

          // Dynamically adjust vs and ts based on canvas size and pixel density
          chanceCanvas(w);
          P.createCanvas(w, h);
          P.frameRate(10); // Move frameRate to setup
          // Optimize pixel density for performance (except small screens)
          if (w < 768) {
            P.pixelDensity(window.devicePixelRatio || 1); // Keep quality on mobile
          } else {
            P.pixelDensity(1); // Reduce computation on desktop
          }

          P.loadImage(imgSrc, (loadedImg) => {
            originalImg = loadedImg;
            img = originalImg.get();
            img.resize(P.width / vs, P.height / vs);
            img.loadPixels(); // Load pixels once when image is ready
          });
        };

        P.windowResized = () => {
          let w = sketchRef.current.clientWidth;
          let h = sketchRef.current.clientHeight;
          P.resizeCanvas(w, h);

          // Optimize pixel density for performance (except small screens)
          if (w < 768) {
            P.pixelDensity(window.devicePixelRatio || 1); // Keep quality on mobile
          } else {
            P.pixelDensity(1); // Reduce computation on desktop
          }

          // Recalculate vs and ts
          chanceCanvas(w);

          // Resize the image again to match new scale
          if (originalImg) {
            img = originalImg.get();
            img.resize(P.width / vs, P.height / vs);
            img.loadPixels(); // Load pixels after resize
          }
        };

        P.draw = () => {
          P.background(255, 0);
          P.clear();

          if (!img) return; // 🚨 wait until image is ready

          // Get current width to determine processing strategy
          const currentW = sketchRef.current.clientWidth;
          const step = currentW < 768 ? 2 : 3; // Increased step size for better performance

          // Set text properties once outside the loop
          P.fill(177, 129, 16);
          P.noStroke();
          P.textStyle(P.BOLD);
          P.textSize(ts);

          for (let y = 0; y < img.height; y += step) {
            for (let x = 0; x < img.width; x += step) {
              const ind = (x + y * img.width) * 4;
              const r = img.pixels[ind + 0];
              const g = img.pixels[ind + 1];
              const b = img.pixels[ind + 2];
              const bright = (r + g + b) / 3;

              if (Cset.length > 0) {
                let q = P.floor(P.map(bright, 0, 255, Cset.length, 0));

                let txt = "";
                if (Cset[q] === "#") {
                  txt = P.random([0, 1]);
                }

                // Use integer positions for crisp text
                P.text(txt, (x * vs + 2) | 0, (y * vs + 8) | 0);
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
    // <div className="flex justify-center items-center">
    <div ref={sketchRef} className="canvas"></div>
    // </div>
  );
}
