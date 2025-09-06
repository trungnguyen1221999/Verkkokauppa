import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const SubCatagoryPopup = ({ data, index }) => {
  return (
    <div>
      <div>
        <div>
          <FaArrowLeftLong />
          <button>Back</button>
        </div>
        <h4>{data.NavLink.titleLeft[index]}</h4>
        <div>
          {data.SubData[index].header.map((subItem, subIndex) => (
            <div>
              <div key={subIndex}>{subItem}</div>
              <FaArrowRightLong style={{ opacity: 0.7 }} />
            </div>
          ))}
        </div>
      </div>
      <div>
        {data.SubData[index].sum.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default SubCatagoryPopup;
