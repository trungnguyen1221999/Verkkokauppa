import React from "react";
import catalogData from "../CatalogData";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";

const NavBarMobile = ({ open, onClose }) => {
  return (
    <OVerLay style={{ display: open ? "block" : "none" }} onClick={onClose}>
      <StyledContainer
        onClick={(e) => e.stopPropagation()}
        style={{
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="nav-list first">
          {catalogData.NavLink.toLeft.map((item, index) => (
            <NavLink key={index} to={item.path}>
              <div className="nav-item">
                {catalogData.NavLink.titleLeft[index]}
                <FaArrowRightLong style={{ opacity: 0.7 }} />
              </div>
            </NavLink>
          ))}
        </div>
        <hr />
        <div className="nav-list">
          {catalogData.NavLink.toRight.map((item, index) => (
            <NavLink key={index} to={item.path}>
              <div className="nav-item">
                {catalogData.NavLink.titleRight[index]}
                <FaArrowRightLong style={{ opacity: 0.7 }} />
              </div>
            </NavLink>
          ))}
        </div>
      </StyledContainer>
    </OVerLay>
  );
};

export default NavBarMobile;

const StyledContainer = styled.nav`
  @media (min-width: 769px) {
    display: none;
  }
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 9;
  width: 90vw;
  height: 100vh;
  padding: 0 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  .nav-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  a {
    font-size: 1.3rem;
    font-weight: 600;
  }
  .nav-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .first {
    padding-top: 8rem;
  }
`;
const OVerLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  z-index: 20;
  width: 100vw;
  height: 100vh;
`;
