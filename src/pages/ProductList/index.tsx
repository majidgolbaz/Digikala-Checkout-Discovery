import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import "../ProductList/index.scss";

interface IProductListPageProps {
  customClass?: string;
}

interface IProductItemsProps {
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((products) => {
        setData(products.products);
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
      {data.map(
        ({
          id,
          title,
          description,
          thumbnail,
          price,
          rating,
          category,
          discountPercentage,
        }) => (
          <ProductCard
            customClass="grid-container"
            key={id}
            price={price}
            imageUrl={thumbnail}
            title={title}
            description={description}
            productCategory={category}
            productRating={rating}
            discountPercentage={discountPercentage}
          />
        )
      )}
    </div>
  );
}

export default ProductListPage;
