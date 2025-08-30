import Marquee from "react-fast-marquee";

export default function Header() {
  return (
    <>
      <Marquee speed={100} gradient={false}>
        <div className="flex items-center gap-6">
          <img
            src="sp_1.png"
            alt="sponsor"
            className="h-[75px] w-[386px] object-contain flex-shrink-0"
          />

          <div className="headerBullet text-2xl">•</div>

          <img
            src="sp_2.png"
            alt="sponsor"
            className="h-[75px] w-[227px] object-contain flex-shrink-0"
          />

          {/* <div className="headerBullet text-2xl">•</div> */}
        </div>
      </Marquee>
    </>
  );
}
