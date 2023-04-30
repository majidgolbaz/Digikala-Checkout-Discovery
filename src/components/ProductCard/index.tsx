import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store";
import "../ProductCard/index.scss";
import { TbStarFilled } from "react-icons/tb";
import { TiShoppingCart, TiTags } from "react-icons/ti";
import { IProduct } from "../../pages/ProductList";

export interface IProductCardProps {
  product: IProduct;
  customClass?: string;
}
function ProductCard({ customClass = "", product }: IProductCardProps) {
  const {
    category,
    description,
    discountPercentage,
    id,
    price,
    rating,
    thumbnail,
    title,
  } = product;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // dispatch(addProduct({}));
  };

  return (
    <div className="cardContainer">
      <div className="imageContainer">
        <img className="productImg" src={thumbnail} alt="" />
        <div className="categoryContainer">
          <span>
            <TiTags className="tagIcon" />
            {category}
          </span>
        </div>
        <div className="Rating">
          <TbStarFilled className="RatingIcon" />
          <span>{rating}</span>
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
          <button className="btn" onClick={handleAddToCart}>
            <TiShoppingCart className="shoppingIcon" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
