import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import styled from "styled-components";
import { useMenu } from "./MenuContext";

const SubCatagoryPopup = ({ data, index }) => {
  const { goBack, openSub } = useMenu();
  const currentData = data.SubData[index];

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      {/* Header back */}
      <div className="header">
        <button className="back-btn" onClick={goBack}>
          <FaArrowLeftLong />
          <span>Back</span>
        </button>

        <h4>{data.NavLink.titleLeft[index]}</h4>
      </div>

      {/* Sub headers */}
      <div className="nav-list nav-top">
        {currentData.header.map((item, idx) => (
          <div
            className="nav-item"
            key={idx}
            onClick={() => {
              if (
                currentData.components &&
                currentData.components[item.replace(/\s+/g, "")]
              ) {
                openSub(idx + 1 + 1000); // tạo index riêng cho sub-sub
              }
            }}
          >
            {item}
            <FaArrowRightLong style={{ opacity: 0.7 }} />
          </div>
        ))}
      </div>

      <hr />

      {/* Summary */}
      <div className="nav-list nav-bottom">
        {currentData.sum.map((item, idx) => (
          <div className="nav-item" key={idx}>
            {item}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SubCatagoryPopup;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 90vw;
  height: 100vh;
  background-color: #fff;
  padding: 2rem;
  padding-top: 7rem;
  padding-left: 5rem;
  max-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h4 {
    font-size: 1.6rem;
  }

  .back-btn {
    margin: 2rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: none;
    background: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.25rem;
    transform: translateX(-3rem);
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .nav-item {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .nav-top {
    font-size: 1.4rem;
  }
  .nav-bottom {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;
