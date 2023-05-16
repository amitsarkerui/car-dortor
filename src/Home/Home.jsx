import React, { useState } from "react";
import image1 from "../assets/images/homeCarousel/1.jpg";
import image2 from "../assets/images/homeCarousel/2.jpg";
import image3 from "../assets/images/homeCarousel/3.jpg";
import image4 from "../assets/images/homeCarousel/4.jpg";
import serviceImage1 from "../assets/images/about_us/person.jpg";
import serviceImage2 from "../assets/images/about_us/parts.jpg";
import { FaArrowLeft, FaAngleRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const loadedServices = useLoaderData();
  const [services, setServices] = useState(loadedServices);
  return (
    <div>
      {/* -------- Banner start ---------- */}
      <div className="carousel w-full h-[650px] rounded-xl ">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={image1} className="w-full object-cover " />
          <div className="absolute flex items-center left-0 top-0  h-full right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 0%)] ">
            <div className="ml-16">
              <h1 className="text-5xl font-bold text-white leading-snug">
                Affordable <br /> Price For Car <br /> Servicing !!!
              </h1>
              <p className="text-white max-w-[400px] mt-5 mb-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <span>
                <button className="btn bg-[#FF3811]">Discover More</button>
                <button className="btn btn-outline text-white border-white ml-4">
                  Latest Project
                </button>
              </span>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
            <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={image2} className="w-full object-cover " />
          <div className="absolute flex items-center left-0 top-0  h-full right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 0%)] ">
            <div className="ml-16">
              <h1 className="text-5xl font-bold text-white leading-snug">
                Request a free <br /> quote today !!!
              </h1>
              <p className="text-white max-w-[400px] mt-5 mb-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <span>
                <button className="btn bg-[#FF3811]">Discover More</button>
                <button className="btn btn-outline text-white border-white ml-4">
                  Latest Project
                </button>
              </span>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
            <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={image3} className="w-full object-cover " />
          <div className="absolute flex items-center left-0 top-0  h-full right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 0%)] ">
            <div className="ml-16">
              <h1 className="text-5xl font-bold text-white leading-snug">
                Get 30% Discount <br /> Save your money
              </h1>
              <p className="text-white max-w-[400px] mt-5 mb-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <span>
                <button className="btn bg-[#FF3811]">Discover More</button>
                <button className="btn btn-outline text-white border-white ml-4">
                  Latest Project
                </button>
              </span>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
            <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={image4} className="w-full object-cover " />
          <div className="absolute flex items-center left-0 top-0  h-full right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 0%)] ">
            <div className="ml-16">
              <h1 className="text-5xl font-bold text-white leading-snug">
                We have the <br />
                Best workers
              </h1>
              <p className="text-white max-w-[400px] mt-5 mb-8">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <span>
                <button className="btn bg-[#FF3811]">Discover More</button>
                <button className="btn btn-outline text-white border-white ml-4">
                  Latest Project
                </button>
              </span>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
            <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* -------- Banner End ---------- */}
      {/* -------- About us start ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="relative">
          <img
            className=" shadow-lg h-[460px] w-3/4 object-cover rounded-xl"
            src={serviceImage1}
            alt=""
          />
          <img
            className="shadow-xl absolute w-1/2 h-[180px] right-5 -bottom-16 rounded-lg border-8 border-white"
            src={serviceImage2}
            alt=""
          />
        </div>
        <div className="my-28">
          <p className="text-[#FF3811] font-semibold text-xl">About us</p>
          <h1 className="text-3xl font-bold max-w-md mt-3 mb-6">
            We are qualified & of experience in this field
          </h1>
          <p className="text-gray-400 max-w-md">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. <br />
            <br />
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn mt-7 border-none bg-[#FF3811]">
            Discover More
          </button>
        </div>
      </div>
      {/* -------- About us end ---------- */}
      {/* -------- Services start ---------- */}
      <div className="my-28">
        <div className="text-center">
          <p className="text-[#FF3811] font-semibold text-xl">Services</p>
          <h1 className="text-3xl font-bold max-w-md mt-2 mb-4 mx-auto">
            Our Services Area
          </h1>
          <p className="text-gray-400 max-w-md mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((singleServices) => (
            <div
              key={singleServices._id}
              className="border border-gray-200 rounded-2xl p-6"
            >
              <img
                className="h-[250px] w-full rounded-xl object-cover"
                src={singleServices.img}
                alt=""
              />
              <div className="flex items-end justify-between">
                <span>
                  <h2 className="text-xl font-bold mt-4 mb-2">
                    {singleServices.title}
                  </h2>
                  <p className="font-semibold text-[#FF3811]">
                    Price: ${singleServices.price}
                  </p>
                </span>
                <button className="btn btn-circle btn-outline text-xl">
                  <FaAngleRight></FaAngleRight>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
