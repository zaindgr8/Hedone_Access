import React from 'react'
import { motion } from "framer-motion"
import Boxes from './boxes.js';
import indivisual from "../../Assets/indivisual.avif";
import business from "../../Assets/business.avif"
// import useScrollPosition from '../../Hooks/useScrollPosition';
// import MyImg from './memberImg.jpg';

const MemberShip = () => {
    // const { scrollY } = useScrollPosition()
    const data = [{img:`/indivisual.avif`},{img:`/business.avif`}
    ]
  return (
    // <>
    // {scrollY > 90 ? 
    <motion.div className='py-10 bg-[#f5f6f7]'
    id="MemberShip"
    // initial={{opacity:0,y:-100}}
    // animate={{opacity:1,y:0}}
    // transition={{duration:0.4,delay:0.6}}
    >
      <h1 className='uppercase underline font-bold font-Cinzel text-[36px] text-center text-black'>Exclusive Memberships</h1>
<div className='flex'>
<Boxes title="Individual Membership" description="Each Hedone Access member is paired with a dedicated lifestyle manager, providing a personal touch to cater to their preferences and fulfill their requests seamlessly across all aspects of life." image={indivisual}/>
<Boxes title="Business Membership" description="Expanding beyond individuals, Hedone Access, including Corporate Memberships and Hedone Access Experiences, leverages our insights and expertise to enhance brand and business support for their clients." image={business}/>
</div>
      
    </motion.div>
    // :
    // <div className='h-[400px]'/>
    // }
    // </>
  )
}

export default MemberShip


// opacity-0 transition-opacity ease-in-out duration-500 transform hover:opacity-100