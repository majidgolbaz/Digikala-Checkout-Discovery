import React from "react";
import SingleProduct from "../../components/SingleProduct";

interface ISingleProductPageProps {
  customClass?: string;
}
function SingleProductPage({ customClass = "" }: ISingleProductPageProps) {
  return (
    <div className={customClass}>
      <SingleProduct />
    </div>
  );
}

export default SingleProductPage;
