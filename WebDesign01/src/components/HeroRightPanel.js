export default function HeroRightPanel() {
  return (
    <div className="relative flex flex-row-reverse items-center justify-center md:justify-start w-full md:w-6/12 md:mr-10 h-60 md:mt-20">
      <div className="bg-gradient-to-t from-green-200 to-orange-200 rounded-3xl p-0.5">
        <div className="text-white font-light bg-primary rounded-3xl">
          <div className="bg-white bg-opacity-20 p-4 rounded-3xl text-center">
            Agency that build many <br />
            amazing product to boost
            <br />
            your business to next
            <br />
            level.
          </div>
        </div>
        <div className="absolute flex flex-row align-middle justify-center">
          <button className="bg-white mt-3 p-4 rounded-3xl font-bold text-xs hover:scale-110">
            Get Early Access
          </button>
          <button className="bg-white ml-3 p-4 mt-3 rounded-full  hover:scale-110 hover:rotate-45">
            <img className="h-5 -rotate-45" src="/arrow.png" alt=""></img>
          </button>
        </div>
      </div>
    </div>
  );
}
