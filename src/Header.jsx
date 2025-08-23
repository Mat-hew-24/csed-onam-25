import Marquee from "react-fast-marquee";

export default function Header() {
  return (
    <>
      <Marquee speed={100} gradient={false}>
        <div className="flex items-center gap-6">
          <img
            src="b94063ae9050f2fe1a30a9a4912c15fcbea3d5a0 (1).png"
            alt="sponsor"
            className="h-[75px] w-[186px] object-contain flex-shrink-0"
          />

          <div className="headerBullet text-2xl">•</div>

          <img
            src="7be119cfb655f9cfc07ce60b492da2e91012c16d (1).png"
            alt="sponsor"
            className="h-[75px] w-[227px] object-contain flex-shrink-0"
          />

          <div className="headerBullet text-2xl">•</div>

          <img
            src="5481f1ced918f56d48c3a0c68c75c5dc6579fe12.png"
            alt="sponsor"
            className="h-[75px] w-[121px] object-contain flex-shrink-0"
          />
        </div>
      </Marquee>
    </>
  );
}
