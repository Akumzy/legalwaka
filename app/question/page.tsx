export default function Question(props: any) {
  console.log(props);
  return (
    <div className=" w-full h-auto">
      <div className=" p-10 w-7/12 block mx-auto ">
        <p className="font-bold text-2xl pb-3">Ask Multiple Lawyers</p>
        <p className="pb-2">
          Get legal advice from multiple lawyers in 1 hour!
        </p>
        <select name="Area" className=""></select>
      </div>
    </div>
  );
}
