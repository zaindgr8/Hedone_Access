import React from 'react'

import judith from "../../Assets/judith.png"
import wissam from "../../Assets/wissam.png"

function Quote() {
  return (
<>
        <div className=" flex justify-evenly flex-col md:flex-row items-center py-5 px-10  md:space-x-6">
          {/* Image on the left */}
          <div className="md:w-1/2">
            <img
              src={wissam}
              alt="Team Member"
              className="max-w-sm mx-auto rounded-lg shadow-lg"
              width={250}
            />
          </div>
    
          <figure class="max-w-screen-md mx-auto text-center">
    <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <blockquote>
        <p class="text-xl italic font-medium text-gray-900 dark:text-white">"At Hedone Access, we specialize in crafting extraordinary moments that transcend dreams into reality. Our vision is to redefine luxury with seamless, personalized experiences."</p>
    </blockquote>
    <figcaption class="flex items-center justify-center mt-6 space-x-3">
        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-gray-900 dark:text-white">Wissam Serdoune</cite>
            <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">Co Founder - Hedone Access</cite>
        </div>
    </figcaption>
</figure>
        </div>
        <div className="flex justify-evenly flex-col md:flex-row items-center py-5 px-10  md:space-x-6">
          {/* Image on the left */}
    
          <figure class="max-w-screen-md mx-auto text-center">
    <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <blockquote>
        <p class="text-xl italic font-medium text-gray-900 dark:text-white">"We excel in shaping dreams into reality, elevating life's finest moments. Our vision redefines luxury: personalized, seamless, and extraordinary. Step into a world where desires know no bounds."</p>
    </blockquote>
    <figcaption class="flex items-center justify-center mt-6 space-x-3">
        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-gray-900 dark:text-white">Judith Marcou</cite>
            <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">Co Founder - Hedone Access</cite>
        </div>
    </figcaption>
</figure>
<div className="md:w-1/2">
            <img
              src={judith}
              alt="Team Member"
              className="max-w-sm mx-auto rounded-lg shadow-lg"
              width={250}
            />
          </div>
        </div>
       


        </>
      );
    }


export default Quote