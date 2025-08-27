import GamingPopUp from "./pages/catalog/Gaming/GamingPopUp";
import HomeAndGardenPopUp from "./pages/catalog/HomeAndGarden/HomeAndGardenPopUp";
import HomeAppPopUp from "./pages/catalog/HomeAppliance/HomeAppPopUp";
import InformationTechPopUp from "./pages/catalog/InformationTech/InformationTechPopUp";
import LifestylePopUp from "./pages/catalog/Lifestyle/LifestylePopUp";
import PhonePopUp from "./pages/catalog/Phone/PhonePopUp";
import PicturePopUp from "./pages/catalog/Picture/PicturePopUp";

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
