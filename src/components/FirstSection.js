import React from 'react';

const FirstSection = () => {
  return (
    <section className="py-16 text-center bg-gray-50">
      <div className="px-3 py-3 mt-24 -mb-0.5">
      <label className='font-sans text-xs font-medium text-center text-black text-opacity-100 border-solid rounded-full bg-slate-100 leading-border-text'>
          500k developers 💪
      </label>
      </div>
      <h1 className="mt-5 mb-3 font-sans text-6xl font-bold text-black text-opacity-85">We Develop Elite <br /> Developers</h1>
      <p className="text-3-regular mb-8 text-neutral-12 sm:text-center sm:max-w-[650px] sm:mx-auto">
        Access a library of books and courses on JavaScript, Python, AI, and more!
      </p>
      <div className="flex justify-center mt-10 mb-12 space-x-4">
        <button className="px-6 py-3 text-base text-white bg-purple-600 rounded-lg hover:bg-purple-700">
          Start Free Trial
        </button>
        <button className="px-6 py-3 font-semibold text-gray-700 rounded-lg bg-blue-50 hover:bg-blue-100">
          Browse Library
        </button>
      </div>
    </section>
  );
};

export default FirstSection;
