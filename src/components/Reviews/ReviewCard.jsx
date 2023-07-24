import React from "react";

const ReviewCard = () => {
  return (
    <div className="bg-[#EBECEF] rounded-md border hover:shadow-2xl duration-300 h-full">
      <div className="object-cover object-center -translate-y-10 flex justify-center">
        <img
          src="https://images.pexels.com/photos/2078467/pexels-photo-2078467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Review Item 1"
          className="h-20 w-20 rounded-full border-[6px] border-white z-20"
        />
      </div>
      <div className="px-10 pb-10 pt-0">
        <p>
          I had an amazing experience shopping at your store. The quality of the
          products exceeded my expectations, and the customer service was
          exceptional. The staff was knowledgeable, friendly, and went above and
          beyond to assist me in finding the perfect items. I highly recommend
          your store to anyone looking for top-notch products and a fantastic
          shopping experience. I`ll definitely be a repeat customer!
        </p>
        <div className="text-center my-4">
          <h6 className="text-xl font-bold font-Nunito text-mediumPurple">
            John Doe
          </h6>
          <p>Co-Founder xyz</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
