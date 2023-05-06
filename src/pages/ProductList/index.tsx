import React, { useState } from "react";
import ProductCard from "../../components/ProductCard";
import "../ProductList/index.scss";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../store/api/products/productAPI";
import Pagination from "../../components/pagination";

interface IProductListPageProps {
  customClass?: string;
}

function ProductListPage({ customClass = "" }: IProductListPageProps) {
  const [currentPage, setCurrentPage] = useState(1);

 
  const { data, isLoading, error } = useGetAllProductsQuery(2);

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
      <Pagination currentPage={0} pageSize={9} totalCount={data?.total ?? 0} siblingCount={2} onPageChange={function (pageNumber: number): void {
        throw new Error("Function not implemented.");
      } }/>
    </div>
  );
}

export default ProductListPage;
