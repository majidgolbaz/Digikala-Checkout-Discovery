import React from "react";
import ProductCard from "../../../components/ProductCard";

interface IProductCardPageProps {
  customClass?: string;
}
function ProductCardPage({ customClass = "" }: IProductCardPageProps) {
  return (
    <div className={customClass}>
      <ProductCard
        description="sss"
        discountPercentage={15}
        imageUrl="sss"
        price={2000}
        productCategory="as"
        productRating={12}
        title="as"
      />
    </div>
  );
}

export default ProductCardPage;
