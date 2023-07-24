import React, { useEffect, useState } from "react";
import Container from "../../../components/Shared/Container/Container";
import CollegeCard from "../../../components/College/CollegeCard";
import { Link } from "react-router-dom";

const PopularCollege = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("https://univista-server.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((err) => console.log(err));
  }, []);

  // Show only the first 6 items
  const sixColleges = colleges.slice(0, 6);

  return (
    <Container>
      <div className="text-center my-10">
        <p className="uppercase text-primary font-medium underline underline-offset-4 decoration-4 mb-2">
          college
        </p>
        <h2 className="capitalize font-Poppins text-4xl font-bold">
          our popular college
        </h2>
      </div>
      <div className="md:max-w-4xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 space-y-8 md:space-y-0">
        {sixColleges.map((college) => (
          <CollegeCard key={college._id} college={college} />
        ))}
      </div>
      <div className="text-center my-10">
        <Link to="/college">
          <button className="border-2 border-primary px-10 py-3 font-semibold hover:bg-primary hover:text-white hover:outline-2 hover:-outline-offset-8 outline-white outline rounded-sm duration-300 hover:rounded-none">
            See All
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default PopularCollege;
