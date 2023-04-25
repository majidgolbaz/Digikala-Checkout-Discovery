import React from "react";
import "../ProductCard/index.scss";
import { TbStarFilled } from "react-icons/tb";
import { TiShoppingCart, TiTags } from "react-icons/ti";

export interface IProductCardProps {
  customClass?: string;
  imageUrl: string;
  title: string;
  description: string;
  productCategory: string;
  productRating: number;
  price: number;
  discountPercentage: number;
}
function ProductCard({
  customClass = "",
  imageUrl,
  title,
  description,
  productCategory,
  productRating,
  price,
  discountPercentage,
}: IProductCardProps) {
  return (
    <div className="cardContainer">
      <div className="imageContainer">
        <img className="productImg" src={imageUrl} alt="" />
        <div className="categoryContainer">
          <span>
            <TiTags className="tagIcon" />
            {productCategory}
          </span>
        </div>
        <div className="Rating">
          <TbStarFilled className="RatingIcon" />
          <span>{productRating}</span>
        </div>
      </div>

      <div className="productInfo">
        <div>
          <span className="title">{title}</span>
          <span className="description">{description}</span>
        </div>
        <div className="addtocartContainer">
          <div className="priceContainer">
            <span className="Price">$ {price}</span>
            <span className="discountPercentage">% {discountPercentage}</span>
          </div>
          <button className="btn">
            <TiShoppingCart className="shoppingIcon" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
