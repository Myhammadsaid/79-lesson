import React from "react";

const SingleRoute = ({ onClick, className, image, title }) => {
  return (
    <div onClick={() => onClick()} className={className}>
      <img
        style={{ objectFit: "contain" }}
        width={50}
        height={50}
        src={image}
        alt="single"
      />
      <h1>{title}</h1>
    </div>
  );
};

export default SingleRoute;
