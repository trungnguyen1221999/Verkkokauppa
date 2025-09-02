import React, { useState } from "react";
import FooterTimeSlideData from "./data/FooterTimeSlideData";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import styled from "styled-components";

const FooterTimeSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goRight = () => {
    if (currentIndex < FooterTimeSlideData.openingHours.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <StyledContainer>
      <MdArrowLeft
        onClick={goLeft}
        style={{ visibility: currentIndex === 0 ? "hidden" : "visible" }}
      />
      <p>{FooterTimeSlideData.openingHours[currentIndex]}</p>
      <MdArrowRight
        onClick={goRight}
        style={{
          visibility:
            currentIndex === FooterTimeSlideData.openingHours.length - 1
              ? "hidden"
              : "visible",
        }}
      />
    </StyledContainer>
  );
};

export default FooterTimeSlide;

const StyledContainer = styled.div`
  margin-top: 5rem;
  p,
  svg {
    color: white;
    opacity: 0.8;
  }

  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  svg {
    font-size: 3rem;
    cursor: pointer;
    &:hover {
      opacity: 0.4;
    }
  }
  p {
    font-size: 1.5rem;
  }
  background-color: black;
`;
