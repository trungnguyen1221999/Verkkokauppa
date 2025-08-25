import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import styled from "styled-components";
import { OVerLay } from "./ZipStore";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const popular = ["pokemon", "rog ally", "lego", "tv", "microwave"];

  return (
    <SearchContainer>
      <SearchWrapper $isFocused={isFocused}>
        <StyleSearch>
          <label>
            <input
              type="text"
              placeholder="Search in store"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <StyledSearchIcon />
          </label>
        </StyleSearch>

        {isFocused && (
          <StyledDropDown>
            <p className="suosittua">Suosittua juuri nyt</p>
            {popular.map((item, index) => (
              <DropDownElement key={index}>
                <IoIosSearch />
                <div>
                  <h5>{item}</h5>
                  <p>hakutermi</p>
                </div>
              </DropDownElement>
            ))}
          </StyledDropDown>
        )}
      </SearchWrapper>

      {isFocused && <OVerLay onClick={() => setIsFocused(false)} />}
    </SearchContainer>
  );
};

export default Search;

// ================= styled =================

const SearchContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 40rem;
  border: 2px solid transparent;
  overflow: hidden;

  background-color: #cccccc3d;
  z-index: 1000;
  overflow: visible;
  border-radius: 2.5rem; /* chỉ highlight khi input focus */
  ${({ $isFocused }) =>
    $isFocused &&
    `
    border-color: #1e90ff;
    background-color: white;
    border-radius: 2.5rem 2.5rem 0 0
  `};
`;

const StyleSearch = styled.div`
  position: relative;
  z-index: 2;

  label {
    cursor: text;
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    width: 100%;
  }

  input {
    flex: 1;
    font-size: 1.35rem;
    border: none;
    outline: none;
    background: transparent;
  }
`;

const StyledSearchIcon = styled(IoIosSearch)`
  position: absolute;
  top: 1.1rem;
  right: 1.5rem;
  color: #636161;
`;

const StyledDropDown = styled.div`
  position: absolute;
  top: 100%;
  left: -1.5px;
  right: -1.5px;
  z-index: 1001;
  background-color: white;
  border: 2px solid #1e90ff;
  border-top: none;
  border-radius: 0 0 2.5rem 2.5rem;
  overflow-y: auto;
  max-height: 22rem;

  .suosittua {
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2rem;
  }
`;

const DropDownElement = styled.div`
  padding: 0.3rem 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.silver};
    }
  }
`;
