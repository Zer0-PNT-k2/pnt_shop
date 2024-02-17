import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export default function Star({ stars, countSold, title, title1 }) {
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="w-5 h-5 text-yellow-400" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="w-5 h-5 text-yellow-400" />
        ) : (
          <AiOutlineStar className="w-6 h-6 text-yellow-400" />
        )}
      </span>
    );
  });

  return (
    <>
      <div className="inline-flex mx-auto text-sm">{ratingStar}</div>
      <div>
        <p className="ml-2 mb-4">
          {title} {countSold} {title1}
        </p>
      </div>
    </>
  );
}
