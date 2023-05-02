import React, { useEffect, useState } from "react";
import SingleProduct from "../../components/SingleProduct";
import { useParams } from "react-router-dom";

import { IProductProps } from "../../utils/types";
import "../SingleProduct/index.scss";

interface ISingleProductPageProps {
  customClass?: string;
}

function SingleProductPage({ customClass = "" }: ISingleProductPageProps) {
  const { id } = useParams();
  const [product, setProduct] = useState<IProductProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((productData) => {
        setProduct(productData);
        console.log(productData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setProduct(undefined);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div className={`${customClass} mainConatiner `}>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <SingleProduct
        thumbnail={product?.thumbnail ?? ""}
        category={product?.category ?? ""}
        description={product?.description ?? ""}
        discountPercentage={product?.discountPercentage ?? 0}
        price={product?.price ?? 0}
        rating={product?.rating ?? 0}
        stock={product?.stock ?? 0}
        title={product?.title ?? ""}
      />
    </div>
  );
}

export default SingleProductPage;
