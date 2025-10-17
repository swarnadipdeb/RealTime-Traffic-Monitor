import axios from 'axios';
import React from 'react';
//import bgImage from '../assets/bg-res.svg';
//style={{ backgroundImage: `url(${bgImage})` }}
export default function Hero({ scrollToRef }) {
  const handleClick = () => {
    scrollToRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <section className="bg-[url('assets/bg-res.svg')] bg-cover bg-center p-10 flex flex-col md:flex-row items-center justify-between" >
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-3xl text-gray-300 font-bold mb-4">Empower Your Learning Journey</h2>
        <p className="mb-4 text-gray-200">Join our platform to access a wide range of tech courses and boost your career.</p>
        <button  onClick={handleClick} className="bg-blue-800 text-white px-4 py-2 rounded">Get Started</button>
      </div>
      {/* <div className="md:w-1/2">
        <div className="w-full h-64 bg-gray-300 rounded-lg">Image Placeholder</div>
      </div> */}
    </section>
  );
}
