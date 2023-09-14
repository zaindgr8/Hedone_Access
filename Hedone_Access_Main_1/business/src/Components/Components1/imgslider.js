import React from 'react'
import Boxes from "../MemberShip/boxes.js"
import consultency from "../../Assets/consultency.avif"
import travel from "../../Assets/travel.avif"
import events from "../../Assets/events.avif"
import realState from "../../Assets/realState.avif"
import art from "../../Assets/art.avif"

function imgslider() {
  return (
   <>
   <div className='grid grid-cols-3'>
<Boxes title="Life Consultancy" description="Our top-tier private concierge company, assigns dedicated Lifestyle Managers to provide personalized consultancy services. These experts offer tailored recommendations and expert advice." image={consultency}/>
<Boxes title="Travel Services" description="With our expert travel recommendations and access to premium amenities, we ensure every trip is a memorable adventure designed around your desires. We specialize in crafting exceptional travel experiences. " image={travel}/>
<Boxes title="Event Organizers" description="Our team specializes in crafting unforgettable experiences, from private celebrations to corporate gatherings. With meticulous planning and attention to detail, we ensure that every event reflects your vision." image={events}/>
</div>
<div className='flex'>
<Boxes title="Premium Real Estate" description="Whether you seek a luxury home, investment property, or unique living space, we provide personalized guidance and access to exclusive listings to help you find your dream property." image={realState}/>
<Boxes title="Artistic Masterpieces" description="Offering an unparalleled experience in acquiring and appreciating unique artworks. With a keen eye for the extraordinary and a dedication to personalized service." image={art}/>
</div>
   </>
  )
}

export default imgslider