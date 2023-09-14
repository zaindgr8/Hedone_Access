import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImgSlider from "../Components1/imgslider.js"



const Services = () => {
  return (
   <div className='py-4'>
    <h1 className='uppercase underline font-bold font-Cinzel text-[36px] text-center text-black mb-5'>What We Offer?</h1>
<ImgSlider/>   
    </div>
  );
};

export default Services;
