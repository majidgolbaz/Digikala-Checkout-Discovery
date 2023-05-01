import React from "react";

interface IProductCardPageProps {
  customClass?: string;
}
function ProductCardPage({ customClass = "" }: IProductCardPageProps) {
  return (
    <div className={customClass}>
      
    </div>
  );
}

export default ProductCardPage;
