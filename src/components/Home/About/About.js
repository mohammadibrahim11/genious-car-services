import React from "react";
import img from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero mb-44 bg-white-200">
    <div className="hero-content flex-col lg:flex-row ">
      <div className=" w-1/2 relative">
      <img src={img}  alt="" className="w-lg rounded-lg shadow-2xl ml-28" style={{height:"373px", width:"363px"}} />
      <img src={parts}  alt="" className="w-lg rounded-lg shadow-2xl absolute left-72  top-44 bottom-0" style={{height:"283px", width:"273px"}} />
      </div>

      <div className=" w-1/2 pt-7 ">
        <h1 className="text-xl font-bold text-orange-400 py-3 mt-5">about us</h1>
        <h1 className="text-3xl font-bold ">We are qualified <br /> & of experience <br /> in this field</h1>
        <p className="py-3 w-4/5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
        <p className="py-8 w-4/5">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        <button className="btn btn-primary bg-orange-500 border-none hover:bg-orange-600">Get more info</button>
      </div>
    </div>
  </div>
  );
};

export default About;
