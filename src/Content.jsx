import Marquee from "react-fast-marquee";

export default function Content() {
  return (
    <>
      <div>
        <div className="bg-[#74512D] text-white relative opacity-100 flex flex-col gap-[41px] pt-[32px] pb-[32px] pl-[35px] pr-[35px] bottom-0 left-0 right-0 ">
          <Marquee
            gradient={false}
            speed={100}
            pauseOnHover
            className="para-1 text-[#fffce3] text-lg font-bold overflow-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            &nbsp;&nbsp;&nbsp;VADAMVALI • CHENDAMELAM • PAYASAM • DANCE •
            ONAKKALI&nbsp;&nbsp;&nbsp;
          </Marquee>

          <div className="mb-12 para-2">
            <h1>CSEA Onam 2025</h1>
            <div className="flex gap-40 text-justify scr-wrap-rev">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                laudantium libero pariatur quod, fuga rerum ea nemo, facilis
                labore aliquam eos id magni excepturi culpa optio quisquam eaque
                non enim? Repellendus, quisquam iste alias quo reiciendis nemo
                tenetur illo! Obcaecati nobis ab libero in, omnis aliquid,
                provident suscipit placeat laboriosam sit unde repellat sunt
                eaque. Ipsam molestiae repellendus quidem nobis. Eius repellat,
                veritatis non maxime dolore excepturi nam quaerat illo ad
                temporibus atque dolorem tempora nihil corrupti earum cum?
                Quidem repudiandae sint at, nemo placeat voluptas ex eum ullam
                architecto. Facilis itaque error molestiae consectetur, mollitia
                corporis ducimus voluptatem unde, facere corrupti optio
                pariatur. Maiores minus voluptates nobis asperiores animi
                praesentium quo, obcaecati molestiae quidem quae fugiat officia
                magni repellendus.
              </div>
              <div>
                <img src="" alt="maveli" />
              </div>
            </div>
          </div>
          <div className="para-3">
            <h1 className="text-[#fffce3]">Schedule</h1>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="card p-4 border rounded-lg shadow">
                <div>
                  <span className="schedule-headings">
                    Inauguration Ceremony
                  </span>
                  <ul className="flex flex-col list-disc pl-4">
                    <li>Lighting of the lamp</li>
                    <li>Traditional invocation song or prayer</li>
                    <li>Welcome speech</li>
                  </ul>
                </div>
                <div className="flex justify-center items-center mt-auto">
                  <button className="card-btn flex flex-wrap">
                    <span>Add to Calender</span>
                  </button>
                </div>
              </div>

              <div className="card p-4 border rounded-lg shadow">
                <div>
                  <span className="schedule-headings">Cultural Programs</span>
                  <ul className="flex flex-col list-disc pl-4">
                    <li>9:30 AM – 10:30 AM | Thiruvathira Kali</li>
                    <li>10:30 AM – 11:00 AM | Onappattu</li>
                    <li>11:00 AM – 12:00 PM | Skits/Drama</li>
                    <li>12:00 PM – 12:30 PM | Games</li>
                  </ul>
                </div>
                <div className="flex justify-center items-center mt-auto">
                  <button className="card-btn flex flex-wrap">
                    <span>Add to Calender</span>
                  </button>
                </div>
              </div>
              <div className="card p-4 border rounded-lg shadow">
                <div>
                  <span className="schedule-headings">
                    Inauguration Ceremony
                  </span>
                  <ul className="flex flex-col list-disc pl-4">
                    <li>Lighting of the lamp</li>
                    <li>Traditional invocation song or prayer</li>
                    <li>Welcome speech</li>
                  </ul>
                </div>
                <div className="flex justify-center items-center mt-auto">
                  <button className="card-btn flex flex-wrap">
                    <span>Add to Calender</span>
                  </button>
                </div>
              </div>

              <div className="card p-4 border rounded-lg shadow">
                <div>
                  <span className="schedule-headings">Cultural Programs</span>
                  <ul className="flex flex-col list-disc pl-4">
                    <li>9:30 AM – 10:30 AM | Thiruvathira Kali</li>
                    <li>10:30 AM – 11:00 AM | Onappattu</li>
                    <li>11:00 AM – 12:00 PM | Skits/Drama</li>
                    <li>12:00 PM – 12:30 PM | Games</li>
                  </ul>
                </div>
                <div className="flex justify-center items-center mt-auto">
                  <button className="card-btn flex flex-wrap">
                    <span>Add to Calender</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="para-4 flex justify-center">
            <span className="quote-wrap">
              vann<span className="onam">onam</span>, thakarth
              <span className="onam">onam</span>, pwolich
              <span className="onam">onam</span>
            </span>
          </div>
          <div className="para-5 flex justify-center flex-wrap">
            <button className="btn-1 flex justify-center items-center">
              instagram
            </button>
            <button className="btn-1 flex justify-center items-center">
              youtube
            </button>
            <button className="btn-1 flex justify-center items-center ">
              minerva
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
