import React, { useEffect, useState } from "react";
import Container from "../../../components/Shared/Container/Container";
import CollegeCard from "../../../components/College/CollegeCard";

const PopularCollege = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((err) => console.log(err));
  }, []);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
        {colleges.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </Container>
  );
};

export default PopularCollege;
