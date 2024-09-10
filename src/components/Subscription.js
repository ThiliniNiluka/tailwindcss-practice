import React from 'react';

const Subscription = () => {
  return (
    // <div className="px-10 py-20 font-sans bg-black ">
    //   <div className="container mx-auto text-center">
    <div className="px-8 bg-gray-900 py-36">
      <div className="container mx-auto text-center">
        <h2 className="mb-6 font-sans text-4xl font-bold text-center text-white">
          Get the freshest news and resources for <br /> developers, designers and digital creators in <br />your inbox each week
        </h2>

        <div className="flex items-center justify-center gap-1">
          <input
            type="email"
            placeholder="Enter your email"
            required="Please fill out this filed"
            className="w-64 px-4 py-2 border-solid rounded-md border-3 focus:outline-offset-1 focus:ring focus:ring-gray-900"
          />
          <button className="px-4 py-2 font-semibold text-white bg-purple-700 rounded-md hover:bg-violet-600 active:bg-blue-700 focus:ring focus:ring-violet-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
