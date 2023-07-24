import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container/Container";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { MdAccessTime, MdScience, MdSportsFootball } from "react-icons/md";
import { BiSolidCalendarEvent } from "react-icons/bi";

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
        <div className="py-5 md:flex justify-around gap-5 mx-auto">
          <div className="xl:max-w-[825px] md:max-w-[500px] lg:max-w-[550px]">
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
          <div className="w-full lg:max-w-[370px] h-fit shadow-xl">
            <div>
              <iframe
                className="w-full h-[280px]"
                src="https://www.youtube.com/embed/mGimjjMIRCA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="my-5 p-5 font-Poppins space-y-5">
                <h4 className="flex items-center gap-3 justify-between">
                  <span className="flex items-center gap-2">
                    <MdAccessTime size={20} className="text-primary" />
                    <span className="text-lg font-bold">Admission:</span>
                  </span>
                  {college.admission_date}
                </h4>
                <p className="flex items-center gap-3 my-2 justify-between">
                  <span className="flex items-center gap-2">
                    <BiSolidCalendarEvent size={20} className="text-primary" />
                    <span className="text-lg font-bold">Events:</span>
                  </span>
                  {college.events}
                </p>
                <p className="flex items-center gap-3 my-2 justify-between">
                  <span className="flex items-center gap-2">
                    <MdScience size={20} className="text-primary" />
                    <span className="text-lg font-bold">Research:</span>
                  </span>
                  {college.research}
                </p>
                <p className="flex items-center gap-3 my-2 justify-between">
                  <span className="flex items-center gap-2">
                    <MdSportsFootball size={20} className="text-primary" />
                    <span className="text-lg font-bold">Sports:</span>
                  </span>
                  {college.sports}
                </p>
              </div>
              <div className="px-5 pb-10">
                <Link to={`/admission/${college._id}`}>
                  <button className="bg-primary w-full py-4 text-lg font-semibold text-white font-Poppins rounded hover:bg-transparent hover:outline-2 hover:outline outline-primary hover:text-gray-800 duration-300">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CollegeDetails;
