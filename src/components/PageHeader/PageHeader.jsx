import React from "react";

const PageHeader = ({ title, backgroundImage }) => {
  return (
    <div
      className="relative h-64 md:h-96 bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center max-w-[1520px] mx-auto p-5">
        <h1 className="text-4xl md:text-6xl font-bold capitalize underline underline-offset-8 decoration-8 decoration-primary">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageHeader;
