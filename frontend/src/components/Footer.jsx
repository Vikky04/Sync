import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-gray-200">Let's keep in touch, with Sync !</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-400">
              Find us on any of these platforms, we respond in 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex space-x-2">
              {/* Instagram */}
              <div className="mt-6 lg:mb-0 mb-6 flex space-x-2">
                {/* Instagram */}
                <a href="https://www.instagram.com/instagram" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-pink-500 p-2 rounded-full shadow-lg" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M7.75 2C5.13 2 3 4.13 3 6.75v10.5C3 19.87 5.13 22 7.75 22h8.5C18.87 22 21 19.87 21 17.25V6.75C21 4.13 18.87 2 16.25 2h-8.5zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm6 1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                    </svg>
                  </button>
                </a>

                {/* GitHub */}
                <a href="https://github.com/Vikky04" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-gray-800 p-2 rounded-full shadow-lg" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                      <path d="M12 .5C5.71.5.5 5.71.5 12S5.71 23.5 12 23.5 23.5 18.29 23.5 12 18.29.5 12 .5zm.68 17.94c-.35.07-.49-.15-.49-.35 0-.18 0-.64-.01-1.25-1.84.4-2.23-.89-2.23-.89-.32-.82-.78-1.04-.78-1.04-.64-.43.05-.42.05-.42.71.05 1.09.73 1.09.73.63 1.09 1.65.77 2.06.59.06-.46.25-.77.45-.95-1.47-.17-3.01-.73-3.01-3.24 0-.72.25-1.31.66-1.77-.07-.17-.29-.87.06-1.8 0 0 .55-.18 1.81.68a6.23 6.23 0 0 1 3.3 0c1.26-.86 1.81-.68 1.81-.68.35.93.13 1.63.06 1.8.41.46.66 1.05.66 1.77 0 2.52-1.55 3.07-3.03 3.24.26.22.48.66.48 1.34 0 .97-.01 1.74-.01 1.98 0 .2-.14.43-.5.35a7.5 7.5 0 0 1-6.83 0z" />
                    </svg>
                  </button>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/vikas-bishnoi-2a378a261" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-blue-700 p-2 rounded-full shadow-lg" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.46 17.25H6.23V10.1h2.23v7.15zM7.34 8.97a1.29 1.29 0 1 1 0-2.58 1.29 1.29 0 0 1 0 2.58zM18 17.25h-2.23v-3.34c0-.8-.03-1.83-1.12-1.83-1.12 0-1.29.87-1.29 1.77v3.4H11.13V10.1h2.13v.98h.03a2.33 2.33 0 0 1 2.09-1.14c2.24 0 2.66 1.47 2.66 3.38v4.94z" />
                    </svg>
                  </button>
                </a>

                {/* Email */}
                <a href="mailto:vbdara04@gmail.com" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-red-500 p-2 rounded-full shadow-lg" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M12 13.5l-8.5-6.5h17l-8.5 6.5zm0 1.5l-8.5-6.5v9c0 .55.45 1 1 1h15c.55 0 1-.45 1-1v-9l-8.5 6.5z" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap mb-6">
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-none">
                  <li><a className="text-gray-400 hover:text-white" href="#">About Us</a></li>
                  <li><a className="text-gray-400 hover:text-white" href="#">Jobs</a></li>
                  <li><a className="text-gray-400 hover:text-white" href="#">Pratice</a></li>
                  <li><a className="text-gray-400 hover:text-white" href="#">Courses</a></li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-none">
                  <li><a className="text-gray-400 hover:text-white" href="#">Terms & Conditions</a></li>
                  <li><a className="text-gray-400 hover:text-white" href="#">Privacy Policy</a></li>
                  <li><a className="text-gray-400 hover:text-white" href="mailto:vbdara04@gmail.com">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center py-1">
          <div className="text-sm text-gray-500 font-semibold">
            Copyright © {new Date().getFullYear()} Sync. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
