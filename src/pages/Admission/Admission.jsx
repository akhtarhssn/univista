import React from "react";
import Container from "../../components/Shared/Container/Container";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const Admission = () => {
  const colleges = useLoaderData();
  return (
    <div>
      <PageHeader
        title={"Start Your Career"}
        backgroundImage={
          "https://images.unsplash.com/photo-1541339907198-e08756dedf3f"
        }
      />
      <Container>
        {colleges.map((college) => (
          <div
            key={college._id}
            className="w-full max-w-7xl mx-auto rounded-md shadow my-10 border p-5 md:flex items-center gap-8"
          >
            <div className="w-full md:w-40 h-full md:h-40">
              <img
                className="w-full h-full object-cover rounded-md"
                src={college.image}
                alt=""
              />
            </div>
            <div className="md:flex items-center justify-between w-full">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-Poppins mt-4 md:mt-0">
                  {college.name}
                </h2>
                <div className="my-5">
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
              <div className="text-center md:text-left my-5">
                <Link to={`/admission/${college._id}`}>
                  <button className="bg-primary px-10 xl:px-20 py-4 text-lg font-semibold text-white font-Poppins rounded hover:bg-transparent hover:outline-2 hover:outline outline-primary hover:text-gray-800 duration-300">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Admission;
