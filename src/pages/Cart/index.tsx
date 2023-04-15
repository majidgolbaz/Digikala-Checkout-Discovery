import React from "react";

interface ICartPageProps {
  customClass?: string;
}
function CartPage({ customClass = "" }: ICartPageProps) {
  return <div className={customClass}>CartPage</div>;
}

export default CartPage;
