import React from "react";
import styled from "styled-components";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useMenu } from "./MenuContext";

const SubCategoryPopup = ({ data, path = [], currentIndex }) => {
  const { goBack, openSub } = useMenu();

  // Duyệt data theo path
  let currentData = data;
  path.forEach((key) => {
    if (currentData.components && currentData.components[key]) {
      currentData = { header: currentData.components[key], sum: [] };
    }
  });

  return (
    <Container onClick={(e) => e.stopPropagation()}>
      {/* Header back */}
      <div className="header">
        <button className="back-btn" onClick={goBack}>
          <FaArrowLeftLong />
          <span>Back</span>
        </button>
        {/* Nếu path rỗng, lấy title từ NavLink.titleLeft */}
        <h4>
          {path.length === 0
            ? data.title || `Category ${currentIndex}`
            : path[path.length - 1]}
        </h4>
      </div>

      {/* Sub headers */}
      <div className="nav-list nav-top">
        {currentData.header &&
          currentData.header.map((item, idx) => (
            <div
              className="nav-item"
              key={idx}
              onClick={() => {
                // Kiểm tra nếu có sub-sub menu
                if (
                  currentData.components &&
                  currentData.components[item.replace(/\s+/g, "")]
                ) {
                  openSub(
                    "subCategory",
                    idx, // key của sub-sub
                    [...path, item] // path của sub-sub
                  );
                }
              }}
            >
              {item}
              {currentData.components &&
                currentData.components[item.replace(/\s+/g, "")] && (
                  <FaArrowRightLong style={{ opacity: 0.7 }} />
                )}
            </div>
          ))}
      </div>

      <hr />

      {/* Summary */}
      <div className="nav-list nav-bottom">
        {currentData.sum &&
          currentData.sum.map((item, idx) => (
            <div className="nav-item" key={idx}>
              {item}
            </div>
          ))}
      </div>
    </Container>
  );
};

export default SubCategoryPopup;

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

  hr {
    border: none;
    height: 1px;
    background-color: #ccc;
  }
`;
