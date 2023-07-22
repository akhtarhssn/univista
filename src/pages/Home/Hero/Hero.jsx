import React from "react";
import { RiSearchLine } from "react-icons/ri";
import Container from "../../../components/Shared/Container/Container";

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center p-5 md:p-20 bg-gray-100">
      <Container>
        <div className="text-center">
          <p className="uppercase text-primary font-medium">
            for a better future
          </p>
          <h1 className="text-7xl font-extrabold uppercase leading-tight font-Poppins">
            Find and apply to <br /> your dream college
          </h1>
          <p className="my-5 text-xl">
            Univista Education Can Fulfil Your International Education Dream As
            Per Your Best Fit with world top universities and collages.
          </p>
          {/* Search Input Start */}
          <div className="flex">
            <input
              className="w-full outline outline-2 outline-gray-300 -outline-offset-2 p-5 rounded-tl-md rounded-bl-md bg-transparent focus:outline-primary"
              type="text"
              name="search"
              placeholder="Stanford University"
            />
            <button className="bg-primary py-3 px-10 rounded-tr-md rounded-br-md text-white">
              <RiSearchLine size={25} />
            </button>
          </div>
          {/* Search Input END */}
        </div>
      </Container>
    </div>
  );
};

export default Hero;
