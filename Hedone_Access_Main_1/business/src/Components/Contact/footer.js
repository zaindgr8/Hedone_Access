import React from 'react';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import hlogocrop from '../../Assets/hlogocrop.png';
import hlogo1crop from '../../Assets/hlogo1crop.png';
import { VscLocation } from 'react-icons/vsc';

const Footer = () => {
  return (
    
<footer class="bg-black dark:bg-gray-900">
<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-5 md:mb-0 mt-6">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src={hlogocrop} class="mr-3 w-30 h-20"  />
                  <img  src={hlogo1crop} class="h-10 mr-3"  />
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white font-Cinzel">Membership Types</h2>
                  <ul class="text-white dark:text-gray-400 font-medium font-Montserrat">
                      <li class="mb-4">
                          <a href="" class="hover:underline">Individual Membership</a>
                      </li>
                      <li>
                          <a href="" class="hover:underline">Corporate Membership</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white font-Cinzel">Recommended Services</h2>
                  <ul class="text-white dark:text-gray-400 font-medium font-Montserrat">
                      <li class="mb-4">
                          <a href="" class="hover:underline ">Travel & Accomodation</a>
                      </li>
                      <li className="mb-4">
                          <a href="" class="hover:underline">Premium Real Estate</a>
                      </li>
                      <li className="mb-4">
                          <a href="" class="hover:underline">Private Events</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white font-Cinzel">Address</h2>
                  <ul class="text-white dark:text-gray-400 font-medium font-Montserrat">
                      <li class="mb-4 flex items-center">
                      <VscLocation/>
                          <a href="#" class="hover:underline">Dubai, United Arab Emirates</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Majid Sultan - Building 142-0</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class=" font-Montserrat flex text-sm text-white sm:text-center dark:text-gray-400 items-center">© 2023 <a class="hover:underline px-2">We International Digital Marketing™</a>. <p className='px-2'>For Software Solutions </p><MdOutlineMarkEmailRead className='text-green-500'/> <p className='px-2'>zainulabideenbaloch@proton.me</p>
          </span>
          
      </div>
    </div>
</footer>

  );
};

export default Footer;
