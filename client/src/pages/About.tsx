export default function About() {
  const Info = [
    "hjkim96727@gmail.com", // email
    "+33 6 52 96 98 75", // phone number
    "Paris, France", // location
    "@hyunjiikim" // github
  ];

  return (
    <div id="about" className="max-w-[1000px] mx-auto my-10">
      <div id="section1" className="flex justify-between w-[640px]">
        <div id="1L" className="flex flex-col">
          <div className="aspect-square bg-accent-1 w-[200px]"></div>
          <div id="infoContainer" className="flex flex-col gap-2">
            {Info.map((info, index) => (
              <div key={index} className="bg-primary-4/20 p-2">
                {info}
              </div>
            ))}
          </div>
        </div>
        <div id="1R">
          <h1 className="font-bold text-4xl">Hyunji Kim</h1>
        </div>
      </div>
    </div>
  );
}