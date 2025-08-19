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
          // console.log(
          //   sketchRef.current.offsetWidth,
          //   sketchRef.current.offsetHeight
          // );
          P.createCanvas(
            sketchRef.current.offsetWidth,
            sketchRef.current.offsetHeight
          );

          // P.createCanvas(2000, 800);

          if (sketchRef.current.offsetWidth < 768) {
            vs = 5;
            ts = 7;
            console.log("small screen");
          }

          P.pixelDensity(1);

          P.loadImage(imgSrc, (loadedImg) => {
            originalImg = loadedImg;
            img = originalImg.get();
            img.resize(P.width / vs, P.height / vs);
          });
        };

        P.windowResized = () => {
          P.resizeCanvas(
            sketchRef.current.offsetWidth,
            sketchRef.current.offsetHeight
          );

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
                P.textStyle(P.BOLD);
                P.textSize(ts);

                let txt = "";
                if (Cset[q] === "#") {
                  txt = P.random([0, 1]);
                }

                P.text(txt, x * vs + 2, y * vs + 8);
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
