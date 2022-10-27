type IProfessional = {
  id: number;
  avatar: string;
  rating: number;
  lastName: string;
  location: string;
  firstName: string;
};
export default async function Home() {
  const professions: IProfessional[] = await fetch('https://api-generator.retool.com/sV54Gy/data').then((res) => res.json());
  return (
    <main className="flex max-w-7xl mx-auto  space-x-4 py-6 ">
      <aside className="w-80 p-4 border border-gray-200 rounded-md"></aside>
      <section className="flex-1 border border-gray-200 rounded-md">
        <div className="flex flex-col space-y-4 ">
          {professions.map((profession, index) => (
            <div key={profession.id} className={`flex space-x-4 h-52 p-4 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
              <div className="flex-shrink-0 w-40 bg-white border rounded-md border-gray-300">
                <img src={profession.avatar} alt="" className="w-16 h-16 rounded-full" />
              </div>
              <div className="flex-1">
                <div className="">
                  <h3 className="text-lg font-bold">
                    {profession.firstName} {profession.lastName}
                  </h3>
                  <p className="text-gray-500 text-sm">{profession.location}</p>
                </div>
                <div className="pt-4">
                  <RatingStars rating={profession.rating} />
                  <span className="text-gray-500 text-sm">{profession.rating} on 5.0 rating</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
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
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 17.27L18.18 21L16.54 14.35L22 9.24L15.45 8.63L12 2.5L8.55 8.63L2 9.24L7.45 14.35L5.82 21L12 17.27Z"
                  fill="none"
                  stroke="#FFC344"
                />
              </svg>
            </div>
            <div className="w-full h-full absolute top-0 left-0" style={{ clipPath: `inset(0 ${100 - fillWidth}% 0 0)` }}>
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
