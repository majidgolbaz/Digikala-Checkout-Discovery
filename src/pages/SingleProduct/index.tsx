import SingleProduct from "../../components/SingleProduct";
import { useParams } from "react-router-dom";

import "../SingleProduct/index.scss";
import { useGetSingleProductQuery } from "../../store/api/products/productAPI";

interface ISingleProductPageProps {
  customClass?: string;
}

function SingleProductPage({ customClass = "" }: ISingleProductPageProps) {
  const { id } = useParams();
  const { data, isLoading, error } = useGetSingleProductQuery(`${id}`);
  console.log(data);

  return (
    <div className={`${customClass} mainConatiner `}>
      {isLoading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <SingleProduct
        thumbnail={data?.thumbnail ?? ""}
        category={data?.category ?? ""}
        description={data?.description ?? ""}
        discountPercentage={data?.discountPercentage ?? 0}
        price={data?.price ?? 0}
        rating={data?.rating ?? 0}
        stock={data?.stock ?? 0}
        title={data?.title ?? ""}
      />
    </div>
  );
}

export default SingleProductPage;
