import N from "./N";
import O from "./O";
import M from "./M";
import A from "./A";
import { useEffect } from "react";
import { useState } from "react";
export default function Title() {
  //OK WHAT I DID =>>>> MADE A STRING USING 0s AND 1s WITH RANDOM=>>THEN JUST RERENDER EVERY ___ms =>>GOOD BYE..
  const [binary, setBinary] = useState([]);
  useEffect(() => {
    const createValue = () => {
      const grid = [];
      for (let i = 0; i < 8; i++) {
        let x = "";
        for (let j = 0; j < 120; j++) {
          x += Math.random() > 0.5 ? "1" : "0";
        }
        grid.push(x);
      }
      return grid;
    };

    setBinary(createValue());

    const i = setInterval(() => {
      setBinary(createValue());
    }, 200);

    return () => clearInterval(i);
  }, []);
  return (
    <div className="w-full h-36 relative leading-none pt-2 pb-2 bg-black text-black flex flex-wrap">
      <div className="absolute text-black font-bold z-10">
        {binary.map((i, k) => (
          <div key={k}>{i}</div>
        ))}
      </div>
      <O />
      <N />
      <A />
      <M />
    </div>
  );
}
