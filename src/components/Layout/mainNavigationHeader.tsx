import React from "react";
import { Link } from "react-router-dom";

interface IMainNavigationHeaderProps {
  customClass?: string;
}
function MainNavigationHeader({
  customClass = "",
}: IMainNavigationHeaderProps) {
  return (
    <div className={customClass}>
      <nav>
        <ul>
          <li>
            <Link to="/products">Product List</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNavigationHeader;
