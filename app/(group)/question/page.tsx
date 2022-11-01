import Link from "next/link";
export default function Question(props: any) {
  console.log(props);
  return (
    <div className=" w-full h-auto">
      <div className=" p-10 w-7/12 block mx-auto ">
        <p className="font-bold text-2xl pb-3">Ask Multiple Lawyers</p>
        <p className="pb-2">
          Get legal advice from multiple lawyers in 1 hour!
        </p>
        <select
          name="Area"
          className="w-full border-slate-300 border-solid border rounded pl-2 py-1 text-slate-500 mb-3"
        >
          <option value="Area of law">Area of law</option>
          <option value="Family Law">Family law</option>
          <option value="Family Law">Property law</option>
          <option value="Family Law">Criminal law</option>
          <option value="Family Law">Civil law</option>
          <option value="Family Law">Consumer law</option>
          <option value="Family Law">Business law</option>
          <option value="Family Law">Labour</option>
          <option value="Family Law">Constitutional law</option>
          <option value="Family Law">Intellectual property</option>
          <option value="Family Law">Taxation</option>
        </select>
        <input
          type="text "
          className="w-full border-slate-300 border-solid border py-1 pl-2 mb-3"
          placeholder="Question title"
        />
        <textarea
          name="Question"
          placeholder="Type your question here."
          className="w-full h-56 border-slate-300 border border-solid text-slate-700 pl-2 pt-1 mb-4"
        ></textarea>
        <input
          type="text"
          className="border-slate-300 border-solid border w-5/12 rounded py-1 pl-2 mb-3"
          placeholder="My phone number. Optional."
        />
        <div className="flex mb-4">
          <input type="checkbox" />
          <p className="pl-1">
            I agree to the{" "}
            <a href="" className="text-cyan-700 hover:underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="" className="text-cyan-700 hover:underline">
              Privacy policy
            </a>
          </p>
        </div>
        <Link href="" className="bg-red-600 text-white px-4 py-2 rounded">
          Continue
        </Link>
      </div>
      <footer className="bg-zinc-700 w-full text-white pt-4 pl-4">
        <p className="text-xs font-normal pb-4">
          © 2013-2022 Kaanoon Corporation. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
