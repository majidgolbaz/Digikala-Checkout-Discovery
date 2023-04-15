import React, { useState } from "react";

interface IStarRatingProps {
  customClass?: string;
  Rate: number;
}

interface IIndividualProp {
  marked: boolean;
  starId: number;
}
const Star = ({ marked, starId }: IIndividualProp) => {
  return (
    <span data-star-id={starId} className="star" role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

function StarRating({ customClass = "", Rate }: IStarRatingProps) {
  return (
    <div className={customClass}>
      {[...Array(4)].map((star) => {
        return <span className="star">&#9733;</span>;
      })}
    </div>
  );
}

export default StarRating;
