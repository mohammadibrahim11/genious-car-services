import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div>
      <div>
        <section className="bg-white container mx-auto">
          <div className="mx-auto px-4 py-16      sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Meet Our Team
              </h2>

              <p className="text-gring-offset-warm-gray-500 mx-auto mt-4 max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur praesentium natus sapiente commodi.
              </p>
            </div>

      <div className=" w-full mx-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-24 lg:gap-0  lg:grid-cols-3">

         <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">

              <div className="w-72 border rounded ">
                <img
                  alt="Woman"
                  src="https://i.ibb.co/R6Z2nFM/55.jpg"
                  className="p-3  h-60"
                />

                <blockquote className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                  <p className=" text-sm font-bold text-gray-700">
                    {" "}
                    Car Engine Plug
                  </p>
                  <p className="mt-1 text-xs font-medium text-gray-500">
                    Engine Expert
                  </p>
                  <div className="flex gap-3 py-3  w-50 mx-auto text-xl">
                    <Link to="/">
                      {" "}
                      <FaFacebook />
                    </Link>
                    <Link to="/">
                      {" "}
                      <FaInstagram />
                    </Link>
                    <Link to="/">
                      {" "}
                      <FaLinkedin />
                    </Link>
                    <Link to="/">
                      {" "}
                      <FaTwitter />
                    </Link>
                  </div>
                </blockquote>
              </div>

        </div>

            <div className="mt-16 grid grid-cols-1 gap-8     sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
              <div className="w-72 border">
                <img
                  alt="Woman"
                  src="https://i.ibb.co/R6Z2nFM/55.jpg"
                  className="p-3  h-60"
                />

                <blockquote className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                  <p className=" text-sm font-bold text-gray-700">
                    {" "}
                    Car Engine Plug
                  </p>
                  <p className="mt-1 text-xs font-medium text-gray-500">
                    Engine Expert
                  </p>
                  <div className="flex gap-3 py-3  w-50 mx-auto text-xl">
                    <Link to="/">
                      {" "}
                      <FaFacebook />
                    </Link>
                    <Link to="/">
                      {" "}
                      <FaInstagram />
                    </Link>
                    <Link to="/">
                      {" "}
                      <FaLinkedin />
                    </Link>
                    <Link to="/">
                      {" "}
                      <FaTwitter />
                    </Link>
                  </div>
                </blockquote>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3">
              <div className="w-72 border">
                <img
                  alt="Woman"
                  src="https://i.ibb.co/R6Z2nFM/55.jpg"
                  className="p-3  h-60"
                />

                <blockquote className="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                  <p className=" text-sm font-bold text-gray-700">
                    {" "}
                    Car Engine Plug
                  </p>
                  <p className="mt-1 text-xs font-medium text-gray-500">
                    Engine Expert
                  </p>
                  <div className="flex gap-3 py-3  w-50 mx-auto text-xl">
                    <Link to="/">
                      {" "}
                      <FaFacebook />
                    </Link>
                    <Link to="/">
                      {" "}
                      <FaInstagram />
                    </Link>
                    <Link to="/">
                      {" "}
                      <FaLinkedin />
                    </Link>
                    <Link to="/">
                      {" "}
                      <FaTwitter />
                    </Link>
                  </div>
                </blockquote>
              </div>
            </div>
     </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
