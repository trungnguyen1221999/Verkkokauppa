import React from "react";
import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";
import catalogData from "../CatalogData";
import { useMenu } from "./MenuContext";
import SubCategoryPopup from "./SubCatagoryPopup";

const NavBarMobile = () => {
  const { isOpen, closeMenu, current, openSub } = useMenu();

  if (!isOpen) return null;

  // Menu gốc
  if (current.type === "root") {
    return (
      <Overlay onClick={closeMenu}>
        <Container onClick={(e) => e.stopPropagation()}>
          <div className="nav-list first">
            {catalogData.NavLink.titleLeft.map((title, index) => (
              <div
                key={index}
                className="nav-item"
                onClick={() => openSub("category", index, [])} // mở category với path rỗng
              >
                {title}
                <FaArrowRightLong style={{ opacity: 0.7 }} />
              </div>
            ))}
          </div>

          <hr />

          <div className="nav-list">
            {catalogData.NavLink.titleRight.map((title, index) => (
              <a key={index} href={catalogData.NavLink.toRight[index]}>
                <div className="nav-item">
                  {title}
                  <FaArrowRightLong style={{ opacity: 0.7 }} />
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Overlay>
    );
  }

  // Sub menu
  if (current.type === "category" || current.type === "subCategory") {
    // lấy data tương ứng với index
    const index = current.key;
    const data = catalogData.SubData[index]; // đây là subData (vd: InfomationNavData)
    return (
      <Overlay onClick={closeMenu}>
        <SubCategoryPopup
          data={data}
          path={current.path || []} // truyền path xuống
          currentIndex={index + 1} // truyền index để lấy titleLeft nếu path rỗng
        />
      </Overlay>
    );
  }

  return null;
};

export default NavBarMobile;

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 20;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 90vw;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  background-color: #fff;
  padding: 2rem;
  padding-left: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .nav-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .nav-item {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    font-weight: 600;
  }

  .first {
    padding-top: 7rem;
  }

  hr {
    border: none;
    height: 1px;
    background-color: #ccc;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
