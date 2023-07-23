import React from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../Shared/Container/Container";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CollegeDetails = () => {
  const college = useLoaderData();
  console.log(college);

  return (
    <>
      <div
        className="relative h-72 md:h-96 xl:h-[450px] bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${college.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center max-w-[1520px] mx-auto p-5">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold capitalize ">
              College: {college.name}
            </h1>
            <div className="mt-5">
              <span className="text-xl font-semibold">Review:</span>
              <div className="flex gap-2">
                <Rating
                  style={{ maxWidth: 110 }}
                  value={college.rating}
                  readOnly
                />{" "}
                {college.rating}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="py-5 flex">
          <div className="max-w-[825px]">
            <div className=" max-h-[550px] overflow-hidden">
              <img
                className="rounded-lg object-cover w-full h-full"
                src={college.image}
                alt=""
              />
            </div>
            <div className="my-8">
              <h4 className="text-2xl font-semibold font-Poppins mb-4">
                College Overview:
              </h4>
              <p className="text-gray-400 font-Poppins">{college.details}</p>
            </div>
          </div>
          {/* Right Side */}
          <div className="max-w-[370px]"></div>
        </div>
      </Container>
    </>
  );
};

export default CollegeDetails;
