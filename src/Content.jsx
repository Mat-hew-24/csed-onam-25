import Marquee from "react-fast-marquee";

export default function Content() {
  return (
    <>
      <div>
        <div className="bg-[#74512D] text-white relative opacity-100 flex flex-col gap-[41px] pt-[32px] pb-[32px] pl-[25px] pr-[25px] bottom-0 left-0 right-0 ">
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
            <div className="flex items-center md:gap-40 text-justify scr-wrap-rev lg:text-2xl sm:text-lg lg:w-screen lg:pr-25">
              <div className="md:max-w-[45vw] lg:max-w-[60vw]">
                Onam is the vibrant harvest festival of Kerala, celebrated with
                great enthusiasm and cultural pride. It marks the legendary
                homecoming of King Mahabali, whose reign was believed to be a
                golden era of prosperity, equality, and happiness. During this
                festival, homes are beautifully decorated with pookkalam,
                intricate floral rangolis that symbolize harmony and joy.
                Families come together to prepare the grand Onam Sadhya, a
                traditional vegetarian feast served on banana leaves, consisting
                of many delicious dishes. Cultural events such as Vallam Kali
                (snake boat races), Pulikali (tiger dance), Kaikottikali (folk
                dances), and music performances fill the atmosphere with
                festivity. Onam truly unites communities, spreading love,
                gratitude, and togetherness.
              </div>
              <div>
                <img
                  src="d7158615c4d018f6858309393cb96f036b7b2fa2.png"
                  alt="maveli"
                  className="w-[400px] h-[400px] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="para-3">
            <h1 className="text-[#fffce3]">Schedule</h1>
            <div className="flex justify-center w-full lg:w-screen">
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
                <div className="card p-8 border rounded-xl shadow ">
                  <div>
                    <span className="schedule-headings">
                      Inauguration Ceremony
                    </span>
                    <ul className="flex flex-col list-disc pl-4">
                      <li>Lighting of the lamp</li>
                      <li>Traditional invocation song</li>
                      <li>Welcome speech</li>
                    </ul>
                  </div>
                </div>
                <div className="card p-8 border rounded-xl shadow">
                  <div>
                    <span className="schedule-headings">Cultural Programs</span>
                    <ul className="flex flex-col list-disc pl-4">
                      <li>6:30 PM – 10:00 PM | Cultural Events</li>
                    </ul>
                  </div>
                </div>
                <div className="card p-8 border rounded-xl shadow">
                  <div>
                    <span className="schedule-headings">Games</span>
                    <ul className="flex flex-col list-disc pl-4">
                      <li>7:00 PM – 8:00 PM | Sundarikoru Pottuthodal</li>
                      <li>7:00 PM – 8:00 PM | Truth or Dare</li>
                      <li>7:30 PM – 8:00 PM | Sari-udukkal for Boys</li>
                      <li>8:00 PM – 9:30 PM | Vadamvali</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="para-3">
            <h1 className="text-[#fffce3] pt-10">Sponsors</h1>
            <div className="flex justify-center items-center gap-8 mt-8 flex-wrap">
              <div className="sponsor-card p-4">
                <img
                  src="sp_1.png"
                  alt="Sponsor 1"
                  className="w-[300px] h-[300px] object-contain"
                />
              </div>
              <div className="sponsor-card p-4">
                <img
                  src="sp_2.png"
                  alt="Sponsor 2"
                  className="w-[300px] h-[300px] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="para-4 flex justify-center cursor-pointer">
            <a href="https://www.instagram.com/_su.ryaa/" target="_blank">
              <span className="quote-wrap">
                vann<span className="onam">onam</span>, thakarth
                <span className="onam">onam</span>, pwolich
                <span className="onam">onam</span>
              </span>
            </a>
          </div>
          <div className="para-5 flex justify-center flex-wrap">
            <a
              href="https://www.instagram.com/csea.nitc?igsh=MTl3ajg5MnoybDdueA=="
              target="_blank"
            >
              <button className="btn-1 flex justify-center items-center">
                instagram
              </button>
            </a>
            <a
            // href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
            // target="_blank"
            >
              <button className="btn-1 flex justify-center items-center">
                trailer
              </button>
            </a>
            <a href=" https://minerva.nitc.ac.in/" target="_blank">
              <button className="btn-1 flex justify-center items-center ">
                minerva
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
