import React from "react";
import SubCatagoryPopup from "./SubCatagoryPopup";
import catalogData from "../CatalogData";

const InformationNavMobile = () => {
  return (
    <div>
      <SubCatagoryPopup data={catalogData} index={0} />
    </div>
  );
};

export default InformationNavMobile;
