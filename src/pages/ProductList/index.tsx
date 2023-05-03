import React from "react";
import ProductCard from "../../components/ProductCard";
import "../ProductList/index.scss";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../store/api/products/productAPI";

interface IProductListPageProps {
  customClass?: string;
}

function ProductListPage({ customClass = "" }: IProductListPageProps) {
  const { data, isLoading, error } = useGetAllProductsQuery();

  return (
    <div className="grid-container">
      {isLoading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {data?.products?.map((product, id) => (
        <Link to={`/products/${product.id}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
