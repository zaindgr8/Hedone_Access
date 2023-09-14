import React from 'react';
import Button1 from '../Home/button1.js';
import hlogo from "../../Assets/hlogo.png"

function Boxes({ title, description, image }) {
  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 shadow-lg flex flex-col text-center rounded-lg mt-7">
      <div className="relative group">
        <img
          src={image}
          alt="Elegant Box"
          className="mx-auto w-[380px] h-[300px] object-cover rounded-t-lg transition-transform duration-300 transform scale-100 group-hover:scale-105"
        />
        <div className="p-4 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-t-lg">
          <img src={hlogo} width={100} height={100} />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 font-Cinzel">{title}</h2>
        <p className="text-gray-700 mb-4 font-Montserrat font-bold">
          {description}
        </p>
        <Button1 title="Learn More" />
      </div>
    </div>
  );
}

export default Boxes;
