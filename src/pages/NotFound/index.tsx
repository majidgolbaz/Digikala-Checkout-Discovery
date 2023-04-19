import React from "react";

interface INotFoundPageProps {
  customClass?: string;
}
function NotFoundPage({ customClass = "" }: INotFoundPageProps) {
  return <div className={customClass}>NotFoundPage</div>;
}

export default NotFoundPage;
