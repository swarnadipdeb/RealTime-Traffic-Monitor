import React from 'react';
import Hero from './Hero';
import Courses from './Courses';
import { useRef } from 'react';

export default function Home() {
    const courseRef = useRef(null);
  return (
    <section>
     <Hero scrollToRef={courseRef}/>
      <Courses refProp={courseRef}/>
    </section>
  );
}
