import React from "react";
import { BiSolidCalendarEvent } from "react-icons/bi";
import { MdAccessTime, MdScience, MdSportsFootball } from "react-icons/md";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const { _id, name, image, admission_date, events, sports, research } =
    college;
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-2xl duration-300 ">
      <figure>
        <img
          className="max-h-[310px]  w-full object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2 2xl:gap-5">
          <span className="flex items-center gap-1">
            <BiSolidCalendarEvent className="text-primary" />
            Events: {events}
          </span>
          <span className="flex items-center gap-1">
            <MdScience className="text-primary" />
            Research: {research}
          </span>
          <span className="flex items-center gap-1">
            <MdSportsFootball className="text-primary" />
            Sports: {sports}
          </span>
        </div>
        <h2 className="card-title mb-4">{name}</h2>
        <div className="card-actions flex justify-between items-center border-t border-t-primary py-4">
          <div className="flex items-center gap-2">
            <MdAccessTime /> {admission_date}
          </div>
          <Link to={`/college/${_id}`}>
            <button className="border-2 border-primary px-8 py-2 font-semibold hover:bg-primary hover:text-white hover:outline-2 hover:-outline-offset-8 outline-white outline rounded-md duration-300 hover:rounded-none">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
