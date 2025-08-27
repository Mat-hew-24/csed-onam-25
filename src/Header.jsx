import Marquee from "react-fast-marquee";

export default function Header() {
  return (
    <>
      <Marquee speed={100} gradient={false}>
        <div className="flex items-center gap-6"></div>
      </Marquee>
    </>
  );
}
