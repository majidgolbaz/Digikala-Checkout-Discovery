import React from "react";

interface IProductListPageProps {
  customClass?: string;
}
function ProductListPage({ customClass = "" }: IProductListPageProps) {
  return <div className={customClass}>ProductListPage</div>;
}

export default ProductListPage;
