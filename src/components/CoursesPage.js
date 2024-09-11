import React from 'react';

const categories = [
  'JavaScript', 'PHP', 'Ruby', 'Mobile', 'Workflow', 
  'WordPress', 'Back End', 'HTML & CSS', 'Design & UX', 
  'Python', 'Web', 'Blockchain', 'Cloud & DevOps'
];

const courses = [
  {
    category: 'Python',
    title: 'Django A-Z: Build & Deploy Web Projects With Python & Django',
    image: 'https://cdn.sanity.io/images/708bnrs8/production/a3ff09589d7094bc0e764e7fea77bbe7cee7c77d-2000x1179.png?rect=76,0,1849,1179&w=320&h=204&auto=format',
  },
  {
    category: 'Workflow',
    title: 'Git & GitHub Masterclass: The Practical Bootcamp',
    image: 'https://cdn.sanity.io/images/708bnrs8/production/6328c347787cb4e21d9af0f8323924edeecb7e97-2000x1179.png?rect=76,0,1849,1179&w=320&h=204&auto=format',
  },
  {
    category: 'HTML & CSS',
    title: 'Web Development Foundation: Learn HTML5, CSS3 & Bootstrap',
    image: 'https://cdn.sanity.io/images/708bnrs8/production/9f2df951ab770fc80e34b0cc5c55f3f049e15135-2000x1179.png?rect=76,0,1849,1179&w=320&h=204&auto=format',
  },
  {
    category: 'Python',
    title: 'Python Data Structures and Algorithms: The Complete Bootcamp',
    image: 'https://cdn.sanity.io/images/708bnrs8/production/0187dfb3c1822dca5339c0bbaa45fed6c037d7db-750x442.png?rect=29,0,693,442&w=320&h=204&auto=format',
  },
  {
    category: 'Python',
    title: 'Python A-Z: Learn Python By Building 15 Projects',
    image: 'https://cdn.sanity.io/images/708bnrs8/production/3e6a2b5f3d68f786684eabc5ac8f1dbec8fc8335-750x442.png?rect=29,0,693,442&w=320&h=204&auto=format',
  },
  {
    category: 'JavaScript',
    title: 'React JS Masterclass: Zero to Job Ready With 10 Projects',
    image: 'https://cdn.sanity.io/images/708bnrs8/production/735badd0f16bc2e4932723146756f9ae4e350d56-2000x1179.png?rect=76,0,1849,1179&w=320&h=204&auto=format',
  },
  {
    category: 'Workflow',
    title: 'A Complete Guide to Learning ChatGPT 4, Midjourney, DALL-E  2, and AI',
    image: 'https://cdn.sanity.io/images/708bnrs8/production/3d6cce07790cc8e536ede8183cfa8e3c175e1c3f-2542x1432.png?rect=148,0,2246,1432&w=320&h=204&auto=format',
  },
  {
    category: 'JavaScript',
    title: 'Advanced React with   TypeScript',
    image: 'https://cdn.sanity.io/images/708bnrs8/production/e3b9af0c05a1b88a96a90097022495f26287cbe4-750x442.jpg?rect=29,0,693,442&w=320&h=204&auto=format',
  },
];

const CoursesPage = () => {
  const CategoryIcons = {
    'JavaScript':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path fill="currentColor" fill-rule="evenodd" d="M13.996 16.324c-1.309 0-2.155-.624-2.567-1.44l1.147-.665c.303.494.695.856 1.39.856.584 0 .956-.292.956-.694 0-.606-.808-.843-1.379-1.088-1.017-.432-1.692-.976-1.692-2.124 0-1.057.805-1.863 2.065-1.863.895 0 1.54.312 2.003 1.128l-1.097.705c-.242-.433-.503-.604-.906-.604-.414 0-.675.261-.675.604 0 .423.261.594.866.855 1.267.543 2.225.97 2.225 2.367 0 1.268-.997 1.963-2.336 1.963ZM10.75 14.2c0 1.46-.9 2.232-2.148 2.232-1.128 0-1.804-.431-2.136-1.181H6.447l1.146-.802c.221.393.421.67.904.67.463 0 .753-.234.753-.938V9.25h1.5v4.95ZM2.5 17.5h15v-15h-15v15Z" clip-rule="evenodd"></path>
      </svg>
    ),
    'PHP':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path fill="currentColor" d="M15.666 8.75c.145.16.18.437.104.828-.08.407-.232.697-.458.872-.226.174-.57.26-1.033.26h-.697l.428-2.201h.785c.436 0 .726.08.871.241ZM5.85 8.509h-.786l-.428 2.202h.698c.462 0 .806-.087 1.032-.261.226-.175.379-.465.458-.872.076-.391.041-.667-.104-.828-.145-.16-.435-.241-.87-.241ZM19.98 10c0 2.9-4.468 5.25-9.98 5.25C4.488 15.25.02 12.9.02 10S4.488 4.75 10 4.75c5.512 0 9.98 2.35 9.98 5.25Zm-12.224.363c.118-.213.203-.448.253-.705.121-.624.03-1.11-.275-1.457-.304-.348-.787-.522-1.45-.522H4.08l-1.023 5.26h1.146l.272-1.398h.982c.433 0 .79-.045 1.07-.136.279-.091.533-.244.762-.458.192-.177.347-.371.467-.584Zm4.034 1.178.475-2.448c.097-.498.025-.859-.217-1.08-.242-.223-.682-.334-1.32-.334H9.717l.272-1.4H8.85l-1.023 5.262h1.137l.586-3.014h.909c.29 0 .48.048.57.144.09.097.108.277.057.542l-.453 2.328h1.156Zm4.89-3.34c-.304-.348-.787-.522-1.45-.522h-2.205l-1.022 5.26h1.146l.272-1.398h.982c.433 0 .79-.045 1.069-.136.28-.091.534-.244.763-.458.192-.177.347-.371.466-.584a2.36 2.36 0 0 0 .253-.705c.122-.624.03-1.11-.274-1.457Z"></path>
      </svg>
    ),
    'Ruby':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path fill="currentColor" d="M5.714 5.64c2.222-2.22 5.09-3.531 6.19-2.413 1.1 1.116-.065 3.834-2.291 6.052-2.224 2.219-5.056 3.601-6.155 2.486-1.102-1.117.028-3.905 2.254-6.124l.002-.002Zm9.375-3.135a2.664 2.664 0 0 1 2.388 3.01l.002-.014.009-.02-.852 11.235-11.062.764a2.754 2.754 0 0 1-3.06-3.018l-.002.012L3.54 12.59l2.073 4.872 1.75-5.743-.019.005.01-.019 5.775 1.857-.87-3.411-.618-2.45 5.503-.357-.384-.32-3.951-3.242L15.09 2.5l-.002.005Z"></path>
      </svg>

    ),
    'Mobile':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 15h.008M9.167 5h1.666M7.667 17.5h4.666c.934 0 1.4 0 1.757-.182.314-.16.569-.414.728-.728.182-.357.182-.823.182-1.757V5.167c0-.934 0-1.4-.182-1.757a1.666 1.666 0 0 0-.728-.728c-.357-.182-.823-.182-1.757-.182H7.667c-.934 0-1.4 0-1.757.182-.314.16-.569.414-.728.728C5 3.767 5 4.233 5 5.167v9.666c0 .934 0 1.4.182 1.757.16.314.414.569.728.728.357.182.823.182 1.757.182Z"></path>
      </svg>
    ),
    'Workflow':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path fill="currentColor" d="M6.667 13.487v-.57c0-.707.426-1.33 1.072-1.706a5.84 5.84 0 0 1-1.518-.943C5.468 10.947 5 11.883 5 12.917v.57a2.498 2.498 0 0 0-1.667 2.346c0 1.379 1.122 2.5 2.5 2.5 1.379 0 2.5-1.121 2.5-2.5 0-1.085-.699-2-1.666-2.346Zm-.834 3.18a.834.834 0 1 1 .002-1.669.834.834 0 0 1-.002 1.669Zm7.5-10.155v.293c0 .82-.446 1.543-1.12 1.967a5.848 5.848 0 0 1 1.519.916A3.943 3.943 0 0 0 15 6.806v-.293a2.497 2.497 0 0 0 1.667-2.346c0-1.379-1.122-2.5-2.5-2.5a2.503 2.503 0 0 0-2.5 2.5c0 1.085.699 2 1.666 2.345Zm.834-3.179a.834.834 0 1 1-.002 1.669.834.834 0 0 1 .002-1.669Zm.779 10.137C14.604 11.042 12.52 9.167 10 9.167a3.337 3.337 0 0 1-3.267-2.675 2.5 2.5 0 0 0 1.6-2.325c0-1.379-1.121-2.5-2.5-2.5a2.503 2.503 0 0 0-2.5 2.5c0 1.105.725 2.033 1.721 2.363.342 2.427 2.426 4.303 4.946 4.303 1.613 0 2.96 1.151 3.267 2.675a2.5 2.5 0 0 0-1.6 2.325c0 1.379 1.121 2.5 2.5 2.5 1.378 0 2.5-1.121 2.5-2.5a2.495 2.495 0 0 0-1.721-2.363ZM5.833 3.333a.834.834 0 1 1-.001 1.669.834.834 0 0 1 .001-1.669Zm8.334 13.334a.834.834 0 1 1 .001-1.669.834.834 0 0 1-.001 1.669Z"></path>
      </svg>
    ),
    'WordPress':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path fill="currentColor" fill-rule="evenodd" d="M16.581 6.402c.032.239.05.494.05.77 0 1.319-.122 1.393-2.86 9.311a7.498 7.498 0 0 0 2.81-10.081Zm-6.449 4.254-2.25 6.539a7.502 7.502 0 0 0 4.609-.12.679.679 0 0 1-.053-.103l-2.306-6.316Zm4.931-1.035c0-.927-.333-1.569-.619-2.068-.379-.618-.736-1.14-.736-1.759 0-.69.524-1.331 1.26-1.331.033 0 .065.004.097.006A7.472 7.472 0 0 0 10 2.5a7.49 7.49 0 0 0-6.266 3.38c.478.015 1.119.021 2.481-.085.405-.024.452.57.048.617 0 0-.406.048-.858.072l2.731 8.124 1.641-4.923L8.61 6.483a13.256 13.256 0 0 1-.786-.071c-.405-.024-.357-.642.047-.618 1.55.12 2.344.128 3.974 0 .405-.024.453.57.048.618 0 0-.407.048-.858.071l2.71 8.063c1.07-3.576 1.32-4.175 1.32-4.925ZM2.5 10a7.501 7.501 0 0 0 4.227 6.75L3.149 6.948A7.47 7.47 0 0 0 2.5 10Z" clip-rule="evenodd"></path>
      </svg>
    ),
    'Back End':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.833 6.667 2.5 9.744l3.333 3.59m8.334-6.667L17.5 9.744l-3.333 3.59m-2.5-10L8.333 16.666"></path>
      </svg>
    ),
    'HTML & CSS':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path fill="currentColor" fill-rule="evenodd" d="M14.026 7.034H7.639l.152 1.481h6.083c-.09 1.298-.36 4.047-.458 5.298L10 14.775v.003l-.008.003-3.419-1.203-.234-2.84h1.676l.119 1.527 1.861.694H10l1.858-.666.191-2.296H6.265c-.028-.297-.388-4.154-.45-4.444h8.36c-.047.488-.094.99-.15 1.48ZM3.334 2.59l1.213 13.442 5.445 1.371 5.46-1.399L16.665 2.59H3.334Z" clip-rule="evenodd"></path>
      </svg>
    ),
    'Design & UX':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 2.5H7.5a2.5 2.5 0 0 0 0 5m2.5-5v5m0-5h2.5a2.5 2.5 0 0 1 0 5m-5 0H10m-2.5 0a2.5 2.5 0 1 0 0 5m2.5-5h2.5m-2.5 0v5m2.5-5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-2.5 5H7.5m2.5 0V15a2.5 2.5 0 1 1-2.5-2.5"></path>
      </svg>
    ),
    'Python':(
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="size-5">
      <path fill="currentColor" d="M8.182 9.73h3.614c1.006 0 1.809-.83 1.809-1.84V4.446c0-.98-.828-1.717-1.81-1.88a11.289 11.289 0 0 0-1.884-.148 10.34 10.34 0 0 0-1.73.148c-1.53.27-1.808.836-1.808 1.88v1.38H9.99v.459H5.015c-1.052 0-1.972.632-2.26 1.834-.332 1.378-.347 2.238 0 3.677.257 1.071.871 1.835 1.923 1.835h1.244v-1.653c0-1.195 1.033-2.248 2.26-2.248Zm-.228-4.825a.683.683 0 0 1-.679-.687c0-.382.304-.692.679-.692.374 0 .679.31.679.692 0 .38-.305.687-.679.687Zm9.269 3.213c-.26-1.046-.756-1.834-1.81-1.834h-1.357V7.89c0 1.245-1.056 2.293-2.26 2.293H8.182c-.99 0-1.81.848-1.81 1.84v3.444c0 .98.853 1.558 1.81 1.838 1.145.337 2.243.398 3.614 0 .91-.263 1.809-.794 1.809-1.838V14.09H9.99v-.46h5.423c1.051 0 1.443-.733 1.809-1.834.377-1.133.361-2.223 0-3.677Zm-5.2 6.89c.376 0 .68.308.68.688a.686.686 0 0 1-.68.691.687.687 0 0 1-.679-.691c0-.38.306-.688.68-.688Z"></path>
      </svg>
    ),
    'Web':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.5 10h15m-15 0a7.5 7.5 0 0 0 7.5 7.5M2.5 10A7.5 7.5 0 0 1 10 2.5m7.5 7.5a7.5 7.5 0 0 1-7.5 7.5m7.5-7.5A7.5 7.5 0 0 0 10 2.5m0 15c-6.037-6.6-2.515-12.75 0-15m0 15c6.037-6.6 2.515-12.75 0-15"></path>
      </svg>
    ),
    'Blockchain':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path fill="currentColor" d="m15.936 6.219-3.833-3.884a2.176 2.176 0 0 0-1.562-.668 2.157 2.157 0 0 0-1.563.668L5.134 6.219l5.386 2.716 5.416-2.716Zm1.471 1.568.76.769a2.191 2.191 0 0 1 .666 1.579 2.209 2.209 0 0 1-.665 1.579l-6.126 6.25c-.145.151-.314.276-.5.37v-7.578l5.865-2.969Zm-13.814 0-.76.769a2.19 2.19 0 0 0-.666 1.579 2.21 2.21 0 0 0 .665 1.579l6.127 6.25c.146.151.314.276.5.37v-7.578L3.593 7.787Z"></path>
      </svg>
    ),
    'Cloud & DevOps':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 15a2.5 2.5 0 0 1-5 0m5 0a2.5 2.5 0 0 0-2.5-2.5M13 15h5M8 15a2.5 2.5 0 0 1 2.5-2.5M8 15H3m7.5-2.5V10m-2 0c-1.657 0-3-1.283-3-2.866 0-1.313 1-2.525 2.5-2.759A3.16 3.16 0 0 1 10.883 2.5c1.664 0 3.024 1.244 3.117 2.813a2.5 2.5 0 0 1 1.5 2.275C15.5 8.92 14.38 10 13 10H8.5Z"></path>
      </svg>
    )
  };
  return (
    <div className="container py-56 p-44">
      <h1 className="mb-4 text-4xl font-bold text-center text-black text-opacity-90">Explore over 700 courses</h1>
      <p className="mb-8 text-[18px] text-center text-gray-600">
        Browse our comprehensive collection of courses, books, and tutorials on a wide range of development and design topics.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category, index) => (
          
          <button
            key={index}
            className="flex gap-1 px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-200"
          >
          {CategoryIcons[category] ||(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            ></svg>
          )}
            {category}
          </button>
        ))}
      </div>

      <div className="grid justify-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
        {courses.map((course, index) => (
          <div key={index} className="overflow-hidden bg-white rounded-none cursor-pointer hover:opacity-80">
            <img src={course.image} alt={course.title} className="object-cover w-full h-48 hover:bg-white" />
            <div className="p-1 font-medium ">
              <h2 className="text-base hover:bg-white">{course.category}</h2>
              <p className="font-normal text-gray-700 hover:bg-white">{course.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 -mb-0.5">
        <button className="px-6 py-3 text-black rounded-lg bg-white-600 hover:bg-blue-100 hover:text-blue">
          Browse Premium Library
        </button>
      </div>
    </div>
  );
};

export default CoursesPage;
