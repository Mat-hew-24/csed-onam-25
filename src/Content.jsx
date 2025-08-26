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
                <img src="" alt="maveli" />
              </div>
            </div>
          </div>
          <div className="para-3">
            <h1 className="text-[#fffce3]">Schedule</h1>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="card p-4 border rounded-xl shadow ">
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
              <div className="card p-4 border rounded-xl shadow">
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
              <div className="card p-4 border rounded-xl shadow">
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
              <div className="card p-4 border rounded-xl shadow">
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
                youtube
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
