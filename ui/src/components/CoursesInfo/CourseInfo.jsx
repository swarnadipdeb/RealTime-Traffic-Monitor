import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import { AppContext } from "../context/UserContext";
import { Link } from 'react-router-dom';
import axios from 'axios';

    const courseMap = new Map([
  ["react-basics", [
    "Mastering React: From Beginner to Pro",
    "Learn modern React with hands-on projects, hooks, state management, and more. Perfect for developers looking to build scalable frontend apps."
  ]],
  ["advanced-javascript", [
    "Deep Dive into JavaScript: Master the Language of the Web",
    "Go beyond the basics with advanced JavaScript concepts like closures, async programming, prototypes, ES6+ features, and more. Ideal for developers aiming to write efficient and scalable JS code."
  ]],
  ["python-for-beginners", [
    "Python Fundamentals: Your Gateway to Programming",
    "Start your coding journey with Python. Learn variables, loops, functions, and basic data handling through practical examples. Great for beginners and aspiring developers."
  ]],
  ["data-structures", [
    "Mastering Data Structures: Build Efficient Code",
    "Learn core data structures such as arrays, linked lists, stacks, queues, trees, and graphs. Strengthen your problem-solving skills with real-world examples and coding challenges."
  ]],
  ["data-science", [
    "Data Science Essentials: From Zero to Insights",
    "Dive into the world of data with Python, statistics, data visualization, and machine learning fundamentals. Perfect for beginners aiming to break into data science."
  ]]
]);



export default function CourseInfo()  {
 const {value, setval} = useContext(AppContext);


function handlePost(){
 axios.post(
    `/api/backend`,    
    `course-purchased`,          
    {
      headers: {                                
        'Content-Type': 'text/plain'
      }
    }
  );
}
 let key = courseMap.get(value);
 console.log(`course-info/${value}/buy-now`)
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {key[0]}
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          {key[1]}
        </p>
        <Link to={`buy-now`}>
        <button onClick = {handlePost} className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Buy Now
        </button>
        </Link>
      </div>
    </div>
  );
};


