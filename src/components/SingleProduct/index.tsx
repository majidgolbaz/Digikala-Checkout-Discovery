import React from "react";
import "../SingleProduct/index.scss";
import { TiShoppingCart, TiTags } from "react-icons/ti";
import { TbStarFilled } from "react-icons/tb";

interface ISingleProductProps {
  customClass?: string;
}
function SingleProduct({ customClass = "" }: ISingleProductProps) {
  return (
    <div className={`${customClass} mainContainer`}>
      <div className="productImageContainer">
        <img className="productImg" src="/_DSC0013.JPG" alt="" />
      </div>
      <div className="singleProductAttribute">
        <span className="productTitle">title</span>
        <span className="productDescription">
          descriptionsdfnskfsnjkfdnsjkfnjskfnjksnfjksnfjksnfjksnfjksnfksnfjsnfkjsdnfjksnfksjnfjksnfkjsnfjksnfjksnfjksnfsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        </span>
        <div className="productCategoryContainer">
          <span className="">
            <TiTags className="tagIcon" />
            category
          </span>
        </div>
        <span className="price">$ 2000</span>
        <span>15 %</span>
        <span>Stock : 65</span>
        <div className="productRatingContainer ">
          <div className="rating">
            <TbStarFilled className="RatingIcon" />
            <span className="">5.2</span>
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
