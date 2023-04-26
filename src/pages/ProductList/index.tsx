import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import "../ProductList/index.scss";
import axios from "axios";
import { Link } from "react-router-dom";

interface IProductListPageProps {
  customClass?: string;
}

interface IProducts {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;
  thumbnail: string;
  rating: number;
}

function ProductListPage({ customClass = "" }: IProductListPageProps) {
  const [products, setProducts] = useState<IProducts[]>([]);
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
      {products.map((product, index) => (
        <Link to={`/products/${product.id}`}>
          <ProductCard
            customClass="grid-container"
            key={product.id + index}
            price={product.price}
            imageUrl={product.thumbnail}
            title={product.title}
            description={product.description}
            productCategory={product.category}
            productRating={product.rating}
            discountPercentage={product.discountPercentage}
          />
        </Link>
      ))}
    </div>
  );
}

export default ProductListPage;
