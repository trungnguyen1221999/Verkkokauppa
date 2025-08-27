import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import catalogData from "../CatalogData";
import styled from "styled-components";
import InformationTechPopUp from "../pages/catalog/InformationTech/InformationTechPopUp";
import GamingPopUp from "../pages/catalog/Gaming/GamingPopUp";
import PicturePopUp from "../pages/catalog/Picture/PicturePopUp";
import PhonePopUp from "../pages/catalog/Phone/PhonePopUp";
import HomeAppPopUp from "../pages/catalog/HomeAppliance/HomeAppPopUp";

const NavBar = () => {
  const [isHover, setHover] = useState(false);
  const [isTarget, setTarget] = useState(null);
  const resetHover = () => {
    setHover(false);
  };
  return (
    <div style={{ width: "100%" }} onMouseLeave={resetHover}>
      <StyledNavBar>
        <Left>
          {catalogData.NavLink.toLeft.map((item, index) => (
            <NavLink
              key={index}
              to={item}
              onMouseEnter={() => {
                setHover(true);
                setTarget(index);
              }}
            >
              {catalogData.NavLink.titleLeft[index]}
            </NavLink>
          ))}
        </Left>
        <Right>
          {catalogData.NavLink.toRight.map((item, index) => (
            <NavLink key={index} to={item}>
              {catalogData.NavLink.titleRight[index]}
            </NavLink>
          ))}
        </Right>
      </StyledNavBar>
      {isHover && isTarget === 0 && (
        <InformationTechPopUp onMouseEnter={() => setHover(true)} />
      )}
      {isHover && isTarget === 1 && (
        <GamingPopUp onMouseEnter={() => setHover(true)} />
      )}
      {isHover && isTarget === 2 && (
        <PicturePopUp onMouseEnter={() => setHover(true)} />
      )}
      {isHover && isTarget === 3 && (
        <PhonePopUp onMouseEnter={() => setHover(true)} />
      )}
      {isHover && isTarget === 4 && (
        <HomeAppPopUp onMouseEnter={() => setHover(true)} />
      )}
    </div>
  );
};

export default NavBar;

const StyledNavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  span {
    display: flex;
    gap: 1rem;
  }

  a {
    font-weight: 600;
    font-size: 1.25rem;
    padding-bottom: 1.5rem;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0; /* mặc định 0 */
      height: 2px;
      background-color: ${(p) => p.theme.colors.silver};
      transform: translateX(-50%);
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%; /* hover mở rộng */
    }

    &[aria-current="page"]::after {
      width: 100%; /* link đang active -> giữ underline, KHÔNG biến mất */
    }
  }
`;

const Left = styled.span``;

const Right = styled.span`
  a {
    font-weight: 500;
  }
`;
