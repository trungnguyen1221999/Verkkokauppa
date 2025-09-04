import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import styled from "styled-components";
import { OVerLay } from "./ZipStore";
import searchSuggestions from "../../searchData";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
    setSuggestion(searchSuggest(value));
  };

  const popular = ["pokemon", "rog ally", "lego", "tv", "microwave"];

  const searchSuggest = (input) => {
    return searchSuggestions.filter((item) =>
      item.toLowerCase().includes(input.trim().toLowerCase())
    );
  };

  return (
    <SearchContainer>
      <SearchWrapper $isFocused={isFocused}>
        <StyleSearch>
          <label>
            <input
              onChange={handleInput}
              value={input}
              type="text"
              placeholder="Search in store"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <StyledSearchIcon />
          </label>
        </StyleSearch>

        {isFocused && !input.trim() && (
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

        {isFocused && input.trim() && (
          <StyledDropDown>
            <p className="suosittua">Hakutulokset</p>
            {suggestion.map((item, index) => (
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

      {isFocused && <DarkOverlay onClick={() => setIsFocused(false)} />}
    </SearchContainer>
  );
};

export default Search;

// ================= styled =================

const SearchContainer = styled.div`
  position: relative;
  display: inline-block;
  max-height: 50vw;
  padding: 0 20rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 44rem;
  border: 2px solid transparent;
  background-color: #cccccc3d;
  border-radius: 2.5rem;
  z-index: 10;
  transition: all 0.3s ease-in-out;

  ${({ $isFocused }) =>
    $isFocused &&
    `
      border-color: #1e90ff;
      background-color: white;
      border-radius: 2.5rem 2.5rem 0 0;
    `}

  @media (max-width: 768px) {
    width: ${({ $isFocused }) => ($isFocused ? "90vw" : "18rem")};
    position: ${({ $isFocused }) => ($isFocused ? "fixed" : "relative")};
    top: ${({ $isFocused }) => ($isFocused ? "0.5rem" : "auto")};
    left: ${({ $isFocused }) => ($isFocused ? "50%" : "auto")};
    transform: ${({ $isFocused }) =>
      $isFocused ? "translateX(-50%)" : "none"};
    padding: 0.25rem 0;

    input {
      font-size: 1.4rem !important;
      transition: font-size 0.3s ease-in-out;
    }
  }

  @media (max-width: 400px) {
    width: ${({ $isFocused }) => ($isFocused ? "90vw" : "15rem")};
    input {
      font-size: 1.2rem !important;
      width: 100% !important;
    }
  }
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

    @media (max-width: 400px) {
      font-size: 1.2rem !important;
    }
  }
`;

const StyledSearchIcon = styled(IoIosSearch)`
  position: absolute;
  top: 1.1rem;
  right: 1.5rem;
  color: #636161;

  @media (max-width: 768px) {
    font-size: 2rem !important;
  }
  @media (max-width: 400px) {
    font-size: 1.2rem !important;
  }
`;

const StyledDropDown = styled.div`
  position: absolute;
  top: 100%;
  left: -2px;
  right: -1.5px;
  z-index: 9;
  background-color: white;
  border: 2px solid #1e90ff;
  border-top: none;
  border-radius: 0 0 2.5rem 2.5rem;
  overflow-y: auto;
  max-height: 22rem;

  @media (max-width: 768px) {
    svg {
      font-size: 2 !important;
    }
    p {
      font-size: 1rem;
    }
    h5 {
      font-size: 1.3rem;
    }
  }

  .suosittua {
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 1rem 1.5rem;
  }
`;

const DropDownElement = styled.div`
  padding: 0.3rem 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.silver};
    }

    h5 {
      font-size: 1.4rem;
    }
  }
`;

// 🔥 overlay tối nền khi input focus trên mobile
const DarkOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(53, 53, 53, 0.4);
  z-index: 8;
`;
