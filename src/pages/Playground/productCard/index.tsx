import React from "react";
import ProductCard from "../../../components/ProductCard";

interface IProductCardPageProps {
  customClass?: string;
}
function ProductCardPage({ customClass = "" }: IProductCardPageProps) {
  return (
    <div className={customClass}>
      <ProductCard />
    </div>
  );
}

export default ProductCardPage;
