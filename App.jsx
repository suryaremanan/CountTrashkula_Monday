import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Homepage from "./components/Homepage";
import Homepage2 from "./components/Homepage2";
import Homepage3 from "./components/Homepage3";
import Homepage4 from "./components/Homepage4";
import Homepage5 from "./components/Homepage5";
import Homepage6 from "./components/Homepage6";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|home)">
          <Home {...homeData} />
        </Route>
        <Route path="/homepage">
          <Homepage {...homepageData} />
        </Route>
        <Route path="/homepage2">
          <Homepage2 {...homepage2Data} />
        </Route>
        <Route path="/homepage1">
          <Homepage3 {...homepage3Data} />
        </Route>
        <Route path="/homepage22">
          <Homepage4 {...homepage4Data} />
        </Route>
        <Route path="/homepage3">
          <Homepage5 {...homepage5Data} />
        </Route>
        <Route path="/homepage4">
          <Homepage6 {...homepage6Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const nextPlanFILL0Wght400GRAD0Opsz4812Data = {
    className: "next_plan_fill0_wght400_grad0_opsz48-2",
};

const beerCanSvgrepoCom31Data = {
    src: "/img/home-vector-CAD23810-17CB-450C-B5E5-329A1E84A1B3@2x.png",
};

const homeData = {
    maskGroup: "/img/home-mask-group-DE67C25C-427D-42B0-B595-4B6FDB56551E@2x.png",
    vector2: "/img/home-vector-CAF07C44-4C5C-42E8-9B67-B8DAEFCEF6E4@2x.png",
    ellipse17: "/img/home-ellipse-17-B57D9519-B41D-4357-8123-EC9AC61B4EC0@2x.png",
    vector3: "/img/home-vector-1C1F6936-BB27-4028-9FA8-6CB2BB427E45@2x.png",
    vector4: "/img/home-vector-C8782008-D9FE-4D14-880B-C7A0AAC3D6C1@2x.png",
    vector5: "/img/home-vector-FE92E419-D622-414E-9835-67C43E52BF71@2x.png",
    subtract: "/img/home-subtract-B6DCF408-3F50-44B0-A810-21EBBD4BFBD1@2x.png",
    group19: "/img/home-subtract-219711AA-8BEC-4E35-B7C9-582EBF0E9F5B@2x.png",
    ellipse5: "/img/home-ellipse-5-A643332A-3212-4004-B63E-F925878948D0@2x.png",
    ellipse6: "/img/home-ellipse-6-91E8DFDA-F110-4907-BAF9-FE0AA933850E@2x.png",
    vector1: "/img/home-vector-1-2FD392A0-FD42-42AD-89B4-59E6C602EBB7@2x.png",
    overlapGroup1: "/img/home-subtract-219156C0-A966-4982-A5A1-B071BD189B57@2x.png",
    ellipse12: "/img/home-ellipse-12-8F3FD34A-333F-408A-8974-E65F23E164C8@2x.png",
    polygon2: "/img/home-polygon-2-E4F10ECC-4515-4168-AB7D-60DED00D0CA5@2x.png",
    polygon1: "/img/home-polygon-1-1688AD63-338B-46D9-9500-ADF5A127B380@2x.png",
    rectangle49: "/img/home-rectangle-49-D73B6CE9-5EDF-44F3-9891-DBD9E1147011@2x.png",
    rectangle52: "/img/home-rectangle-52-2FABACE4-0B7D-4B38-BCE5-D824D8B706CB@2x.png",
    vector6: "/img/home-vector-5DF1ADE6-D54E-4D2A-B48C-F53553EB57D4@2x.png",
    ellipse18: "/img/home-ellipse-18-DBCE7AF8-1A2D-4E41-8B2F-F82A861ECB6F@2x.png",
    polygon3: "/img/home-polygon-3-05A81274-EC91-490A-82D8-8923BCD78C66@2x.png",
    ellipse19: "/img/home-ellipse-19-5190C256-DD54-4918-A702-661A45E2E4A0@2x.png",
    ellipse20: "/img/home-ellipse-20-699898DD-5401-4DE4-A0F1-8D13A12BF573@2x.png",
    rectangle47: "/img/home-rectangle-47-65291B2B-DAEA-433D-95CC-D83B9FB364F4@2x.png",
    rectangle51: "/img/home-rectangle-51-42CDD293-85B8-4E6B-A32F-44E6DEB12BBE@2x.png",
    vector7: "/img/home-vector-2E92ABF5-FCFD-45DA-954B-E5B1151F4243@2x.png",
    countTrashkula: "COUNT TRASHKULA",
    line10: "/img/home-line-10-CEAD5994-AC17-484A-A338-E9D99B57C6FD.png",
    loremIpsumLoremIpsumLorem: <React.Fragment>Lorem ipsum<br />Lorem ipsum lorem</React.Fragment>,
    loremIpsumLoremLo: "Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem. Lorem ipsum lorem Lorem ipsum lorem. Lorem ipsum lorem Lorem ipsum lorem Lorem ipsum lorem.",
    getStarted: "Get started",
    goToApp: "Go to app",
    group65: "/img/home-group-65-873AC690-49B6-484B-89E3-305614F7563E.png",
    recordVideo: "Record video",
    homepage21: "/img/home-homepage-2-1-AFAF1E3E-A855-43B7-9D39-A03AF4931403.png",
    overlapGroup6: "/img/home-vector-BD2E06C0-E414-474A-A9E5-6B0507B2785B@2x.png",
    vector8: "/img/home-vector-452D85B6-C8A0-46CA-BB9D-E35929515F47@2x.png",
    group1: "/img/home-vector-3A6E2027-BEFE-42B6-AC12-24D6AF64A799@2x.png",
    vector9: "/img/home-vector-E77834F1-05B4-46CF-BB7D-E7BD27C808EE@2x.png",
    group2: "/img/home-vector-F48C9316-4913-43BE-A656-560AC3B9C474@2x.png",
    findOutAboutTheK: "Find out about the kinds of waste detected",
    vector10: "/img/home-vector-84C4E556-EAB2-46E9-AA70-1C4F50854B44@2x.png",
    vectorContainer: "/img/home-vector-CA05A9B3-BDBF-47FD-B0E5-29D53FE0CAB4@2x.png",
    vector11: "/img/home-vector-F4E55D43-0972-4DB7-B6F7-98B22E1B9B36@2x.png",
    vector12: "/img/home-vector-F4E55D43-0972-4DB7-B6F7-98B22E1B9B36@2x.png",
    vector13: "/img/home-vector-F4E55D43-0972-4DB7-B6F7-98B22E1B9B36@2x.png",
    text1: "+1",
    liveCountOfWasteGetsUpdated: "Live count of waste gets updated",
    nextPlanFILL0Wght400GRAD0Opsz481Props: nextPlanFILL0Wght400GRAD0Opsz4812Data,
    beerCanSvgrepoCom3Props: beerCanSvgrepoCom31Data,
};

const expandMoreFILL1Wght300GRAD0Opsz4821Data = {
    className: "",
};

const group441Data = {
    name: "August",
    expandMoreFILL1Wght300GRAD0Opsz482Props: expandMoreFILL1Wght300GRAD0Opsz4821Data,
};

const expandMoreFILL1Wght300GRAD0Opsz4822Data = {
    className: "expand_more_fill1_wght300_grad0_opsz48-2-1",
};

const beerCanSvgrepoCom32Data = {
    src: "/img/homepage-vector-F493C5F3-7FD1-42DD-9ED9-5B094E1A90C0@2x.png",
    className: "beer-can-svgrepo-com-2",
};

const group751Data = {
    beerCanSvgrepoCom3Props: beerCanSvgrepoCom32Data,
};

const homepageData = {
    homepageBackgroundMask: "/img/homepage-homepage-backgroundmask-79D6DAD2-4084-4230-9A09-E51C3FD5CCFE.png",
    dailyLiveCount: "Daily live count",
    ofAllCategories1: "of all categories",
    forAllCategories: "for all categories",
    ofAllCategories2: "of all categories",
    recommendations: "Recommendations",
    basedOnYourActivity: "Based on your activity",
    line1: "/img/homepage-line-1-6D1431AA-A213-47DF-B142-65FB671ECF07.png",
    yourActivity: "Your activity",
    totalCount: "Total count",
    monthly: "Monthly",
    line10: "/img/homepage-line-10-B17E0BD9-49E2-4B08-9068-F27D86D6AE75.png",
    surname: "GLASS",
    paper: "PAPER",
    cardboard: "CARDBOARD",
    plastic: "PLASTIC",
    metal: "METAL",
    trash: "TRASH",
    ellipse17: "/img/homepage-ellipse-17-5252F2E7-CD04-408D-85C0-00071A5C8EEB@2x.png",
    vector2: "/img/homepage-vector-4D29646A-B50B-42B1-A6C7-972B08AAC521@2x.png",
    vector3: "/img/homepage-vector-B2569DBB-284F-4742-BE6B-D3EC15B7D110@2x.png",
    subtract: "/img/homepage-subtract-3F3E774C-7105-4B1D-8BCF-5FA48BF256D8@2x.png",
    group19: "/img/homepage-subtract-5D914146-A8C7-42B6-82F4-DA920657DDBD@2x.png",
    ellipse5: "/img/homepage-ellipse-5-FC9B7DEB-0A78-47F0-98D8-D221353DA713@2x.png",
    ellipse6: "/img/homepage-ellipse-6-0E74574A-A94C-4D6F-8E0F-DD0E2A1680B4@2x.png",
    vector1: "/img/homepage-vector-1-F47393F1-9B60-4D00-9FF2-F0FE5C6022B5@2x.png",
    overlapGroup1: "/img/homepage-subtract-DF4B9299-3D23-4027-8369-000C007010E0@2x.png",
    ellipse12: "/img/homepage-ellipse-12-D748F380-33BD-4927-B167-547ECDC9519D@2x.png",
    polygon2: "/img/homepage-polygon-2-3EB51E14-A954-4062-A3B9-65E42BD48EA3@2x.png",
    polygon1: "/img/homepage-polygon-1-25D37E41-FB8C-4E8A-8BD1-26C3CCF7BA52@2x.png",
    rectangle49: "/img/homepage-rectangle-49-9A54BF8A-AC7D-43B7-9768-8C1FF20498BB@2x.png",
    rectangle52: "/img/homepage-rectangle-52-34ADE9EC-8D1A-4FC2-8E20-9E09CFEE1CE5@2x.png",
    vector4: "/img/homepage-vector-632A05FF-2D1C-4347-8678-DA048618AECA@2x.png",
    ellipse18: "/img/homepage-ellipse-18-4B4C4250-B92F-40A0-A169-53F4AEE842E0@2x.png",
    polygon3: "/img/homepage-polygon-3-73A418BC-E9C6-4051-A555-7AC71050A961@2x.png",
    ellipse19: "/img/homepage-ellipse-19-A52B9C04-D308-4DF0-AD24-6FC746EC00A3@2x.png",
    ellipse20: "/img/homepage-ellipse-20-5345BE11-CA3C-4EAE-A2F6-003899BE0E20@2x.png",
    rectangle47: "/img/homepage-rectangle-47-14568582-5B86-45A5-8D02-C1F82DFAF4C2@2x.png",
    rectangle51: "/img/homepage-rectangle-51-0C557D29-4934-44B9-8611-A89040B3B915@2x.png",
    vector5: "/img/homepage-vector-2F6179CC-07AF-46B4-AF54-7F20BBE5E200@2x.png",
    countTrashkula: "COUNT TRASHKULA",
    record: "Record",
    group44Props: group441Data,
    expandMoreFILL1Wght300GRAD0Opsz482Props: expandMoreFILL1Wght300GRAD0Opsz4822Data,
    group75Props: group751Data,
};

const expandMoreFILL1Wght300GRAD0Opsz4823Data = {
    className: "expand_more_fill1_wght300_grad0_opsz48-2-2",
};

const group442Data = {
    name: "December",
    className: "group-44-1",
    expandMoreFILL1Wght300GRAD0Opsz482Props: expandMoreFILL1Wght300GRAD0Opsz4823Data,
};

const expandMoreFILL1Wght300GRAD0Opsz4824Data = {
    className: "expand_more_fill1_wght300_grad0_opsz48-2-3",
};

const beerCanSvgrepoCom33Data = {
    src: "/img/homepage-vector-F493C5F3-7FD1-42DD-9ED9-5B094E1A90C0@2x.png",
    className: "beer-can-svgrepo-com-2-1",
};

const group752Data = {
    beerCanSvgrepoCom3Props: beerCanSvgrepoCom33Data,
};

const group152Data = {
    className: "group-15-1",
};

const homepage2Data = {
    homepageBackgroundMask: "/img/homepage-homepage-backgroundmask-79D6DAD2-4084-4230-9A09-E51C3FD5CCFE.png",
    dailyLiveCount: "Daily live count",
    ofAllCategories1: "of all categories",
    forAllCategories: "for all categories",
    ofAllCategories2: "of all categories",
    recommendations: "Recommendations",
    basedOnYourActivity: "Based on your activity",
    line1: "/img/homepage-line-1-6D1431AA-A213-47DF-B142-65FB671ECF07.png",
    yourActivity: "Your activity",
    totalCount: "Total count",
    monthly: "Monthly",
    line10: "/img/homepage-line-10-B17E0BD9-49E2-4B08-9068-F27D86D6AE75.png",
    surname: "GLASS",
    paper: "PAPER",
    cardboard: "CARDBOARD",
    plastic: "PLASTIC",
    metal: "METAL",
    trash: "TRASH",
    ellipse17: "/img/homepage-ellipse-17-5252F2E7-CD04-408D-85C0-00071A5C8EEB@2x.png",
    vector2: "/img/homepage-vector-4D29646A-B50B-42B1-A6C7-972B08AAC521@2x.png",
    vector3: "/img/homepage-vector-B2569DBB-284F-4742-BE6B-D3EC15B7D110@2x.png",
    subtract: "/img/homepage-subtract-4E14F107-8BC7-48B7-9DB0-FE8BFCA48732@2x.png",
    group19: "/img/homepage-subtract-7D3082EE-4E75-42DA-BA65-E03D79DD7485@2x.png",
    ellipse5: "/img/homepage-ellipse-5-FC9B7DEB-0A78-47F0-98D8-D221353DA713@2x.png",
    ellipse6: "/img/homepage-ellipse-6-0E74574A-A94C-4D6F-8E0F-DD0E2A1680B4@2x.png",
    vector1: "/img/homepage-vector-1-F47393F1-9B60-4D00-9FF2-F0FE5C6022B5@2x.png",
    overlapGroup1: "/img/homepage-subtract-B39A25B8-F329-4708-8B0A-4CB83CACB32E@2x.png",
    ellipse12: "/img/homepage-ellipse-12-D748F380-33BD-4927-B167-547ECDC9519D@2x.png",
    polygon2: "/img/homepage-polygon-2-3EB51E14-A954-4062-A3B9-65E42BD48EA3@2x.png",
    polygon1: "/img/homepage-polygon-1-25D37E41-FB8C-4E8A-8BD1-26C3CCF7BA52@2x.png",
    rectangle49: "/img/homepage-rectangle-49-9A54BF8A-AC7D-43B7-9768-8C1FF20498BB@2x.png",
    rectangle52: "/img/homepage-rectangle-52-34ADE9EC-8D1A-4FC2-8E20-9E09CFEE1CE5@2x.png",
    vector4: "/img/homepage-vector-632A05FF-2D1C-4347-8678-DA048618AECA@2x.png",
    ellipse18: "/img/homepage-ellipse-18-4B4C4250-B92F-40A0-A169-53F4AEE842E0@2x.png",
    polygon3: "/img/homepage-polygon-3-73A418BC-E9C6-4051-A555-7AC71050A961@2x.png",
    ellipse19: "/img/homepage-ellipse-19-A52B9C04-D308-4DF0-AD24-6FC746EC00A3@2x.png",
    ellipse20: "/img/homepage-ellipse-20-5345BE11-CA3C-4EAE-A2F6-003899BE0E20@2x.png",
    rectangle47: "/img/homepage-rectangle-47-14568582-5B86-45A5-8D02-C1F82DFAF4C2@2x.png",
    rectangle51: "/img/homepage-rectangle-51-0C557D29-4934-44B9-8611-A89040B3B915@2x.png",
    vector5: "/img/homepage-vector-2F6179CC-07AF-46B4-AF54-7F20BBE5E200@2x.png",
    countTrashkula: "COUNT TRASHKULA",
    record: "Record",
    january: "January",
    february: "February",
    place: "March",
    name1: "April",
    name2: "May",
    name3: "June",
    july: "July",
    name4: "August",
    september: "September",
    october: "October",
    november: "November",
    december: "December",
    weekly: "Weekly",
    today: "Today",
    group44Props: group442Data,
    expandMoreFILL1Wght300GRAD0Opsz482Props: expandMoreFILL1Wght300GRAD0Opsz4824Data,
    group75Props: group752Data,
    group15Props: group152Data,
};

const expandMoreFILL1Wght300GRAD0Opsz4825Data = {
    className: "expand_more_fill1_wght300_grad0_opsz48-2-4",
};

const group443Data = {
    name: "December",
    className: "group-44-2",
    expandMoreFILL1Wght300GRAD0Opsz482Props: expandMoreFILL1Wght300GRAD0Opsz4825Data,
};

const expandMoreFILL1Wght300GRAD0Opsz4826Data = {
    className: "expand_more_fill1_wght300_grad0_opsz48-2-5",
};

const group444Data = {
    name: "Monthly",
    className: "group-100-1",
    expandMoreFILL1Wght300GRAD0Opsz482Props: expandMoreFILL1Wght300GRAD0Opsz4826Data,
};

const beerCanSvgrepoCom34Data = {
    src: "/img/homepage-vector-F493C5F3-7FD1-42DD-9ED9-5B094E1A90C0@2x.png",
    className: "beer-can-svgrepo-com-2-2",
};

const group753Data = {
    beerCanSvgrepoCom3Props: beerCanSvgrepoCom34Data,
};

const frame91Data = {
    subtract: "/img/homepage-subtract-4E14F107-8BC7-48B7-9DB0-FE8BFCA48732@2x.png",
    group19: "/img/homepage-subtract-AA6A69C2-15C4-4D60-95B5-7948E334C13C@2x.png",
    overlapGroup1: "/img/homepage-subtract-E4337D9E-D436-4553-8CC0-EFB3B326E9BA@2x.png",
};

const homepage3Data = {
    homepageBackgroundMask: "/img/homepage-homepage-backgroundmask-79D6DAD2-4084-4230-9A09-E51C3FD5CCFE.png",
    dailyLiveCount: "Daily live count",
    ofTopCategories: "of top categories",
    forAllCategories: "for all categories",
    ofTop6Categories: "of top 6 categories",
    recommendations: "Recommendations",
    basedOnYourActivity: "Based on your activity",
    line1: "/img/homepage-line-1-6D1431AA-A213-47DF-B142-65FB671ECF07.png",
    yourActivity: "Your activity",
    totalCount: "Total count",
    line10: "/img/homepage-line-10-B17E0BD9-49E2-4B08-9068-F27D86D6AE75.png",
    surname: "GLASS",
    paper: "PAPER",
    cardboard: "CARDBOARD",
    plastic: "PLASTIC",
    metal: "METAL",
    trash: "TRASH",
    rectangle25: "/img/homepage-rectangle-25-B9222C53-DA50-436C-BE58-8238D9A42454.png",
    allowCountTrashkul: "Allow Count Trashkula to access web camera?",
    allow: "Allow",
    dontAllow: "Don’t allow",
    group441Props: group443Data,
    group442Props: group444Data,
    group75Props: group753Data,
    frame9Props: frame91Data,
};

const expandMoreFILL1Wght300GRAD0Opsz4827Data = {
    className: "expand_more_fill1_wght300_grad0_opsz48-2-6",
};

const group445Data = {
    name: "December",
    className: "group-44-3",
    expandMoreFILL1Wght300GRAD0Opsz482Props: expandMoreFILL1Wght300GRAD0Opsz4827Data,
};

const expandMoreFILL1Wght300GRAD0Opsz4828Data = {
    className: "expand_more_fill1_wght300_grad0_opsz48-2-7",
};

const group446Data = {
    name: "Monthly",
    className: "group-100-2",
    expandMoreFILL1Wght300GRAD0Opsz482Props: expandMoreFILL1Wght300GRAD0Opsz4828Data,
};

const beerCanSvgrepoCom35Data = {
    src: "/img/homepage-vector-F493C5F3-7FD1-42DD-9ED9-5B094E1A90C0@2x.png",
    className: "beer-can-svgrepo-com-2-3",
};

const group754Data = {
    beerCanSvgrepoCom3Props: beerCanSvgrepoCom35Data,
};

const frame92Data = {
    subtract: "/img/homepage-subtract-4E14F107-8BC7-48B7-9DB0-FE8BFCA48732@2x.png",
    group19: "/img/homepage-subtract-AA6A69C2-15C4-4D60-95B5-7948E334C13C@2x.png",
    overlapGroup1: "/img/homepage-subtract-E4337D9E-D436-4553-8CC0-EFB3B326E9BA@2x.png",
};

const homepage4Data = {
    homepageBackgroundMask: "/img/homepage-homepage-backgroundmask-79D6DAD2-4084-4230-9A09-E51C3FD5CCFE.png",
    dailyLiveCount: "Daily live count",
    ofTopCategories: "of top categories",
    forAllCategories: "for all categories",
    ofTop6Categories: "of top 6 categories",
    recommendations: "Recommendations",
    basedOnYourActivity: "Based on your activity",
    line1: "/img/homepage-line-1-6D1431AA-A213-47DF-B142-65FB671ECF07.png",
    yourActivity: "Your activity",
    totalCount: "Total count",
    line10: "/img/homepage-line-10-B17E0BD9-49E2-4B08-9068-F27D86D6AE75.png",
    surname: "GLASS",
    paper: "PAPER",
    cardboard: "CARDBOARD",
    plastic: "PLASTIC",
    metal: "METAL",
    trash: "TRASH",
    rectangle26: "/img/homepage-rectangle-25-B9222C53-DA50-436C-BE58-8238D9A42454.png",
    vector2: "/img/homepage-vector-B75D7BDC-5744-4C79-BC87-FF98910B4E49@2x.png",
    group441Props: group445Data,
    group442Props: group446Data,
    group75Props: group754Data,
    frame9Props: frame92Data,
};

const expandMoreFILL1Wght300GRAD0Opsz4829Data = {
    className: "expand_more_fill1_wght300_grad0_opsz48-2-8",
};

const group447Data = {
    name: "December",
    className: "group-44-4",
    expandMoreFILL1Wght300GRAD0Opsz482Props: expandMoreFILL1Wght300GRAD0Opsz4829Data,
};

const expandMoreFILL1Wght300GRAD0Opsz48210Data = {
    className: "expand_more_fill1_wght300_grad0_opsz48-2-9",
};

const group448Data = {
    name: "Monthly",
    className: "group-100-3",
    expandMoreFILL1Wght300GRAD0Opsz482Props: expandMoreFILL1Wght300GRAD0Opsz48210Data,
};

const beerCanSvgrepoCom36Data = {
    src: "/img/homepage-vector-F493C5F3-7FD1-42DD-9ED9-5B094E1A90C0@2x.png",
    className: "beer-can-svgrepo-com-2-4",
};

const group755Data = {
    beerCanSvgrepoCom3Props: beerCanSvgrepoCom36Data,
};

const frame93Data = {
    subtract: "/img/homepage-subtract-DABCBA38-59F6-4ECC-AB68-DD00262C447C@2x.png",
    group19: "/img/homepage-subtract-7D3082EE-4E75-42DA-BA65-E03D79DD7485@2x.png",
    overlapGroup1: "/img/homepage-subtract-E4337D9E-D436-4553-8CC0-EFB3B326E9BA@2x.png",
    className: "frame-9-4",
};

const homepage5Data = {
    homepageBackgroundMask: "/img/homepage-homepage-backgroundmask-79D6DAD2-4084-4230-9A09-E51C3FD5CCFE.png",
    dailyLiveCount: "Daily live count",
    ofTopCategories: "of top categories",
    forAllCategories: "for all categories",
    ofTop6Categories: "of top 6 categories",
    recommendations: "Recommendations",
    basedOnYourActivity: "Based on your activity",
    line1: "/img/homepage-line-1-6D1431AA-A213-47DF-B142-65FB671ECF07.png",
    yourActivity: "Your activity",
    totalCount: "Total count",
    line10: "/img/homepage-line-10-B17E0BD9-49E2-4B08-9068-F27D86D6AE75.png",
    surname: "GLASS",
    paper: "PAPER",
    cardboard: "CARDBOARD",
    plastic1: "PLASTIC",
    metal: "METAL",
    trash: "TRASH",
    rectangle29: "/img/homepage-rectangle-25-B9222C53-DA50-436C-BE58-8238D9A42454.png",
    group: "/img/homepage-vector-56FCAEDD-844C-496C-988F-52A96586BCF6@2x.png",
    plastic2: "Plastic",
    plasticItemsDetectedThisWeek: "Plastic items detected this week:",
    number: "12",
    done: "Done",
    uploadAnotherVideo: "Upload another video",
    group441Props: group447Data,
    group442Props: group448Data,
    group75Props: group755Data,
    frame9Props: frame93Data,
};

const expandMoreFILL1Wght300GRAD0Opsz48211Data = {
    className: "expand_more_fill1_wght300_grad0_opsz48-2-10",
};

const group449Data = {
    name: "December",
    className: "group-44-5",
    expandMoreFILL1Wght300GRAD0Opsz482Props: expandMoreFILL1Wght300GRAD0Opsz48211Data,
};

const expandMoreFILL1Wght300GRAD0Opsz48212Data = {
    className: "expand_more_fill1_wght300_grad0_opsz48-2-11",
};

const group4410Data = {
    name: "Monthly",
    className: "group-100-4",
    expandMoreFILL1Wght300GRAD0Opsz482Props: expandMoreFILL1Wght300GRAD0Opsz48212Data,
};

const beerCanSvgrepoCom37Data = {
    src: "/img/homepage-vector-F493C5F3-7FD1-42DD-9ED9-5B094E1A90C0@2x.png",
    className: "beer-can-svgrepo-com-2-5",
};

const group756Data = {
    beerCanSvgrepoCom3Props: beerCanSvgrepoCom37Data,
};

const frame94Data = {
    subtract: "/img/homepage-subtract-B1FC1F55-AEB0-43DD-819C-6B2F76F97447@2x.png",
    group19: "/img/homepage-subtract-5D914146-A8C7-42B6-82F4-DA920657DDBD@2x.png",
    overlapGroup1: "/img/homepage-subtract-F4D545D1-24F7-4B9F-ADA2-29715FF94F62@2x.png",
    className: "frame-9-4",
};

const homepage6Data = {
    homepageBackgroundMask: "/img/homepage-homepage-backgroundmask-79D6DAD2-4084-4230-9A09-E51C3FD5CCFE.png",
    dailyLiveCount: "Daily live count",
    ofTopCategories: "of top categories",
    forAllCategories: "for all categories",
    ofTop6Categories: "of top 6 categories",
    recommendations: "Recommendations",
    basedOnYourActivity: "Based on your activity",
    line1: "/img/homepage-line-1-6D1431AA-A213-47DF-B142-65FB671ECF07.png",
    yourActivity: "Your activity",
    totalCount: "Total count",
    line10: "/img/homepage-line-10-B17E0BD9-49E2-4B08-9068-F27D86D6AE75.png",
    surname1: "GLASS",
    paper1: "PAPER",
    cardboard1: "CARDBOARD",
    plastic1: "PLASTIC",
    metal1: "METAL",
    trash1: "TRASH",
    rectangle30: "/img/homepage-rectangle-25-B9222C53-DA50-436C-BE58-8238D9A42454.png",
    group1: "/img/homepage-vector-7211ADBA-65D5-4D4C-9231-AC53052C6AFE@2x.png",
    plastic2: "Plastic",
    vectorContainer1: "/img/homepage-vector-0915564C-E63B-403A-B2C8-C4C0A5727500@2x.png",
    vector2: "/img/homepage-vector-2C004C41-44B0-4EDF-8A05-7BE385681F29@2x.png",
    vector3: "/img/homepage-vector-2C004C41-44B0-4EDF-8A05-7BE385681F29@2x.png",
    vector4: "/img/homepage-vector-2C004C41-44B0-4EDF-8A05-7BE385681F29@2x.png",
    trash2: "Trash",
    group2: "/img/homepage-vector-36A5C26F-26AB-4CE8-BE03-98106BD0F8F5@2x.png",
    cardboard2: "Cardboard",
    group3: "/img/homepage-vector-BD510071-CC02-4703-B3C4-C98DA72BD128@2x.png",
    vectorContainer2: "/img/homepage-vector-493D9FE9-718E-40ED-9E19-44A376741A51@2x.png",
    vector5: "/img/homepage-vector-55B4DA72-44C6-4A7F-BD69-ADD1D7E16749@2x.png",
    vector6: "/img/homepage-vector-3BBE49CC-42AE-442B-9337-2F8215C617AC@2x.png",
    vector7: "/img/homepage-vector-55B4DA72-44C6-4A7F-BD69-ADD1D7E16749@2x.png",
    surname2: "Glass",
    vector8: "/img/homepage-vector-A2248A9A-6E3C-487B-B26B-205CB75E5C41@2x.png",
    paper2: "Paper",
    vector9: "/img/homepage-vector-485AFA90-70A6-41CC-AAF3-D187425990D6@2x.png",
    metal2: "Metal",
    done: "Done",
    takeAnotherVideo: "Take another video",
    group441Props: group449Data,
    group442Props: group4410Data,
    group75Props: group756Data,
    frame9Props: frame94Data,
};

