import React from "react";

const Product = ({ product }) => {
  const { name, picture, price, ratings } = product;
  console.log(product);
  return (
    <div>
      <div className="card  border bg-white w-72 h-72 shadow-xl">
        <img
          src={picture}
          alt="genius car"
          className="rounded-xl h-40 pl-20 pr-20 pt-14
          
          pb-10 m-4 bg-gray-100 "
        />

        <div className="text-center font-semibold py-2">
          <p className=""> ratings:{ratings}</p>
          <h2 className=" text-center"> product name : <span className="text-orange-500">{name}</span> </h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="">
            <p className="text-purple-600"> price : {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
