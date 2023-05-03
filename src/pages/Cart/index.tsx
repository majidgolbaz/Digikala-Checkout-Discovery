import React from "react";
import { useAppSelector } from "../../store/hooks";

interface ICartPageProps {
  customClass?: string;
}
function CartPage({ customClass = "" }: ICartPageProps) {
  const products = useAppSelector((state) => state.products.products);

  return (
    <div className={customClass}>
      {products.map((product) => (
        <div>{product.category}</div>
      ))}
    </div>
  );
}

export default CartPage;
