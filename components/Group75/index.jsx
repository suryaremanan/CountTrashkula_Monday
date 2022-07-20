import React from "react";
import BeerCanSvgrepoCom3 from "../BeerCanSvgrepoCom3";
import "./Group75.css";

function Group75(props) {
  const { beerCanSvgrepoCom3Props } = props;

  return (
    <div className="group-75">
      <div className="overlap-group2-2">
        <BeerCanSvgrepoCom3 src={beerCanSvgrepoCom3Props.src} className={beerCanSvgrepoCom3Props.className} />
      </div>
      <div className="metal-1 poppins-medium-onyx-16px">Metal</div>
      <div className="number-30 poppins-medium-black-16px">21</div>
    </div>
  );
}

export default Group75;
