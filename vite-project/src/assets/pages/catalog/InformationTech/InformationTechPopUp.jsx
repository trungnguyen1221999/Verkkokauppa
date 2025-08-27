import React from "react";
import InfomationNavData from "./InformationNavData";
import styled from "styled-components";

const InformationTechPopUp = () => {
  return (
    <StyledPopUp>
      <StyledSum>
        {InfomationNavData.sum.map((item, index) => (
          <a key={index}>{item}</a>
        ))}
      </StyledSum>

      <StyledDetail>
        {InfomationNavData.header.map((item, index) => {
          // Convert the header item to match the keys in the components object
          const key = Object.keys(InfomationNavData.components)[index];
          const components = InfomationNavData.components[key];

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

export default InformationTechPopUp;

export const StyledSum = styled.div`
  a {
    font-weight: 600;
    font-size: 1.25rem;
  }
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 20%;
`;

export const StyledDetail = styled.div`
  a {
    font-weight: 600;
    font-size: 1.25rem;
  }
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  row-gap: 2rem;
  column-gap: 10rem;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 1rem;
  flex: 1;
`;

export const StyledComponentGroup = styled.div`
  a {
    font-weight: 600;
    font-size: 1.25rem;
  }
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledPopUp = styled.div`
  display: flex;
  position: absolute;
  top: 15rem;
  right: 8rem;
  left: 8rem;
  z-index: 1000;
  justify-content: space-between;
  a {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  transform: translateY(-1rem);
  background-color: white;
  padding: 3rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h5 {
    font-size: 1.6rem;
  }
  p {
    font-weight: 500;
    font-size: 1.25rem;
  }
`;
