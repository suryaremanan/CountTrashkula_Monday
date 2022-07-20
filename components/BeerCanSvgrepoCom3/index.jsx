import React from "react";
import "./BeerCanSvgrepoCom3.css";

function BeerCanSvgrepoCom3(props) {
  const { src, className } = props;

  return (
    <div className={`beer-can-svgrepo-com-3 ${className || ""}`}>
      <img className="vector-14" src={src} />
    </div>
  );
}

export default BeerCanSvgrepoCom3;
