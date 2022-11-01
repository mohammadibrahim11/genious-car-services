import React from 'react';
import { Link } from 'react-router-dom';

const Slider = ({slide}) => {
    const {image,id ,prev,next} = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carousel-img">
        <img src={image} className="w-full"/>
        </div>
 
         <div className="absolute flex justify-end  transform -translate-y-1/2 left-24 top-80">
           <h1 className="text-white text-6xl font-bold leading-tight">
             Affordable <br /> Price For Car <br /> Servicing
           </h1>
         </div>
 
         <div className="absolute flex justify-end  transform -translate-y-1/2 left-24  top-2/4 mt-9 w-1/3 ">
           <p className="text-gray-500">
             There are many variations of passages of available, but the majority
             have suffered alteration in some form
           </p>
         </div>
 
         <div className="absolute flex justify-end  transform -translate-y-1/2  top-2/3 mt-9 left-28 ">
        

         <button className="btn btn-outline btn-warning mr-5">latest projects</button>
         <button className="btn btn-outline btn-warning">latest projects</button>
   
         </div>
 
         <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-1/4">
           <a href={`#slide${prev}`} className="btn btn-circle mr-5">
             ❮
           </a>
           <a href={`#slide${next}`} className="btn btn-circle">
       
             ❯
           </a>
         </div>
       </div>
    );
};

export default Slider;