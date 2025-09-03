import React from "react";
import FooterTimeColumnData from "./FooterTimeColumnData";
import styled from "styled-components";

const FooterTimeColumn = () => {
  return (
    <StyledContainer>
      <StyledColumnList>
        {FooterTimeColumnData.store.map((item, index) => (
          <StyledColumn key={index}>
            <h4>{item}</h4>
            <p className="location">{FooterTimeColumnData.location[index]}</p>
            <div>
              {FooterTimeColumnData.day[index].map((day, dayIndex) => (
                <StyledTime key={dayIndex}>
                  <p>{day}</p>
                  <p>{FooterTimeColumnData.hours[index][dayIndex]}</p>
                </StyledTime>
              ))}
            </div>
          </StyledColumn>
        ))}
      </StyledColumnList>
    </StyledContainer>
  );
};

export default FooterTimeColumn;

const StyledContainer = styled.div`
  h4,
  p {
    color: white;
  }
  margin: 0 auto;
  max-width: 90vw;
`;

const StyledColumnList = styled.div`
  display: flex;
  justify-content: space-between;
  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: underline;
  }
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
    width: 50vw;
    margin: 0 auto;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  p {
    font-size: 1.4rem;
    opacity: 0.85;
  }
  .location {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

const StyledTime = styled.div`
  display: flex;
  justify-content: space-between;
`;
