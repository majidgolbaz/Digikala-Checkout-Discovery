import React from "react";

interface IMainNavigationHeaderProps {
  customClass?: string;
}
function MainNavigationHeader({
  customClass = "",
}: IMainNavigationHeaderProps) {
  return <div className={customClass}>MainNavigationHeader</div>;
}

export default MainNavigationHeader;
