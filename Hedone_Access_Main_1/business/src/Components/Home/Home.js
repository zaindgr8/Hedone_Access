import React from 'react';
import { motion } from "framer-motion"
import Button from "./button.js"
import { useEffect } from 'react';

const textAnimation = {
  hidden: {
    opacity: 0,
    y: -20, // You can adjust this value to control the starting position
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1, // Adjust the duration as needed
    },
  },
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const handlePage = () => {
    
   
    const targetElement = document.getElementById("Contact");
  
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); 
    }
  };


  return (
    <>
    <div id="header">
    <div
    className={`w-full flex flex-col relative justify-center items-center min-h-[100vh]`} 
    style={{ backgroundImage: `url('/mainbg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{duration:1.3,delay:0.8}}
    >
  <motion.p 
  className='text-white max-w-[65%] 
  text-center mx-auto font-Cinzel text-5xl 
  tracking-widest leading-10 quote font-extralight'
  variants={textAnimation}
      initial="hidden"
      animate="visible"
>
 <p>“Create Your Own FairyTale.” </p>
 
 <p className='text-white font-Montserrat  text-xl tracking-widest
  leading-7 content-center mt-5'>Are you ready to join an exclusive club 
                              where you can experience life like never before?
                              Thanks to our premium Private Concierge services! 
                              Reserve your dream lifestyle today and indulge 
                              in unparalleled luxury.</p>

                              <Button title="Learn More"/>
  </motion.p>

  
  
  

  {/* <motion.button 
  onClick={handlePage}
  className={` text-white px-10 py-3 mt-10 font-Gilda text-[22px] border-2 border-white hover:bg-white hover:text-black hover:transition hover:transform hover:scale-110 hover:ease-out hover:duration-500 `}
  initial={{opacity:0,y:-100}}
  animate={{opacity:1,y:0}}
  transition={{duration:1.5,delay:1.9}}
  >
    Contact Us
    </motion.button> */}
    
    
    
</div>
</div>
</>
  );
  
};

export default Home;