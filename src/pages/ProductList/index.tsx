import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import "../ProductList/index.scss";

interface IProductListPageProps {
  customClass?: string;
}

interface IProduct {
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
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((products) => {
        setData(products.products as IProduct[]);
        setError(null);
        console.log(products.products);
      })
      .catch((err) => {
        setError(err.message);
        setData([]);
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
      {data.map((product) => (
        <ProductCard
          customClass="grid-container"
          key={product.id}
          price={product.price}
          imageUrl={product.thumbnail}
          title={product.title}
          description={product.description}
          productCategory={product.category}
          productRating={product.rating}
          discountPercentage={product.discountPercentage}
        />
      ))}
    </div>
  );
}

export default ProductListPage;
