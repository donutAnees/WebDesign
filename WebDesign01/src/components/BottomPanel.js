export default function BottomPanel() {
  return (
    <div className="flex p-10 justify-center">
      <div className="bg-pink-300 text-black px-10 py-6 rounded-2xl w-5/12">
        <h2 className="font-semibold text-3xl mb-8">Global partners</h2>
        <div className="flex text-xs justify-between pb-8">
          <p>
            Agency that build many <br />
            amazing product to boost
            <br />
            your business to next
            <br />
            level.
          </p>

          <p>
            We are official the partner with <br />
            world to best brands, <br />
            Subscribe to our new <br />
            letter.
          </p>
        </div>
      </div>
      <div className="bg-cyan-300 px-10 rounded-3xl ml-12 flex flex-col items-center gap-4">
        <h2 className="font-black text-5xl mt-8">45M</h2>
        <p>Budget: 55,0000</p>
        <img className="h-12 w-24 mx-auto" src="/bar.png" alt=""></img>
      </div>
      <div className="bg-rose-200 px-24 ml-12 rounded-3xl flex flex-col items-center relative">
        <h2 className="font-semibold text-3xl mt-8">500+</h2>
        <p className="mb-4">Total Clients</p>
        <div class="flex">
          <div class="absolute right-36 z-20">
            <img src="/person.jpg" alt="Person 1" class="h-14 rounded-full" />
          </div>
          <div class="absolute right-28 z-10">
            <img src="/person.jpg" alt="Person 2" class="h-14 rounded-full" />
          </div>
          <div class="absolute right-20 z-0">
            <div alt="Person 3" class="h-14 rounded-full bg-black p-7" />
            <p className="text-white absolute left-6 bottom-4">+2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
