import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div>
      <div className="card border-dark-400 border w-96 bg-base-100 hover:shadow-xl">
        <figure className="px-10 pt-10 h-52 ">
          <img src={img} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body  text-start">
          <h2 className="card-title text-neutral-900 font-bold">{title}</h2>

          <div className="card-actions flex justify-between font-bold text-orange-500 ">
            <p>${price}</p>
           <div>
           <ArrowRightIcon className="h-6 w-6 text-orange-500" />
           </div>
         
          </div>
          <div>
              <Link to={`/checkout/${_id}`}><button className="btn btn-primary">buy now</button></Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
