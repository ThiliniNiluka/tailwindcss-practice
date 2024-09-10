import React from 'react';

const learningPaths = [
  {
    image: 'https://cdn.sanity.io/images/708bnrs8/production/d6f315a4e461293667850794413bd5c95ee8488c-704x405.png?rect=2,0,701,405&w=320&h=185&auto=format',
    description: 'Full Stack JavaScript Developer',
    level: 'Beginner',
    steps: '4 steps',
  },
  {
    image: 'https://cdn.sanity.io/images/708bnrs8/production/699da1a83858c0412585a95a7371bf40ca1c48eb-704x405.png?rect=2,0,701,405&w=320&h=185&auto=format',    
    description: 'Web Development Basics',
    level: 'Beginner',
    steps: '2 steps',
  },
  {
    image: 'https://cdn.sanity.io/images/708bnrs8/production/707ea9ca1b9c2bc01beaaf6da8064718644964d4-704x405.png?rect=2,0,701,405&w=320&h=185&auto=format',    
    description: 'Pro Dev Workflow',
    level: 'Intermediate',
    steps: '3 steps',
  },
  {
    image: 'https://cdn.sanity.io/images/708bnrs8/production/878a3f9d4c52581e23b182e6875db2e013373ca7-704x405.png?rect=2,0,701,405&w=320&h=185&auto=format',
    description: 'Build Beautiful Webpages',
    level: 'Beginner',
    steps: '5 steps',
  },
];

const LearningPaths = () => {
  return (
    <div className="p-40 py-0.5 ">
      <h2 className="mb-4 text-4xl font-bold text-center text-black/85">For all learning paths</h2>
      <p className="mb-10 text-center text-gray-600">
        Whether you’re a full-stack developer, designer, or looking to get into AI, we’ve got a path for you.
      </p>

      <div className="grid grid-cols-1 gap-6 cursor-pointer md:grid-cols-2 lg:grid-cols-4">
        {learningPaths.map((path, index) => (
          <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img src={path.image} alt={path.title} className="object-cover w-full h-40" />
            <div className="p-4">
              <p className="mt-3 mb-4 font-medium text-gray-700">Learning Path</p>
              <p className="mb-4 text-gray-700">{path.description}</p>
              <div className="flex mt-8 space-x-1 text-xs font-normal text-gray-700 bg-white">
                <span className="px-3 py-1 border-2 border-solid rounded-full border-grey-500 ">
                  {path.level}
                </span>
                <span className="px-2 py-1 border-2 border-solid rounded-full border-grey-500 ">
                  {path.steps}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-6 py-3 mt-10 mb-20 text-black rounded-lg bg-white-600 hover:bg-blue-100">
          Browse Premium Library
        </button>
      </div>
    </div>
  );
};

export default LearningPaths;
