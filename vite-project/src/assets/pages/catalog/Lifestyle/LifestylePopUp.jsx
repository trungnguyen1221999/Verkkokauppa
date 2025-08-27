import React from "react";
import {
  StyledPopUp,
  StyledSum,
  StyledDetail,
  StyledColumn,
  StyledComponentGroup,
} from "../InformationTech/InformationTechPopUp";
import LifestyleData from "./LifestyleData";

const LifestylePopUp = () => {
  return (
    <StyledPopUp>
      <StyledSum>
        {LifestyleData.sum.map((item, index) => (
          <a key={index}>{item}</a>
        ))}
      </StyledSum>

      <StyledDetail>
        {LifestyleData.header.map((item, index) => {
          // Convert the header item to match the keys in the components object
          const key = Object.keys(LifestyleData.components)[index];
          const components = LifestyleData.components[key];

          return (
            <React.Fragment key={index}>
              <StyledColumn>
                <a>
                  <h5>{item}</h5>
                </a>
                <StyledComponentGroup>
                  {components &&
                    components.map((subItem, subIndex) => (
                      <a key={subIndex}>
                        <p>{subItem}</p>
                      </a>
                    ))}
                </StyledComponentGroup>
              </StyledColumn>
            </React.Fragment>
          );
        })}
      </StyledDetail>
    </StyledPopUp>
  );
};

export default LifestylePopUp;
