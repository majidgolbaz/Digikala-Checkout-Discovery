import React from "react";
import { useAppSelector } from "../../store/hooks";

interface ICartPageProps {
  customClass?: string;
}
function CartPage({ customClass = "" }: ICartPageProps) {
  const products = useAppSelector((state) => {
    console.log(state);
    return state.products.products;
  });
  console.log(products);

  return <div className={customClass}>CartPage</div>;
}

export default CartPage;
