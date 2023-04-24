import React, { useEffect, useState } from "react";

interface IProductListPageProps {
  customClass?: string;
}

function ProductListPage({ customClass = "" }: IProductListPageProps) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((json) => console.log(json.products));
  }, []);

  return <div className={customClass}>ProductListPage</div>;
}

export default ProductListPage;
