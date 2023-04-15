import React from "react";

interface ISingleProductPageProps {
  customClass?: string;
}
function SingleProductPage({ customClass = "" }: ISingleProductPageProps) {
  return <div className={customClass}>SingleProductPage</div>;
}

export default SingleProductPage;
