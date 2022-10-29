import Link from "next/link";
import { EmptyStar, FullStar, HalfStar } from "./other/stars";
import { City, Court } from "./other/options";

type IProfessional = {
  id: number;
  avatar: string;
  rating: number;
  lastName: string;
  location: string;
  firstName: string;
};
export default async function Home() {
  const professions: IProfessional[] = await fetch(
    "https://api-generator.retool.com/sV54Gy/data"
  ).then((res) => res.json());

  return (
    <>
      <div className="flex pt-6 pl-9">
        <a className="text-sky-900 hover:underline" href="">
          Find a lawyer{" "}
        </a>
        <img
          className="bg-white text-black w-3 pt-1"
          src="https://img.icons8.com/carbon-copy/344/right-squared.png"
          alt=""
        />
        <a className="text-sky-900 hover:underline pl-1.5" href="">
          All lawyers{" "}
        </a>
        <img
          className="bg-white text-black w-3 pt-1"
          src="https://img.icons8.com/carbon-copy/344/right-squared.png"
          alt=""
        />
        <a className="text-sky-900 hover:underline pl-1.5" href="">
          Family lawyers{" "}
        </a>
        <img
          className="bg-white text-black w-3 pt-1"
          src="https://img.icons8.com/carbon-copy/344/right-squared.png"
          alt=""
        />
        <a className="text-black pl-1.5" href="">
          Divorce lawyers{" "}
        </a>
      </div>
      <div className="pl-9 pt-2.5">
        <h1 className=" font-semibold text-xl text-slate-700">
          Divorce Lawyers in India (487)
        </h1>
      </div>
      <main className="flex max-w-7xl mx-auto  space-x-4 py-6 ">
        <aside className="w-80 p-5 border border-gray-200 rounded-md">
          <p className="font-semibold pb-2 text-base">Find lawyer by name</p>
          <input
            className="border border-solid w-full py-1.5 border-gray-300 shadow-inner rounded"
            type="text"
          />
          <p className="font-semibold pb-2 text-base pt-5">Location</p>
          <select
            name="state"
            className="w-full border  border-slate-400 border-solid   text-slate-600 py-1 rounded  mb-2.5"
          >
            {state.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
          <select
            name="city"
            className="w-full border  border-slate-400 border-solid  text-slate-600 py-1 rounded  mb-2.5"
          >
            <City />
          </select>
          <select
            name="court"
            className=" border  border-slate-400 border-solid  text-slate-600 py-1 rounded w-full"
          >
            <Court />
          </select>
          <div>
            <p className="font-semibold pb-2 text-base pt-4">Experience</p>
            <div className="flex cursor-pointer p-1">
              <input className="cursor-pointer" type="checkbox" />
              <span className="font-semibold pl-2.5 ">0+ Years</span>
            </div>
            <div className="flex cursor-pointer p-1">
              <input className="cursor-pointer" type="checkbox" />
              <span className="font-semibold pl-2.5 ">5+ Years</span>
            </div>
            <div className="flex cursor-pointer p-1">
              <input className="cursor-pointer" type="checkbox" />
              <span className="font-semibold pl-2.5 ">10+ Years</span>
            </div>
            <div className="flex cursor-pointer p-1">
              <input className="cursor-pointer" type="checkbox" />
              <span className="font-semibold pl-2.5 ">15+ Years</span>
            </div>
            <div className="flex cursor-pointer p-1">
              <input className="cursor-pointer" type="checkbox" />
              <span className="font-semibold pl-2.5 ">20+ Years</span>
            </div>
          </div>
          <div className="">
            <p className="font-normal pb-2 text-base pt-4">Rating</p>
            <div className="flex p-1 cursor-pointer">
              <input type="checkbox" className="cursor-pointer mr-2" />
              <FullStar />
              <FullStar />
              <FullStar />
              <FullStar />
              <FullStar />
            </div>
            <div className="flex p-1 cursor-pointer">
              <input type="checkbox" className="cursor-pointer mr-2" />
              <FullStar />
              <FullStar />
              <FullStar />
              <FullStar />
              <HalfStar />
              <p className="font-normal pl-1">and up</p>
            </div>
            <div className="flex cursor-pointer p-1">
              <input type="checkbox" className="cursor-pointer mr-2" />
              <FullStar />
              <FullStar />
              <FullStar />
              <FullStar />
              <EmptyStar />
              <p className="font-normal pl-1">and up</p>
            </div>
            <div className="flex p-1 cursor-pointer">
              <input type="checkbox" className="cursor-pointer mr-2" />
              <FullStar />
              <FullStar />
              <FullStar />
              <HalfStar />
              <EmptyStar />
              <p className="font-normal pl-1">and up</p>
            </div>
            <div className="flex cursor-pointer p-1">
              <input type="checkbox" className="cursor-pointer mr-2" />
              <FullStar />
              <FullStar />
              <FullStar />
              <EmptyStar />
              <EmptyStar />
              <p className="font-normal pl-1">and up</p>
            </div>
          </div>
          <div>
            <p className="font-normal pb-2 text-base pt-4">Show only</p>
            <div className="flex cursor-pointer p-1">
              <input className="cursor-pointer" type="checkbox" />
              <span className="font-semibold pl-2.5 ">
                Lawyers available NOW
              </span>
            </div>
          </div>
          <div>
            <p className="font-normal pb-2 text-base pt-4">Gender</p>
            <div className="flex cursor-pointer p-1">
              <input className="cursor-pointer" type="checkbox" />
              <span className="font-semibold pl-2.5 ">Male</span>
            </div>
            <div className="flex cursor-pointer p-1">
              <input className="cursor-pointer" type="checkbox" />
              <span className="font-semibold pl-2.5 ">Female</span>
            </div>
          </div>
        </aside>
        <section className="flex-1 border border-gray-200 rounded-md">
          <div className="flex flex-col space-y-4 ">
            {professions.map((profession, index) => (
              <div
                key={profession.id}
                className={`flex space-x-4 h-52 p-4 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <div className="flex-shrink-0 w-40 bg-white border rounded-md border-gray-300">
                  <img
                    src={profession.avatar}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="">
                    <Link
                      className=" text-lg font-bold hover:underline"
                      href={`/lawyer/${profession.id}`}
                    >
                      {profession.firstName} {profession.lastName}
                    </Link>
                    <p className="text-gray-500 text-sm">
                      {profession.location}
                    </p>
                  </div>
                  <div className="pt-4">
                    <RatingStars rating={profession.rating} />
                    <span className="text-gray-500 text-sm">
                      {profession.rating} on 5.0 rating
                    </span>
                  </div>
                </div>
                <div className="grid">
                  <Link
                    className="px-5 h-10 bg-cyan-700 text-white text-center py-2 rounded-lg"
                    href="/question"
                  >
                    Ask a Question
                  </Link>
                  <Link
                    className="bg-red-600 px-3 h-10 text-white text-center py-2 rounded"
                    href=""
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
type RatingStarsProps = {
  rating: number;
};
function RatingStars(props: RatingStarsProps) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
        const fillWidth = (props.rating - i) * 100;
        return (
          <div key={i} className="w-6 h-6 relative">
            <div className="w-full h-full absolute top-0 left-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21L16.54 14.35L22 9.24L15.45 8.63L12 2.5L8.55 8.63L2 9.24L7.45 14.35L5.82 21L12 17.27Z"
                  fill="none"
                  stroke="#FFC344"
                />
              </svg>
            </div>
            <div
              className="w-full h-full absolute top-0 left-0"
              style={{ clipPath: `inset(0 ${100 - fillWidth}% 0 0)` }}
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21L16.54 14.35L22 9.24L15.45 8.63L12 2.5L8.55 8.63L2 9.24L7.45 14.35L5.82 21L12 17.27Z"
                  fill="#FFC344"
                  stroke="#FFC344"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}
const state = [
  { value: "state" },
  { value: "Andhra Pradesh" },
  { value: "Assam" },
  { value: "Bihar" },
  { value: "Chandigarh" },
  { value: "Chhattisgarh" },
  { value: "Delhi" },
  { value: "Goa" },
  { value: "Gujarat" },
  { value: "Haryana" },
  { value: "Himachal" },
  { value: "Jammu and Kashmir" },
  { value: "Jharkhand" },
  { value: "Karnataka" },
  { value: "Kerala" },
  { value: "Madhya Pradesh" },
  { value: "Maharashtry" },
  { value: "Nagaland" },
  { value: "Odisha" },
  { value: "Puducherry" },
  { value: "Punjab" },
  { value: "Rajasthan" },
  { value: "Tamil Nadu" },
  { value: "Telangana" },
  { value: "Uttar Pradesh" },
  { value: "Uttarakand" },
  { value: "West Bengal" },
];
