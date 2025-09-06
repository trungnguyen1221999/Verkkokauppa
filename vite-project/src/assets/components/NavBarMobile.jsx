import React from "react";
import catalogData from "../CatalogData";
import { FaArrowRightLong } from "react-icons/fa6";
import styled from "styled-components";
import SubCatagoryPopup from "./SubCatagoryPopup";
import { useMenu } from "./MenuContext";

const NavBarMobile = () => {
  const { isOpen, closeMenu, currentIndex, openSub } = useMenu();

  if (!isOpen) return null;

  return (
    <Overlay onClick={closeMenu}>
      {/* Menu chính */}
      {currentIndex === 0 && (
        <Container onClick={(e) => e.stopPropagation()}>
          <div className="nav-list first">
            {catalogData.NavLink.titleLeft.map((title, index) => (
              <div
                key={index}
                className="nav-item"
                onClick={() => openSub(index + 1)}
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
      )}

      {/* Sub menu */}
      {currentIndex !== 0 && (
        <SubCatagoryPopup data={catalogData} index={currentIndex - 1} />
      )}
    </Overlay>
  );
};

export default NavBarMobile;

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
`;
