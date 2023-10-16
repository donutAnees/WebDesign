import React from 'react';

const BottomPanel = () => {
  return (
    <div className="flex p-10 flex-col gap-10 md:flex-row">
      <div className="bg-pink-300 text-black px-10 py-6 rounded-2xl w-full md:w-6/12">
        <h2 className="font-semibold text-3xl mb-8">Global partners</h2>
        <div className="flex md:text-xs justify-between pb-8 gap-4">
          <p>
            Agency that builds many <br />
            amazing products to boost
            <br />
            your business to the next
            <br />
            level.
          </p>

          <p>
            We are officially partnered with <br />
            the world's best brands, <br />
            Subscribe to our newsletter.
          </p>
        </div>
      </div>
      <div className="bg-cyan-300 px-10 rounded-3xl flex justify-center flex-col items-center gap-4 py-10 w-full md:w-3/12">
        <h2 className="font-black text-5xl">45M</h2>
        <p>Budget: 55,0000</p>
        <img className="h-12 w-24 mx-auto" src="/bar.png" alt="" />
      </div>
      <div className="bg-rose-200 p-10 h-con rounded-3xl flex flex-col items-center justify-center w-full md:w-4/12">
        <h2 className="font-semibold text-3xl">500+</h2>
        <p className="mb-4">Total Clients</p>
        <div className="flex justify-center items-center w-44">
          <div className="relative left-4 z-20">
            <img src="/person.jpg" alt="Person 1" className="h-14 rounded-full" />
          </div>
          <div className="relative left-0 z-10">
            <img src="/person.jpg" alt="Person 2" className="h-14 rounded-full" />
          </div>
          <div className="relative right-4">
            <div alt="Person 3" className="h-14 rounded-full bg-black p-7" />
            <p className="text-white absolute left-4 bottom-4">+2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomPanel;
