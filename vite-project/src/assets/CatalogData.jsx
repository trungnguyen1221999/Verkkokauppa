import GamingPopUp from "./pages/catalog/Gaming/GamingPopUp";
import HomeAndGardenPopUp from "./pages/catalog/HomeAndGarden/HomeAndGardenPopUp";
import HomeAppPopUp from "./pages/catalog/HomeAppliance/HomeAppPopUp";
import InformationTechPopUp from "./pages/catalog/InformationTech/InformationTechPopUp";
import LifestylePopUp from "./pages/catalog/Lifestyle/LifestylePopUp";
import PhonePopUp from "./pages/catalog/Phone/PhonePopUp";
import PicturePopUp from "./pages/catalog/Picture/PicturePopUp";
import InfomationNavData from "./pages/catalog/InformationTech/InformationNavData";
import PictureData from "./pages/catalog/Picture/PictureData";
import PhoneData from "./pages/catalog/Phone/PhoneData";
import HomeApplianceData from "./pages/catalog/HomeAppliance/HomeApplianceData";
import HomeAndGardenData from "./pages/catalog/HomeAndGarden/HomeAndGardenData";
import LifestyleData from "./pages/catalog/Lifestyle/LifestyleData";
const catalogData = {
  NavSection: [
    <InformationTechPopUp />,
    <GamingPopUp />,
    <PicturePopUp />,
    <PhonePopUp />,
    <HomeAppPopUp />,
    <HomeAndGardenPopUp />,
    <LifestylePopUp />,
  ],
  SubData: [
    InfomationNavData,
    PictureData,
    PhoneData,
    HomeApplianceData,
    HomeAndGardenData,
    LifestyleData,
  ],
  NavLink: {
    toLeft: [
      "/catalog/tietotekniikka",
      "/catalog/pelaaminen",
      "/catalog/kuva-ja-aani",
      "/catalog/puhelimet-tabletit-ja-kellot",
      "/catalog/kodinkoneet",
      "/catalog/koti-ja-piha",
      "/catalog/harrastukset-ja-vapaa-aika",
    ],
    titleLeft: [
      "Information technology",
      "Gaming",
      "Picture and Sound",
      "Phones, Tablets & Watches",
      "Domestic Appliances",
      "Home and Yard",
      "Hobbies and Leisure",
    ],

    toRight: [
      "/wolt-tunnin-kotiinkuljetus",
      "/outlet/yksittaiskappaleet",
      "/poistoerat",
      "/yritysmyynti",
      "/artikkelit",
      "/ajankohtaista",
    ],
    titleRight: [
      "Delivery in an hour",
      "Outlet",
      "Clearance Items",
      "For Businesses",
      "Guides and articles",
      "Services",
      "News",
    ],
  },
};
export default catalogData;
