import React from 'react';

const ArticleSection = () => {
  const categories = [
    'AI', 'JavaScript', 'Computing', 'Design & UX', 'HTML & CSS', 'Entrepreneur', 
    'Web', 'PHP', 'WordPress', 'Mobile', 'Programming', 'Python'
  ];

  const categoryIcons = {
    'AI': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5"><g clip-path="url(#a)">
      <path fill="currentColor" d="m12.5 1.25-8.75 10h5.625L7.5 18.75l8.75-10h-5.625l1.875-7.5Z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs>
      </svg>
    ),
    'JavaScript': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path fill="currentColor" fill-rule="evenodd" d="M13.996 16.324c-1.309 0-2.155-.624-2.567-1.44l1.147-.665c.303.494.695.856 1.39.856.584 0 .956-.292.956-.694 0-.606-.808-.843-1.379-1.088-1.017-.432-1.692-.976-1.692-2.124 0-1.057.805-1.863 2.065-1.863.895 0 1.54.312 2.003 1.128l-1.097.705c-.242-.433-.503-.604-.906-.604-.414 0-.675.261-.675.604 0 .423.261.594.866.855 1.267.543 2.225.97 2.225 2.367 0 1.268-.997 1.963-2.336 1.963ZM10.75 14.2c0 1.46-.9 2.232-2.148 2.232-1.128 0-1.804-.431-2.136-1.181H6.447l1.146-.802c.221.393.421.67.904.67.463 0 .753-.234.753-.938V9.25h1.5v4.95ZM2.5 17.5h15v-15h-15v15Z" clip-rule="evenodd"></path>
      </svg>
    ),
    'Computing': (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
     <path fill="currentColor" d="M1.666 17.5a.806.806 0 0 1-.593-.24.806.806 0 0 1-.24-.593c0-.236.08-.434.24-.594.16-.16.357-.24.593-.24h16.667c.236 0 .434.08.594.24.16.16.24.358.24.594s-.08.434-.24.593a.807.807 0 0 1-.594.24H1.666ZM3.333 15c-.458 0-.85-.163-1.177-.49a1.605 1.605 0 0 1-.49-1.177V4.167c0-.459.164-.851.49-1.177.326-.327.719-.49 1.177-.49h13.333c.459 0 .851.163 1.177.49.327.326.49.718.49 1.177v9.166c0 .459-.163.851-.49 1.177-.326.327-.718.49-1.177.49H3.333Zm0-1.667h13.333V4.167H3.333v9.166Z"></path>
     </svg>

    ),
    'Design & UX':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 2.5H7.5a2.5 2.5 0 0 0 0 5m2.5-5v5m0-5h2.5a2.5 2.5 0 0 1 0 5m-5 0H10m-2.5 0a2.5 2.5 0 1 0 0 5m2.5-5h2.5m-2.5 0v5m2.5-5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-2.5 5H7.5m2.5 0V15a2.5 2.5 0 1 1-2.5-2.5"></path>
      </svg>
    ),
    'HTML & CSS':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path fill="currentColor" fill-rule="evenodd" d="M14.026 7.034H7.639l.152 1.481h6.083c-.09 1.298-.36 4.047-.458 5.298L10 14.775v.003l-.008.003-3.419-1.203-.234-2.84h1.676l.119 1.527 1.861.694H10l1.858-.666.191-2.296H6.265c-.028-.297-.388-4.154-.45-4.444h8.36c-.047.488-.094.99-.15 1.48ZM3.334 2.59l1.213 13.442 5.445 1.371 5.46-1.399L16.665 2.59H3.334Z" clip-rule="evenodd"></path>
      </svg>
    ),
    'Entrepreneur':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path fill="currentColor" d="M8.584 16.5c.625-1.264 1.458-2.108 2.5-2.531 1.041-.424 1.93-.636 2.666-.636.32 0 .632.028.938.084.305.055.604.125.896.208a7.366 7.366 0 0 0 .791-1.708c.195-.611.292-1.25.292-1.917 0-1.861-.646-3.437-1.938-4.73C13.438 3.98 11.861 3.334 10 3.334c-1.86 0-3.437.646-4.729 1.938C3.98 6.563 3.334 8.139 3.334 10c0 .624.08 1.221.24 1.79.159.57.399 1.098.718 1.584a9.017 9.017 0 0 1 1.77-.646 7.62 7.62 0 0 1 1.855-.229c.444 0 .872.038 1.281.115.41.076.816.177 1.219.302-.32.166-.622.36-.906.583a8.718 8.718 0 0 0-.802.708 2.658 2.658 0 0 0-.427-.041h-.365c-.444 0-.885.048-1.323.146a5.763 5.763 0 0 0-1.26.437c.444.444.94.816 1.49 1.115.548.298 1.135.51 1.76.635ZM10 18.333a8.115 8.115 0 0 1-3.25-.656 8.416 8.416 0 0 1-2.646-1.781 8.415 8.415 0 0 1-1.78-2.646A8.115 8.115 0 0 1 1.666 10c0-1.153.219-2.236.656-3.25a8.415 8.415 0 0 1 1.781-2.646A8.415 8.415 0 0 1 6.75 2.323 8.115 8.115 0 0 1 10 1.667c1.153 0 2.236.218 3.25.656a8.416 8.416 0 0 1 2.646 1.781 8.415 8.415 0 0 1 1.781 2.646 8.115 8.115 0 0 1 .657 3.25 8.115 8.115 0 0 1-.657 3.25 8.415 8.415 0 0 1-1.78 2.646 8.416 8.416 0 0 1-2.647 1.781 8.115 8.115 0 0 1-3.25.656ZM7.917 11.25a2.81 2.81 0 0 1-2.063-.854A2.81 2.81 0 0 1 5 8.333c0-.805.285-1.493.854-2.062a2.81 2.81 0 0 1 2.063-.854 2.81 2.81 0 0 1 2.062.854c.57.57.855 1.257.855 2.062a2.81 2.81 0 0 1-.855 2.063 2.81 2.81 0 0 1-2.062.854Zm0-1.667c.347 0 .642-.121.885-.364s.365-.538.365-.886c0-.347-.122-.642-.365-.885a1.205 1.205 0 0 0-.885-.365c-.347 0-.642.122-.885.365a1.205 1.205 0 0 0-.365.885c0 .348.122.643.365.886s.538.364.885.364Zm5.833 2.5a2.011 2.011 0 0 1-1.479-.604A2.011 2.011 0 0 1 11.667 10c0-.583.201-1.076.604-1.48a2.011 2.011 0 0 1 1.48-.603c.583 0 1.076.201 1.479.604.402.403.604.896.604 1.48 0 .582-.202 1.075-.604 1.478a2.012 2.012 0 0 1-1.48.604Z"></path>
      </svg>
    ),
    'Web':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.5 10h15m-15 0a7.5 7.5 0 0 0 7.5 7.5M2.5 10A7.5 7.5 0 0 1 10 2.5m7.5 7.5a7.5 7.5 0 0 1-7.5 7.5m7.5-7.5A7.5 7.5 0 0 0 10 2.5m0 15c-6.037-6.6-2.515-12.75 0-15m0 15c6.037-6.6 2.515-12.75 0-15"></path>
      </svg>
    ),
    'PHP':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path fill="currentColor" d="M15.666 8.75c.145.16.18.437.104.828-.08.407-.232.697-.458.872-.226.174-.57.26-1.033.26h-.697l.428-2.201h.785c.436 0 .726.08.871.241ZM5.85 8.509h-.786l-.428 2.202h.698c.462 0 .806-.087 1.032-.261.226-.175.379-.465.458-.872.076-.391.041-.667-.104-.828-.145-.16-.435-.241-.87-.241ZM19.98 10c0 2.9-4.468 5.25-9.98 5.25C4.488 15.25.02 12.9.02 10S4.488 4.75 10 4.75c5.512 0 9.98 2.35 9.98 5.25Zm-12.224.363c.118-.213.203-.448.253-.705.121-.624.03-1.11-.275-1.457-.304-.348-.787-.522-1.45-.522H4.08l-1.023 5.26h1.146l.272-1.398h.982c.433 0 .79-.045 1.07-.136.279-.091.533-.244.762-.458.192-.177.347-.371.467-.584Zm4.034 1.178.475-2.448c.097-.498.025-.859-.217-1.08-.242-.223-.682-.334-1.32-.334H9.717l.272-1.4H8.85l-1.023 5.262h1.137l.586-3.014h.909c.29 0 .48.048.57.144.09.097.108.277.057.542l-.453 2.328h1.156Zm4.89-3.34c-.304-.348-.787-.522-1.45-.522h-2.205l-1.022 5.26h1.146l.272-1.398h.982c.433 0 .79-.045 1.069-.136.28-.091.534-.244.763-.458.192-.177.347-.371.466-.584a2.36 2.36 0 0 0 .253-.705c.122-.624.03-1.11-.274-1.457Z"></path>
      </svg>
    ),
    'WordPress':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path fill="currentColor" fill-rule="evenodd" d="M16.581 6.402c.032.239.05.494.05.77 0 1.319-.122 1.393-2.86 9.311a7.498 7.498 0 0 0 2.81-10.081Zm-6.449 4.254-2.25 6.539a7.502 7.502 0 0 0 4.609-.12.679.679 0 0 1-.053-.103l-2.306-6.316Zm4.931-1.035c0-.927-.333-1.569-.619-2.068-.379-.618-.736-1.14-.736-1.759 0-.69.524-1.331 1.26-1.331.033 0 .065.004.097.006A7.472 7.472 0 0 0 10 2.5a7.49 7.49 0 0 0-6.266 3.38c.478.015 1.119.021 2.481-.085.405-.024.452.57.048.617 0 0-.406.048-.858.072l2.731 8.124 1.641-4.923L8.61 6.483a13.256 13.256 0 0 1-.786-.071c-.405-.024-.357-.642.047-.618 1.55.12 2.344.128 3.974 0 .405-.024.453.57.048.618 0 0-.407.048-.858.071l2.71 8.063c1.07-3.576 1.32-4.175 1.32-4.925ZM2.5 10a7.501 7.501 0 0 0 4.227 6.75L3.149 6.948A7.47 7.47 0 0 0 2.5 10Z" clip-rule="evenodd"></path>
      </svg>
    ),
    'Mobile':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 15h.008M9.167 5h1.666M7.667 17.5h4.666c.934 0 1.4 0 1.757-.182.314-.16.569-.414.728-.728.182-.357.182-.823.182-1.757V5.167c0-.934 0-1.4-.182-1.757a1.666 1.666 0 0 0-.728-.728c-.357-.182-.823-.182-1.757-.182H7.667c-.934 0-1.4 0-1.757.182-.314.16-.569.414-.728.728C5 3.767 5 4.233 5 5.167v9.666c0 .934 0 1.4.182 1.757.16.314.414.569.728.728.357.182.823.182 1.757.182Z"></path>
      </svg>
    ),
    'Programming':(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" class="size-5">
      <path fill="currentColor" d="m9.813 15.896 3.458-6.75a.39.39 0 0 0-.02-.406.396.396 0 0 0-.355-.198h-2.229V4.188c0-.112-.052-.177-.156-.198-.104-.021-.184.017-.24.114l-3.458 6.75a.39.39 0 0 0 .02.407.396.396 0 0 0 .355.197h2.229v4.355c0 .11.052.177.156.197.104.021.184-.017.24-.114ZM10 18.333a8.115 8.115 0 0 1-3.25-.656 8.416 8.416 0 0 1-2.646-1.781 8.415 8.415 0 0 1-1.78-2.646A8.115 8.115 0 0 1 1.666 10c0-1.153.219-2.236.656-3.25a8.415 8.415 0 0 1 1.781-2.646A8.415 8.415 0 0 1 6.75 2.323 8.115 8.115 0 0 1 10 1.667c1.153 0 2.236.218 3.25.656a8.416 8.416 0 0 1 2.646 1.781 8.415 8.415 0 0 1 1.781 2.646 8.115 8.115 0 0 1 .657 3.25 8.115 8.115 0 0 1-.657 3.25 8.415 8.415 0 0 1-1.78 2.646 8.416 8.416 0 0 1-2.647 1.781 8.115 8.115 0 0 1-3.25.656Zm0-1.666c1.848 0 3.42-.65 4.72-1.948 1.298-1.299 1.947-2.872 1.947-4.719 0-1.847-.65-3.42-1.948-4.719C13.421 3.983 11.848 3.333 10 3.333c-1.847 0-3.42.65-4.718 1.948-1.299 1.299-1.948 2.872-1.948 4.72 0 1.846.649 3.42 1.948 4.718C6.58 16.017 8.153 16.667 10 16.667Z"></path>
      </svg>
    ),
    'Python':(
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="size-5">
      <path fill="currentColor" d="M8.182 9.73h3.614c1.006 0 1.809-.83 1.809-1.84V4.446c0-.98-.828-1.717-1.81-1.88a11.289 11.289 0 0 0-1.884-.148 10.34 10.34 0 0 0-1.73.148c-1.53.27-1.808.836-1.808 1.88v1.38H9.99v.459H5.015c-1.052 0-1.972.632-2.26 1.834-.332 1.378-.347 2.238 0 3.677.257 1.071.871 1.835 1.923 1.835h1.244v-1.653c0-1.195 1.033-2.248 2.26-2.248Zm-.228-4.825a.683.683 0 0 1-.679-.687c0-.382.304-.692.679-.692.374 0 .679.31.679.692 0 .38-.305.687-.679.687Zm9.269 3.213c-.26-1.046-.756-1.834-1.81-1.834h-1.357V7.89c0 1.245-1.056 2.293-2.26 2.293H8.182c-.99 0-1.81.848-1.81 1.84v3.444c0 .98.853 1.558 1.81 1.838 1.145.337 2.243.398 3.614 0 .91-.263 1.809-.794 1.809-1.838V14.09H9.99v-.46h5.423c1.051 0 1.443-.733 1.809-1.834.377-1.133.361-2.223 0-3.677Zm-5.2 6.89c.376 0 .68.308.68.688a.686.686 0 0 1-.68.691.687.687 0 0 1-.679-.691c0-.38.306-.688.68-.688Z"></path>
      </svg>
    ),
  };

  const articles = [
    {
      image: 'https://uploads.sitepoint.com/wp-content/uploads/2024/08/1724332610docker-vs-podman-300x158.jpg',
      title: 'Comparing Docker and Podman: A Guide to Container Management Tools',
      author: 'Vultr',
    },
    {
      image: 'https://uploads.sitepoint.com/wp-content/uploads/2024/08/1724335848Deploy-Flask-Applications-300x158.jpg',
      title: 'How to Deploy Flask Applications on Vultr',
      author: 'Vultr',
    },
    {
      image: 'https://uploads.sitepoint.com/wp-content/uploads/2024/08/1724717284typescript-record-type-300x170.jpg',
      title: 'A Comprehensive Guide to Understanding TypeScript Record Type',
      author: 'Emmanuel Onyeyaforo',
    },
    {
      image: 'https://uploads.sitepoint.com/wp-content/uploads/2024/08/1725632494Top-7-High-Paying-Affiliate-Programs-for-Developers-and-Content-Creators-300x158.jpg',
      title: 'Top 7 High-Paying Affiliate Programs for Developers and Content Creators',
      author: 'SitePoint Sponsors',
    },
    {
      image: 'https://uploads.sitepoint.com/wp-content/uploads/2024/08/1723976708How-to-integrate-artificial-intelligence-into-office-software-the-ONLYOFFICE-Docs-case-study-3-300x300.jpg',
      title: 'How to integrate artifical intelligence into office software: the ONLYOFFICE Docs case study',
      author: 'SitePoint Sponsors',
    },
    {
      image: 'https://uploads.sitepoint.com/wp-content/uploads/2024/08/1723977138Momento-Migrates-Object-Cache-as-a-Service-to-Ampere-Altra-1-300x300.jpg',
      title: 'Momento Migrates Object Cache as a Service to Ampere Altra',
      author: 'Dave Neary',
    },
    {
      image: 'https://uploads.sitepoint.com/wp-content/uploads/2024/08/1723977618Untitled-design-300x158.jpg',
      title: 'Dev Hackathon: Reusable Creativity on Wix Studio',
      author: 'SitePoint Sponsors',
    },
    {
      image: 'https://uploads.sitepoint.com/wp-content/uploads/2024/08/172305067110-Amazing-Web-Developer-Resume-Examples-for-Different-Web-Dev-Specializations-300x300.webp',
      title: '10 amazing Web Developer resume Examples for Different Web Dev Specializations',
      author: 'SitePoint Sponsors',
    },
  ];

  return (
      <div className="container p-40 py-5 mt-12">

        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold opacity-90">Keep up to date on current trends and technologies</h2>
          <p className="mt-4 mb-10 text-gray-600">Check out our latest articles!</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 px-4 py-1 mt-12 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-gray-700 border border-gray-200 rounded-full hover:bg-gray-200"
            >
            {categoryIcons[category] || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}

              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 outline-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 focus:outline-none">
          {articles.map((article, index) => (
            <div key={index} className="overflow-hidden bg-white border border-gray-200 rounded-lg ">
              <img src={article.image} alt={article.title} className="object-cover w-full h-48" />
              <div className="p-4">
                <h3 className="mb-2 text-base font-medium ">{article.title}</h3>
                <p className="text-black-300">{article.author}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-5 py-3 font-normal text-black bg-purple-100 rounded-md hover:bg-purple-200">
            See all articles
          </button>
        </div>
      </div>
  )

};

export default ArticleSection;
