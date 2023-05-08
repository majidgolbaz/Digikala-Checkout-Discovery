import React from "react";
import { Link } from "react-router-dom";
import "../navBar/index.scss";

interface IMainNavigationHeaderProps {
  customClass?: string;
}
function MainNavigationHeader({
  customClass = "",
}: IMainNavigationHeaderProps) {
  return (
    <div className={`${customClass} navBar `}>
      <img alt="" src="/logo.svg" />
      <nav className="nav">
        <ul className="navList">
          <li key={1} className="navListItem">
            <Link className="link" to="/products">
              Product List
            </Link>
          </li>
          <li key={2} className="navListItem">
            <Link className="link" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <input type="search" />
    </div>
  );
}

export default MainNavigationHeader;
