import React from "react";
import "../SingleProduct/index.scss";
import { TiShoppingCart, TiTags } from "react-icons/ti";
import { TbStarFilled } from "react-icons/tb";
import { IProductProps } from "../../utils/types";

function SingleProduct({
  customClass = "",
  title,
  category,
  description,
  discountPercentage,
  price,
  rating,
  stock,
  thumbnail,
}: IProductProps) {
  return (
    <div className={`${customClass} mainContainer`}>
      <div className="productImageContainer">
        <img className="productImg" src={thumbnail} alt="" />
      </div>
      <div className="singleProductAttribute">
        <span className="productTitle">{title}</span>
        <span className="productDescription">{description}</span>
        <div className="productCategoryContainer">
          <span className="">
            <TiTags className="tagIcon" />
            {category}
          </span>
        </div>
        <span className="price">$ {price}</span>
        <span>% {discountPercentage}</span>
        <span>{stock}</span>
        <div className="productRatingContainer ">
          <div className="rating">
            <TbStarFilled className="RatingIcon" />
            <span className="">{rating}</span>
          </div>
        </div>
        <button className="btn">
          <TiShoppingCart className="shoppingIcon" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
