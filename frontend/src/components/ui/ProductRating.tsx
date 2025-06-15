import React from "react";
import { MdOutlineStar, MdOutlineStarOutline } from "react-icons/md";

type ProductRatingProps = {
  rating: number; // out of 5
};

const ProductRating: React.FC<ProductRatingProps> = ({ rating }) => (
  <div className="product-rating">
    {Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <i key={i}>
          <MdOutlineStar />
        </i>
      ) : (
        <i key={i}>
          <MdOutlineStarOutline />
        </i>
      )
    )}
  </div>
);

export default ProductRating;