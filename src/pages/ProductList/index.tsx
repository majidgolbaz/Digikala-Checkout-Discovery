import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import "../ProductList/index.scss";
import { Link } from "react-router-dom";
import { IProductProps } from "../../utils/types";

interface IProductListPageProps {
  customClass?: string;
}

function ProductListPage({ customClass = "" }: IProductListPageProps) {
  const [products, setProducts] = useState<IProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setProducts(actualData.products);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid-container">
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {products.map((product) => (
        <Link to={`/products/${product.id}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
