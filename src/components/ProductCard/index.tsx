import React from "react";
import { useAppDispatch } from "../../store/hooks";
import "../ProductCard/index.scss";
import { IProductProps } from "../../utils/types";
import { TiShoppingCart, TiTags } from "react-icons/ti";
import { TbStarFilled } from "react-icons/tb";
import { addProduct } from "../../store/store";

export interface IProductCardProps {
  product: IProductProps;
  customClass?: string;
}
function ProductCard({ customClass = "", product }: IProductCardProps) {
  const {
    category,
    stock,
    description,
    discountPercentage,
    id,
    price,
    rating,
    thumbnail,
    title,
  } = product;

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        id: id,
        title: title,
        description: description,
        category: category,
        price: price,
        discountPercentage: discountPercentage,
        stock: stock,
        rating: rating,
        thumbnail: thumbnail,
      })
    );
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
          <button className="btn" type="button" onClick={handleAddToCart}>
            <TiShoppingCart className="shoppingIcon" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
