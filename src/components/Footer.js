import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-white ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="justify-between">
          <div className="flex flex-col gap-8 mt-20 mb-8 lg:flex-row lg:justify-between lg:mb-10 lg:items-center">
          <svg viewBox="0 0 123 27" className="fill-current gap-8 text-black w-[115.5px] h-[24px] mx-auto lg:mx-0 cursor-pointer">
          <title>SitePoint</title>
          <g fill-rule="evenodd">
          <path d="M31.36,16.75 C31.56,17.07 31.82,17.31 32.14,17.50 C32.46,17.68 32.82,17.82 33.23,17.89 C33.63,17.97 34.05,18.01 34.48,18.01 C34.81,18.01 35.16,17.99 35.52,17.94 C35.89,17.89 36.22,17.81 36.53,17.68 C36.83,17.55 37.08,17.36 37.28,17.11 C37.48,16.87 37.58,16.55 37.58,16.17 C37.58,15.64 37.37,15.24 36.96,14.97 C36.55,14.69 36.03,14.47 35.41,14.31 C34.79,14.14 34.12,13.99 33.39,13.85 C32.66,13.71 31.99,13.52 31.37,13.27 C30.75,13.03 30.23,12.68 29.82,12.23 C29.41,11.78 29.20,11.16 29.20,10.36 C29.20,9.73 29.34,9.20 29.63,8.75 C29.92,8.30 30.30,7.94 30.75,7.66 C31.20,7.38 31.72,7.17 32.29,7.03 C32.86,6.90 33.42,6.83 33.99,6.83 C34.71,6.83 35.38,6.89 35.99,7.01 C36.61,7.13 37.15,7.34 37.62,7.63 C38.09,7.93 38.46,8.33 38.75,8.83 C39.03,9.34 39.19,9.96 39.24,10.72 L37.13,10.72 C37.10,10.32 36.99,9.98 36.81,9.72 C36.63,9.46 36.40,9.25 36.12,9.08 C35.84,8.92 35.53,8.81 35.19,8.74 C34.85,8.66 34.51,8.63 34.16,8.63 C33.84,8.63 33.53,8.65 33.20,8.70 C32.88,8.75 32.59,8.83 32.32,8.95 C32.06,9.07 31.84,9.23 31.68,9.43 C31.51,9.63 31.43,9.89 31.43,10.21 C31.43,10.56 31.56,10.86 31.82,11.09 C32.07,11.32 32.40,11.51 32.80,11.66 C33.19,11.82 33.64,11.95 34.13,12.05 C34.63,12.15 35.13,12.26 35.62,12.37 C36.15,12.49 36.67,12.62 37.17,12.78 C37.67,12.94 38.12,13.15 38.51,13.42 C38.90,13.68 39.21,14.01 39.45,14.41 C39.69,14.81 39.81,15.31 39.81,15.90 C39.81,16.66 39.65,17.28 39.33,17.77 C39.01,18.27 38.58,18.67 38.06,18.98 C37.54,19.28 36.96,19.49 36.30,19.61 C35.65,19.73 35.00,19.79 34.36,19.79 C33.65,19.79 32.97,19.72 32.32,19.58 C31.68,19.43 31.11,19.20 30.61,18.87 C30.12,18.54 29.72,18.11 29.42,17.57 C29.13,17.03 28.96,16.38 28.93,15.61 L31.03,15.61 C31.05,16.06 31.16,16.44 31.36,16.75" id="Fill-1"></path><path d="M42.27,7.12 L44.37,7.12 L44.37,19.53 L42.27,19.53 L42.27,7.12 Z" id="Fill-2"></path><path d="M53.13,7.12 L53.13,8.92 L50.57,8.92 L50.57,16.62 C50.57,16.86 50.59,17.05 50.63,17.20 C50.67,17.34 50.75,17.46 50.87,17.54 C50.99,17.62 51.15,17.67 51.35,17.69 C51.56,17.71 51.83,17.73 52.16,17.73 L53.13,17.73 L53.13,19.53 L51.51,19.53 C50.97,19.53 50.50,19.49 50.11,19.42 C49.72,19.35 49.41,19.22 49.17,19.02 C48.93,18.83 48.75,18.56 48.64,18.21 C48.52,17.86 48.46,17.39 48.46,16.81 L48.46,8.92 L46.28,8.92 L46.28,7.12 L48.46,7.12 L48.46,3.39 L50.57,3.39 L50.57,7.12 L53.13,7.12" id="Fill-3"></path><path d="M64.53,18.73 C63.57,19.44 62.36,19.79 60.91,19.79 C59.89,19.79 59.00,19.63 58.25,19.31 C57.49,18.99 56.86,18.54 56.35,17.97 C55.84,17.39 55.45,16.70 55.20,15.90 C54.94,15.10 54.80,14.23 54.76,13.29 C54.76,12.34 54.91,11.48 55.21,10.69 C55.51,9.91 55.92,9.23 56.46,8.65 C57.00,8.08 57.63,7.63 58.37,7.31 C59.11,6.99 59.91,6.83 60.79,6.83 C61.93,6.83 62.87,7.05 63.63,7.51 C64.38,7.97 64.98,8.55 65.44,9.25 C65.89,9.96 66.20,10.73 66.38,11.56 C66.55,12.39 66.62,13.18 66.59,13.93 L56.99,13.93 C56.98,14.48 57.04,14.99 57.19,15.48 C57.34,15.97 57.58,16.40 57.91,16.78 C58.24,17.16 58.66,17.46 59.18,17.68 C59.69,17.90 60.29,18.01 60.98,18.01 C61.88,18.01 62.61,17.82 63.18,17.41 C63.75,17.02 64.13,16.41 64.31,15.59 L66.39,15.59 C66.11,16.98 65.49,18.03 64.53,18.73 L64.53,18.73 Z M64.02,10.76 C63.83,10.33 63.58,9.96 63.25,9.65 C62.93,9.34 62.55,9.09 62.11,8.90 C61.68,8.72 61.19,8.63 60.66,8.63 C60.12,8.63 59.62,8.72 59.19,8.90 C58.75,9.09 58.37,9.34 58.06,9.66 C57.75,9.98 57.50,10.35 57.32,10.78 C57.13,11.20 57.03,11.65 56.99,12.13 L64.36,12.13 C64.32,11.65 64.21,11.20 64.02,10.76 L64.02,10.76 Z" id="Fill-4"></path><path d="M70.95,7.12 L70.95,8.80 L71.00,8.80 C71.35,8.11 71.89,7.61 72.64,7.30 C73.38,6.98 74.20,6.83 75.09,6.83 C76.09,6.83 76.95,7.00 77.68,7.36 C78.42,7.71 79.03,8.18 79.52,8.78 C80.01,9.38 80.37,10.08 80.62,10.86 C80.87,11.65 80.99,12.48 80.99,13.36 C80.99,14.24 80.87,15.07 80.63,15.85 C80.39,16.64 80.03,17.32 79.54,17.91 C79.06,18.49 78.44,18.95 77.71,19.29 C76.97,19.62 76.12,19.79 75.14,19.79 C74.83,19.79 74.48,19.76 74.09,19.70 C73.70,19.63 73.32,19.53 72.94,19.38 C72.56,19.24 72.20,19.04 71.86,18.79 C71.52,18.55 71.23,18.24 71.00,17.87 L70.95,17.87 L70.95,24.26 L68.84,24.26 L68.84,7.12 L70.95,7.12 L70.95,7.12 Z M78.53,11.52 C78.37,10.97 78.13,10.48 77.81,10.04 C77.49,9.61 77.07,9.27 76.57,9.01 C76.06,8.76 75.47,8.63 74.79,8.63 C74.08,8.63 73.48,8.76 72.98,9.04 C72.49,9.31 72.08,9.67 71.77,10.10 C71.46,10.55 71.23,11.05 71.09,11.60 C70.95,12.17 70.88,12.73 70.88,13.31 C70.88,13.92 70.95,14.51 71.10,15.07 C71.25,15.64 71.48,16.14 71.81,16.57 C72.13,17.01 72.55,17.35 73.06,17.62 C73.57,17.88 74.19,18.01 74.92,18.01 C75.65,18.01 76.25,17.88 76.74,17.61 C77.23,17.34 77.62,16.98 77.92,16.53 C78.22,16.08 78.43,15.57 78.56,14.99 C78.70,14.41 78.76,13.82 78.76,13.21 C78.76,12.64 78.68,12.07 78.53,11.52 L78.53,11.52 Z" id="Fill-5"></path><path d="M83.17,10.78 C83.44,9.98 83.84,9.30 84.36,8.71 C84.89,8.13 85.55,7.67 86.33,7.33 C87.10,7.00 87.99,6.83 89.00,6.83 C90.03,6.83 90.92,7.00 91.69,7.33 C92.46,7.67 93.11,8.13 93.64,8.71 C94.17,9.30 94.56,9.98 94.83,10.78 C95.09,11.57 95.23,12.42 95.23,13.33 C95.23,14.25 95.09,15.09 94.83,15.88 C94.56,16.66 94.17,17.35 93.64,17.93 C93.11,18.52 92.46,18.97 91.69,19.30 C90.92,19.63 90.03,19.79 89.00,19.79 C87.99,19.79 87.10,19.63 86.33,19.30 C85.55,18.97 84.89,18.52 84.36,17.93 C83.84,17.35 83.44,16.66 83.17,15.88 C82.91,15.09 82.78,14.25 82.78,13.33 C82.78,12.42 82.91,11.57 83.17,10.78 L83.17,10.78 Z M85.32,15.34 C85.53,15.92 85.81,16.41 86.18,16.80 C86.54,17.19 86.96,17.49 87.45,17.70 C87.94,17.91 88.46,18.01 89.00,18.01 C89.55,18.01 90.06,17.91 90.55,17.70 C91.04,17.49 91.46,17.19 91.83,16.80 C92.19,16.41 92.48,15.92 92.68,15.34 C92.89,14.75 92.99,14.09 92.99,13.33 C92.99,12.58 92.89,11.91 92.68,11.33 C92.48,10.75 92.19,10.25 91.83,9.85 C91.46,9.45 91.04,9.15 90.55,8.94 C90.06,8.73 89.55,8.63 89.00,8.63 C88.46,8.63 87.94,8.73 87.45,8.94 C86.96,9.15 86.54,9.45 86.18,9.85 C85.81,10.25 85.53,10.75 85.32,11.33 C85.11,11.91 85.01,12.58 85.01,13.33 C85.01,14.09 85.11,14.75 85.32,15.34 L85.32,15.34 Z" id="Fill-6"></path><path d="M97.83,7.12 L99.94,7.12 L99.94,19.53 L97.83,19.53 L97.83,7.12 Z" id="Fill-7"></path><path d="M105.19,7.12 L105.19,9.08 L105.24,9.08 C106.12,7.58 107.51,6.83 109.41,6.83 C110.25,6.83 110.95,6.94 111.51,7.16 C112.08,7.39 112.53,7.70 112.88,8.10 C113.23,8.50 113.47,8.98 113.61,9.53 C113.75,10.08 113.82,10.69 113.82,11.36 L113.82,19.53 L111.71,19.53 L111.71,11.12 C111.71,10.36 111.48,9.75 111.02,9.30 C110.56,8.85 109.92,8.63 109.11,8.63 C108.46,8.63 107.91,8.72 107.43,8.92 C106.96,9.11 106.57,9.38 106.26,9.73 C105.94,10.08 105.71,10.50 105.55,10.97 C105.39,11.44 105.32,11.96 105.32,12.52 L105.32,19.53 L103.21,19.53 L103.21,7.12 L105.19,7.12" id="Fill-8"></path><path d="M122.47,7.12 L122.47,8.92 L119.92,8.92 L119.92,16.62 C119.92,16.86 119.94,17.05 119.98,17.20 C120.02,17.34 120.10,17.46 120.22,17.54 C120.33,17.62 120.49,17.67 120.70,17.69 C120.91,17.71 121.18,17.73 121.50,17.73 L122.47,17.73 L122.47,19.53 L120.86,19.53 C120.32,19.53 119.85,19.49 119.46,19.42 C119.07,19.35 118.76,19.22 118.52,19.02 C118.28,18.83 118.10,18.56 117.99,18.21 C117.87,17.86 117.81,17.39 117.81,16.81 L117.81,8.92 L115.63,8.92 L115.63,7.12 L117.81,7.12 L117.81,3.39 L119.92,3.39 L119.92,7.12 L122.47,7.12" id="Fill-9"></path><path d="M0.67,11.87 L2.62,13.76 L8.76,19.50 L11.41,16.94 C11.65,16.61 11.64,16.16 11.36,15.84 L8.94,13.72 L8.95,13.72 L6.34,11.19 C6.04,10.84 6.04,10.32 6.37,9.99 L13.38,3.21 L10.20,0.12 L0.68,9.31 C-0.05,10.02 -0.05,11.17 0.67,11.87" id="Fill-10"></path><path d="M21.60,15.15 L19.66,13.27 L13.51,7.53 L10.86,10.08 C10.62,10.42 10.64,10.87 10.91,11.19 L13.33,13.31 L13.33,13.31 L15.93,15.84 C16.24,16.19 16.23,16.70 15.91,17.04 L8.89,23.82 L12.08,26.91 L19.65,19.60 L21.60,17.71 C22.33,17.01 22.33,15.86 21.60,15.15" id="Fill-11"></path><path d="M44.55,4.58 C44.55,5.24 44.00,5.77 43.32,5.77 C42.64,5.77 42.09,5.24 42.09,4.58 C42.09,3.93 42.64,3.39 43.32,3.39 C44.00,3.39 44.55,3.93 44.55,4.58" id="Fill-12"></path><path d="M100.11,4.58 C100.11,5.24 99.56,5.77 98.88,5.77 C98.20,5.77 97.65,5.24 97.65,4.58 C97.65,3.93 98.20,3.39 98.88,3.39 C99.56,3.39 100.11,3.93 100.11,4.58" id="Fill-13"></path></g>
          </svg>
            <a id="footer-cta" href="/premium/pricing/?ref_source=sitepoint&amp;unlock=true&amp;ref_medium=hp-footer" className="inline-flex items-center justify-center border whitespace-nowrap font-medium focus-visible:opacity-80 disabled:bg-neutral-alpha-3 disabled:text-neutral-alpha-8 border-transparent px-4 py-2.5 text-sm rounded-md text-2 bg-purple-600 text-white hover:bg-primary-10 focus-visible:bg-purple-700 w-full lg:w-fit">
            Start Free Trial</a>
          </div>

          <div className="flex flex-wrap justify-between mt-10">

            <div className="mb-8 lg:mb-0">
              <h3 className="mb-4 text-sm font-semibold text-gray-600">Stuff we do</h3>
              <ul>
                <li><a href="/" className="font-medium leading-loose text-black/80 hover:text-gray-500">Premium</a></li>
                <li><a href="/" className="font-medium leading-loose text-black/80 hover:text-gray-500">Newsletters</a></li>
                <li><a href="/" className="font-medium leading-loose text-black/80 hover:text-gray-500">Learning paths</a></li>
                <li><a href="/" className="font-medium leading-loose text-black/80 hover:text-gray-500">Library</a></li>
                <li><a href="/" className="font-medium leading-loose text-black/80 hover:text-gray-500">Forums</a></li>
              </ul>
            </div>

            <div className="mb-8 lg:mb-0">
              <h3 className="mb-4 text-sm font-semibold text-gray-600">Contact</h3>
              <ul>
                <li><a href="/" className="font-medium leading-loose leading-32 text-black/80 hover:text-gray-500">Contact us</a></li>
                <li><a href="/" className="font-medium leading-loose leading-32 text-black/80 hover:text-gray-500">FAQ</a></li>
                <li><a href="/" className="font-medium leading-{20} text-black/80 hover:text-gray-500 leading-loose">Publish your book with us</a></li>
                <li><a href="/" className="font-medium leading-loose text-black/80 hover:text-gray-500">Write an article with us</a></li>
                <li><a href="/" className="font-medium leading-loose text-black/80 hover:text-gray-500">Advertise</a></li>
              </ul>
            </div>

            <div className="mb-8 lg:mb-0">
              <h3 className="mb-4 text-sm font-semibold text-gray-600">About</h3>
              <ul>
                <li><a href="/" className="font-medium leading-loose text-black/80 hover:text-gray-500">Our story</a></li>
                <li><a href="/" className="font-medium leading-loose text-black/80 hover:text-gray-500">Corporate memberships</a></li>
                <li><a href="/" className="font-medium leading-loose text-black/80 hover:text-gray-500">Terms of use</a></li>
                <li><a href="/" className="font-medium leading-loose text-black/80 hover:text-gray-500">Privacy policy</a></li>
              </ul>
            </div>

            <div className="mb-8 lg:mb-0">
              <h3 className="mb-4 text-sm font-semibold text-gray-600">Connect</h3>
              <ul>
                <li>
                  <a href="/" className="flex items-center gap-1 font-medium text-black/80 hover:text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4.167 17.5c-.459 0-.851-.163-1.177-.49a1.605 1.605 0 01-.49-1.177c0-.458.163-.85.49-1.177.326-.326.718-.49 1.177-.49.458 0 .85.164 1.177.49.326.327.49.719.49 1.177 0 .459-.164.851-.49 1.177-.327.327-.719.49-1.177.49zm11.25 0c-.361 0-.663-.132-.907-.396a1.625 1.625 0 01-.427-.937 11.43 11.43 0 00-1.093-3.782 11.69 11.69 0 00-2.24-3.135 11.69 11.69 0 00-3.135-2.24 11.43 11.43 0 00-3.782-1.093 1.624 1.624 0 01-.937-.427 1.182 1.182 0 01-.396-.907c0-.36.125-.656.375-.885.25-.23.549-.33.896-.302 1.708.153 3.309.587 4.802 1.302a14.229 14.229 0 013.948 2.781 14.23 14.23 0 012.781 3.948 13.882 13.882 0 011.302 4.802c.028.347-.073.646-.302.896-.23.25-.524.375-.885.375zm-5 0a1.24 1.24 0 01-.896-.365 1.66 1.66 0 01-.48-.885 6.326 6.326 0 00-.656-1.885 6.795 6.795 0 00-1.177-1.573 6.797 6.797 0 00-1.573-1.177 6.325 6.325 0 00-1.885-.657 1.66 1.66 0 01-.885-.479 1.24 1.24 0 01-.365-.896c0-.36.125-.66.375-.895.25-.237.549-.327.896-.271a8.821 8.821 0 012.844.885 9.34 9.34 0 014.083 4.083c.451.882.746 1.83.885 2.844.056.347-.034.646-.27.896a1.18 1.18 0 01-.896.375z"></path>
                  </svg>
                  <span className="leading-loose ">RSS</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="flex items-center gap-1 font-medium text-black/80 hover:text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 9.95a8.084 8.084 0 00-1.309-4.313 8.014 8.014 0 00-3.409-2.928A7.956 7.956 0 004.767 3.96 8.055 8.055 0 002.334 7.75a8.097 8.097 0 00-.027 4.51 8.056 8.056 0 002.389 3.816A7.98 7.98 0 008.75 18v-5.705h-2V9.95h2V8.17a2.863 2.863 0 01.766-2.286 2.829 2.829 0 012.234-.874c.6.008 1.198.062 1.79.161v2.013h-1a1.153 1.153 0 00-.953.32 1.167 1.167 0 00-.347.947v1.52h2.22l-.36 2.344h-1.85v5.635a7.988 7.988 0 004.848-2.741A8.08 8.08 0 0018 9.95z"></path>
                  </svg>
                  <span className="mr-2 leading-loose">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="flex items-center gap-1 font-medium text-black/80 hover:text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.248 7.543a1.38 1.38 0 00-.791-.791 2.305 2.305 0 00-.774-.144c-.439-.02-.57-.025-1.683-.025s-1.244.005-1.683.025a2.305 2.305 0 00-.774.144 1.38 1.38 0 00-.791.791c-.092.248-.14.51-.144.774-.02.439-.025.57-.025 1.683s.005 1.244.025 1.683c.003.265.052.527.144.774a1.381 1.381 0 00.791.791c.248.092.51.14.774.144.439.02.57.024 1.683.024s1.244-.004 1.683-.025c.265-.003.527-.051.774-.143a1.38 1.38 0 00.791-.791c.092-.248.14-.51.144-.774.02-.439.024-.57.024-1.683s-.004-1.244-.025-1.683a2.302 2.302 0 00-.143-.774zM10 12.14a2.14 2.14 0 110-4.28 2.14 2.14 0 010 4.28zm2.224-3.864a.5.5 0 110-1 .5.5 0 010 1zM11.39 10a1.39 1.39 0 11-2.78 0 1.39 1.39 0 012.78 0zM10 2a8 8 0 100 16 8 8 0 000-16zm4.142 9.717a3.059 3.059 0 01-.194 1.012 2.13 2.13 0 01-1.219 1.219 3.06 3.06 0 01-1.01.194c-.446.02-.587.025-1.719.025-1.132 0-1.273-.005-1.718-.025a3.059 3.059 0 01-1.011-.194 2.13 2.13 0 01-1.218-1.219 3.06 3.06 0 01-.195-1.01c-.02-.446-.025-.587-.025-1.719 0-1.132.005-1.273.025-1.718.007-.346.073-.688.194-1.011A2.13 2.13 0 017.27 6.05a3.058 3.058 0 011.01-.193c.446-.02.587-.025 1.719-.025 1.132 0 1.273.005 1.718.025.346.007.688.073 1.011.194a2.13 2.13 0 011.219 1.219c.12.323.186.665.194 1.01.02.446.025.587.025 1.719 0 1.132-.005 1.273-.025 1.717z"></path>
                  </svg>
                  <span className="mr-2 leading-loose">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="flex items-center gap-1 mb-3 font-medium text-black/80 hover:text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.734 5.636H5.381l3.456 4.942-3.277 3.786h1.072l2.682-3.106 2.172 3.106h3.353l-3.673-5.25 3.003-3.478h-1.055l-2.422 2.799-1.958-2.799zm4.482 7.863h-1.301L7.003 6.497h1.3l4.913 7.002z" clip-rule="evenodd"></path>
                  </svg><span className="mr-2 leading-loose">Twitter (X)</span>
                  </a>
                </li>
                <div className='flex justify-end text-gray-500'>
                  <p className='text-xs'>This site is protected by reCAPTCHA and the Google <br /> Privacy Policy and Terms of Service apply.</p>
                </div>
              </ul>
            </div>
          </div>
          <div className="text-gray-500">
          <h1 className='text-xs text-center text-neutral-10'>© 2000 - 2024 SitePoint Pty. Ltd.</h1>
          </div>
        </div>

        <div className="mt-10 text-gray-500">
          <a href="/" className="block mr-5 text-sm font-medium text-black/80 text-end">Back to top ^</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
