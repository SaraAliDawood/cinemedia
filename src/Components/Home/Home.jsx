import React from "react";
import { FaCamera, FaVideo, FaMicrophone } from "react-icons/fa";
import backgroundImage from "../../assets/backgroundContact.jpg";

function Home() {
  return (
    <div
      className="min-h-screen pb-10 flex flex-col justify-center items-center text-white text-center "
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Content Wrapper */}
      <div className="     ">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl mt-20 font-bold leading-tight">
          Capturing Stories <br />
          Through Our{" "}
          <span className="text-blue-500">Lens</span>
          <span className="text-yellow-300">.</span>
        </h1>

        {/* Description + CTA */}
        <div className="flex flex-col  md:flex-row  md:items-center  md:justify-between sm:gap-20 mt-10">
   <div className="block">
   <p className="text-lg sm:text-xl text-blue-400 max-w-xl">
            Stay updated on what's happening in </p> 

           

        <p className="text-start text-lg sm:text-xl  text-blue-400 max-w-xl"> cinemedia.</p>
   </div>

          <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-8 py-3 text-lg rounded-md transition duration-300">
            GET QUOTE
          </button>
        </div>

        {/* Services Section */}
        <h2 className="my-16 text-3xl sm:text-4xl font-semibold">
          <span className="italic text-yellow-300 px-2">What</span> you <br/> get from us
        </h2>

        {/* Service Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pre-Production */}
          <div className="bg-white text-black rounded-lg p-8 flex flex-col items-center shadow-lg">
            <FaCamera className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold">Pre- Production</h3>
            <button className="mt-4 bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-6 py-2 text-lg rounded-md transition duration-300">
              LEARN MORE
            </button>
          </div>

          {/* Media Production */}
          <div className="bg-white text-black rounded-lg p-8 flex flex-col items-center shadow-lg">
            <FaVideo className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold">Media Production</h3>
            <button className="mt-4 bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-6 py-2 text-lg rounded-md transition duration-300">
              LEARN MORE
            </button>
          </div>

          {/* Event Coverage */}
          <div className="bg-white text-black rounded-lg p-8 flex flex-col items-center shadow-lg">
            <FaMicrophone className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold">Event Coverage</h3>
            <button className="mt-4 bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-6 py-2 text-lg rounded-md transition duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
