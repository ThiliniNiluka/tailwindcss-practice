import React from 'react';

const CommunitySection = () => {
  const posts = [
    {
      username: 'megwlinic',
      title: 'Calling another function from a function',
      timeAgo: '5 minutes ago',
      replies: 4,
    },
    {
      username: '4b443Isaef',
      title: 'What is causing the <span> element to break the text onto a new line, and how can th...',
      timeAgo: '6 hours ago',
      replies: 2,
    },
    {
      username: 'cdevl3749',
      title: 'Country map display',
      timeAgo: '9 hours ago',
      replies: 19,
    },
    {
      username: 'em13',
      title: 'Mail script not working',
      timeAgo: '10 hours ago',
      replies: 104,
    },
    {
      username: 'zoltankr',
      title: 'Is it okay to add SVGs at the bottom of HTML and reference...',
      timeAgo: '12 hours ago',
      replies: 1,
    },
    {
      username: 'anjanesh1',
      title: 'Video pops up on mobile hiding the webpage behind',
      timeAgo: '14 hours ago',
      replies: 4,
    },
  ];

  return (
    <div className="px-8 bg-white py-14">
      <div className="max-w-6xl mx-auto max-h-0.5xl ">
        <div className="mb-8 text-center">
          <h2 class="text-4xl font-bold not-italic tracking-tight leading-10 mt-0.5 mb-4 text-zinc-900">Join our community of developers</h2>
          <p className="mt-2 text-gray-600">Create a free account and join our community today!</p>
        </div>

        <div className="space-y-4 hover:bg-grey-200 ">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex items-center justify-between h-20 p-4 bg-purple-100 rounded-lg shadow-sm cursor-pointer w-30 hover:bg-purple-200 columns-xs"
            >
              <div className="flex items-center space-x-4 ">
                <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-sm font-normal text-white bg-red-400 rounded-full ">
                  {post.username.charAt(0).toUpperCase()}
                </div>
                <div className='flex space-x-16'>
                  <h4 className="font-semibold text-gray-900 ">{post.username}</h4>
                  <p className="text-gray-700 ">{post.title}</p>
                </div>
              </div>

              <div className="flex items-center justify-between space-x-6">
                <p className="px-10 text-gray-500">{post.timeAgo}</p>
                <div className="flex items-center space-x-2 text-gray-700">
                  <button className="flex gap-1 px-4 py-1 font-normal text-black bg-purple-100 rounded-md hover:bg-purple-200">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48" className='mt-1 mb-1 align-middle'>
                  <path d="M 10.5 7 C 6.9280619 7 4 9.9280619 4 13.5 L 4 30.5 C 4 34.071938 6.9280619 37 10.5 37 L 12 37 L 12 42.5 C 12 44.46599 14.427297 45.67893 16 44.5 L 26 37 L 37.5 37 C 41.071938 37 44 34.071938 44 30.5 L 44 13.5 C 44 9.9280619 41.071938 7 37.5 7 L 10.5 7 z"></path>
                  </svg>
                    <span className='mt-0.5'>{post.replies} replies</span>
                  </button> 
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-10 text-center">
          <button className="px-6 py-2 font-normal text-black bg-purple-100 rounded-md hover:bg-purple-200">
            Browse the forum
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
