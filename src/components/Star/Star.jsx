import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, countSold }) => {
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
    <div className="flex mb-4 text-sm ml-2">
      {ratingStar}
      <p className="ml-2 mt-1">số lượng: {countSold}</p>
    </div>
  );
};

export default Star;
