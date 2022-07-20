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
import "./Homepage4.css";

function Homepage4(props) {
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
    rectangle26,
    vector2,
    group441Props,
    group442Props,
    group75Props,
    frame9Props,
  } = props;

  async function load_model() {
    // It's possible to load the model locally or from a repo
    // You can choose whatever IP and PORT you want in the "http://127.0.0.1:8080/model.json"     just set it before in your https server
    const model = await loadGraphModel("http://127.0.0.1:8080/model.json");
    //const model = await loadGraphModel("https://raw.githubusercontent.com/hugozanini/TFJS-object-detection/master/models/web_model/model.json");
    return model;
}

  return (
    <div className="container-center-horizontal">
      <div className="homepage22 screen">
        <div className="overlap-group18-2">
          <img className="overlap-group18-item-1" src={homepageBackgroundMask} />
          <div className="daily-live-count-3 poppins-semi-bold-onyx-18px">{dailyLiveCount}</div>
          <div className="of-top-categories-1 poppins-normal-silver-chalice-14px">{ofTopCategories}</div>
          <div className="for-all-categories-3 poppins-normal-silver-chalice-14px">{forAllCategories}</div>
          <div className="of-top-6-categories-1 poppins-normal-silver-chalice-14px">{ofTop6Categories}</div>
          <div className="recommendations-3 poppins-semi-bold-onyx-18px">{recommendations}</div>
          <div className="based-on-your-activity-3 poppins-normal-silver-chalice-14px">{basedOnYourActivity}</div>
          <img className="line-1-3" src={line1} />
          <div className="your-activity-3 poppins-semi-bold-onyx-18px">{yourActivity}</div>
          <div className="total-count-3 poppins-semi-bold-onyx-18px">{totalCount}</div>
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
          <img className="line-10-4" src={line10} />
          <div className="surname-15 poppins-normal-masala-16px">{surname}</div>
          <div className="paper-15 poppins-normal-masala-16px">{paper}</div>
          <div className="cardboard-15 poppins-normal-masala-16px">{cardboard}</div>
          <div className="plastic-15 poppins-normal-masala-16px">{plastic}</div>
          <div className="metal-15 poppins-normal-masala-16px">{metal}</div>
          <div className="trash-15 poppins-normal-masala-16px">{trash}</div>
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
          <img className="overlap-group18-item-1" src={rectangle26} />
          <div className="group-104">
            <div className="rectangle-123"></div>
            <div className="flex-col-1">
              <Link to="/homepage">
                <div className="close_fill0_wght300_grad0_opsz48-2-1">
                  <img className="vector-154" src="/img/homepage-vector-1D54DE94-DB9C-4D19-A22F-927990F61BF7@2x.png" />
                </div>
              </Link>
              <Link to="/homepage3">
                <div className="group-86">
                  <div className="stop_fill1_wght400_grad0_opsz48-2-1">
                    <img className="vector-155" src={vector2} />
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

export default Homepage4;
