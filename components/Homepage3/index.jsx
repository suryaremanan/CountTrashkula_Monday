import React from "react";
import { Link } from "react-router-dom";
import Group44 from "../Group44";
import Group15 from "../Group15";
import Group75 from "../Group75";
import Group71 from "../Group71";
import Group79 from "../Group79";
import Group76 from "../Group76";
import Group73 from "../Group73";
import Group77 from "../Group77";
import Group69 from "../Group69";
import Group67 from "../Group67";
import Group74 from "../Group74";
import Group70 from "../Group70";
import Group78 from "../Group78";
import Group72 from "../Group72";
import Group66 from "../Group66";
import Group68 from "../Group68";
import Frame9 from "../Frame9";
import Group8522 from "../Group8522";
import "./Homepage3.css";

function Homepage3(props) {
  const {
    homepageBackgroundMask,
    dailyLiveCount,
    ofTopCategories,
    forAllCategories,
    ofTop6Categories,
    recommendations,
    basedOnYourActivity,
    line1,
    yourActivity,
    totalCount,
    line10,
    surname,
    paper,
    cardboard,
    plastic,
    metal,
    trash,
    rectangle25,
    allowCountTrashkul,
    allow,
    dontAllow,
    group441Props,
    group442Props,
    group75Props,
    frame9Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="homepage1 screen">
        <div className="overlap-group18-1">
          <img className="overlap-group18-item" src={homepageBackgroundMask} />
          <div className="daily-live-count-2 poppins-semi-bold-onyx-18px">{dailyLiveCount}</div>
          <div className="of-top-categories poppins-normal-silver-chalice-14px">{ofTopCategories}</div>
          <div className="for-all-categories-2 poppins-normal-silver-chalice-14px">{forAllCategories}</div>
          <div className="of-top-6-categories poppins-normal-silver-chalice-14px">{ofTop6Categories}</div>
          <div className="recommendations-2 poppins-semi-bold-onyx-18px">{recommendations}</div>
          <div className="based-on-your-activity-2 poppins-normal-silver-chalice-14px">{basedOnYourActivity}</div>
          <img className="line-1-2" src={line1} />
          <div className="your-activity-2 poppins-semi-bold-onyx-18px">{yourActivity}</div>
          <div className="total-count-2 poppins-semi-bold-onyx-18px">{totalCount}</div>
          <Group44
            name={group441Props.name}
            className={group441Props.className}
            expandMoreFILL1Wght300GRAD0Opsz482Props={group441Props.expandMoreFILL1Wght300GRAD0Opsz482Props}
          />
          <Group44
            name={group442Props.name}
            className={group442Props.className}
            expandMoreFILL1Wght300GRAD0Opsz482Props={group442Props.expandMoreFILL1Wght300GRAD0Opsz482Props}
          />
          <Group15 />
          <Group75 beerCanSvgrepoCom3Props={group75Props.beerCanSvgrepoCom3Props} />
          <Group71 />
          <img className="line-10-3" src={line10} />
          <div className="surname-14 poppins-normal-masala-16px">{surname}</div>
          <div className="paper-14 poppins-normal-masala-16px">{paper}</div>
          <div className="cardboard-14 poppins-normal-masala-16px">{cardboard}</div>
          <div className="plastic-14 poppins-normal-masala-16px">{plastic}</div>
          <div className="metal-14 poppins-normal-masala-16px">{metal}</div>
          <div className="trash-14 poppins-normal-masala-16px">{trash}</div>
          <Group79 />
          <Group76 />
          <Group73 />
          <Group77 />
          <Group69 />
          <Group67 />
          <Group74 />
          <Group70 />
          <Group78 />
          <Group72 />
          <Group66 />
          <Group68 />
          <Frame9
            subtract={frame9Props.subtract}
            group19={frame9Props.group19}
            overlapGroup1={frame9Props.overlapGroup1}
          />
          <Group8522 />
          <img className="overlap-group18-item" src={rectangle25} />
          <div className="group-103">
            <Link to="/homepage" className="align-self-flex-end">
              <div className="close_fill0_wght300_grad0_opsz48-2">
                <img className="vector-133" src="/img/homepage-vector-1D54DE94-DB9C-4D19-A22F-927990F61BF7@2x.png" />
              </div>
            </Link>
            <div className="allow-count-trashkul">{allowCountTrashkul}</div>
            <div className="group-container">
              <Link to="/homepage22">
                <div className="group-1-1">
                  <div className="allow poppins-semi-bold-white-16px">{allow}</div>
                </div>
              </Link>
              <Link to="/homepage">
                <div className="group-80">
                  <div className="overlap-group-17">
                    <div className="dont-allow">{dontAllow}</div>
                    <div className="rectangle-18"></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage3;
