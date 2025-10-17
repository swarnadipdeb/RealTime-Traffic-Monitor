import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './context/UserContext';
import axios from 'axios';


  
export default function Courses({ refProp }) {
  const courseList = [["React Basics",'assets/2.svg'], ["Advanced JavaScript","assets/4.svg"], ["Python for Beginners","assets/3.svg"], ["Data Structures","assets/6.svg"],["Data Science","assets/7.svg"]];
  const {value, setval} = useContext(AppContext);


function handlePost(e){
 axios.post(
    `/api/backend`,  
    `course-enrolled`,          
    {
      headers: {                                
        'Content-Type': 'text/plain'
      }
    }
  );
}
  return (
    <section ref={refProp} className="p-10 bg-white">
      <h3 className="text-2xl font-bold mb-6">Popular Courses</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseList.map((course, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm">
            <div className="w-full bg-gray-100 h-50 mb-4">
              <img src={course[1]} alt="..." />
            </div>
            <div className='flex justify-between items-cente '>
            <h4 className="text-xl font-semibold">{course[0]}</h4>
            <Link to={`/course-info/${course[0].toLowerCase().replace(/ /g, "-")}`}> 
            <button className='bg-green-900 p-2 text-white rounded-md active:scale-90' onClick={
             function(){
              setval(course[0].toLowerCase().replace(/ /g, "-"))
              handlePost(course[0].toLowerCase().replace(/ /g, "-"));
             }
              } >  Enroll Now  </button>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}