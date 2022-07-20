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
import "./Homepage5.css";

function Homepage5(props) {
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
    plastic1,
    metal,
    trash,
    rectangle29,
    group,
    plastic2,
    plasticItemsDetectedThisWeek,
    number,
    done,
    uploadAnotherVideo,
    group441Props,
    group442Props,
    group75Props,
    frame9Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="homepage3 screen">
        <div className="overlap-group18-3">
          <img className="overlap-group18-item-2" src={homepageBackgroundMask} />
          <div className="daily-live-count-4 poppins-semi-bold-onyx-18px">{dailyLiveCount}</div>
          <div className="of-top-categories-2 poppins-normal-silver-chalice-14px">{ofTopCategories}</div>
          <div className="for-all-categories-4 poppins-normal-silver-chalice-14px">{forAllCategories}</div>
          <div className="of-top-6-categories-2 poppins-normal-silver-chalice-14px">{ofTop6Categories}</div>
          <div className="recommendations-4 poppins-semi-bold-onyx-18px">{recommendations}</div>
          <div className="based-on-your-activity-4 poppins-normal-silver-chalice-14px">{basedOnYourActivity}</div>
          <img className="line-1-4" src={line1} />
          <div className="your-activity-4 poppins-semi-bold-onyx-18px">{yourActivity}</div>
          <div className="total-count-4 poppins-semi-bold-onyx-18px">{totalCount}</div>
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
          <img className="line-10-5" src={line10} />
          <div className="surname-16 poppins-normal-masala-16px">{surname}</div>
          <div className="paper-16 poppins-normal-masala-16px">{paper}</div>
          <div className="cardboard-16 poppins-normal-masala-16px">{cardboard}</div>
          <div className="plastic-16 poppins-normal-masala-16px">{plastic1}</div>
          <div className="metal-16 poppins-normal-masala-16px">{metal}</div>
          <div className="trash-16 poppins-normal-masala-16px">{trash}</div>
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
            className={frame9Props.className}
          />
          <Group8522 />
          <img className="overlap-group18-item-2" src={rectangle29} />
          <div className="group-107">
            <Link to="/homepage" className="align-self-flex-end">
              <div className="close_fill0_wght300_grad0_opsz48-2-2">
                <img className="vector-156" src="/img/homepage-vector-1D54DE94-DB9C-4D19-A22F-927990F61BF7@2x.png" />
              </div>
            </Link>
            <div className="group-88">
              <div className="group-50" style={{ backgroundImage: `url(${group})` }}></div>
            </div>
            <div className="plastic-17 poppins-semi-bold-onyx-18px">{plastic2}</div>
            <div className="group-87">
              <p className="plastic-items-detected-this-week poppins-normal-silver-chalice-14px">
                {plasticItemsDetectedThisWeek}
              </p>
              <div className="number-114 poppins-semi-bold-onyx-16px">{number}</div>
            </div>
            <Link to="/homepage4">
              <div className="group-1-2">
                <div className="done poppins-semi-bold-white-16px">{done}</div>
              </div>
            </Link>
            <Link to="/homepage22">
              <div className="upload-another-video poppins-normal-black-14px">{uploadAnotherVideo}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage5;
