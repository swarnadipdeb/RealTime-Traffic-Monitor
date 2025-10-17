
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { useContext } from 'react';
import CourseInfo from './components/CoursesInfo/CourseInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import {AppContext} from './components/context/UserContext';
import PurchaseSuccess from './components/PurchaseSuccess';

export default function App() {
    const {value, setval} = useContext(AppContext);
    let val = `/course-info/${value}`;
    console.log(value +" from app");
  return (
    <>
    <nav className="fixed top-0 left-0 right-0 h-16">
    <Header />
    </nav>
    <div className="mt-12 min-h-screen flex flex-col">
     {/* <Hero scrollToRef={courseRef}/> */}
      <Routes>
        <Route path = '/' element = {<Home/>}/>
         <Route path= {`course-info/${value}`} element = {<CourseInfo/>}/>
         <Route path= {`course-info/${value}/buy-now`} element = {<PurchaseSuccess/>}/>
         
        {/* <Route path= {`course-info/react-basics`} element = {<CourseInfo/>}/>
         <Route path="/course-info/advanced-javascript" element = {<CourseInfo/>}/>
         <Route path="/course-info/python-for-beginners" element = {<CourseInfo/>}/>
         <Route path="/course-info/data-structures" element = {<CourseInfo/>}/>
         <Route path="/course-info/data-science" element = {<CourseInfo/>}/>  */}
          {/* Note : If i try to use a placeholder it calls the url before loading the data from courseInfo, this need to be handled to use a placeholder here */}
         {/* <Route path={} element={<CourseInfo />} /> */}
      </Routes>
      <About />
      <Footer />
    </div>
    </>
  );
}