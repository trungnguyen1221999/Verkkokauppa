import React, { useState } from "react";
import styled from "styled-components";
import { MdMyLocation } from "react-icons/md";

const ZipStore = () => {
  const [openZip, setOpenZip] = useState(false);
  const [inputValue, setInputValue] = useState("00220");

  return (
    <div>
      <StyledZipStore>
        <button onClick={() => setOpenZip(true)}>00220</button>
        <hr />
        <button>Helsinki store</button>
      </StyledZipStore>
      {openZip && (
        <OVerLay>
          <StyledZipPopUp>
            <h2>Enter your zip code</h2>
            <p className="close" onClick={() => setOpenZip(false)}>
              x
            </p>
            <form action="">
              <label htmlFor="postCode">
                <h3>Delivery to postal code</h3>
                <p>E.g. 14470</p>
              </label>
              <div className="input">
                <input
                  id="postCode"
                  type="text"
                  placeholder="00220"
                  maxLength={5}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.value)}
                />
                <StyledLocationIcon />
              </div>
            </form>
            <hr />
            <button>Save zip code</button>
          </StyledZipPopUp>
        </OVerLay>
      )}
    </div>
  );
};

export default ZipStore;

const StyledZipStore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  button {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.8rem;
    border-radius: 2rem;
  }
  button:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
  hr {
    width: 0.3px;
    height: 2.5rem;
  }
`;
const StyledZipPopUp = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  z-index: 999;
  padding: 1.5rem;
  border-radius: 1rem;
  width: 29rem;
  gap: 2rem;

  h2 {
    font-size: 2rem;
  }
  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    padding: 0.2rem;
  }
  label {
    h3 {
      font-size: 1.35rem;
    }
    p {
      font-size: 1.35rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.silver};
    }
  }
  input {
    border: 0.3px solid;
    width: 6rem;
    border-radius: 0.5rem;
    padding: 0.5rem 0rem;
    font-size: 1.4rem;
    color: black;
    text-align: center;
  }
  input:hover,
  input:active {
    border: 3px solid ${({ theme }) => theme.colors.cartBg};
  }
  form {
    display: flex;
    justify-content: space-between;
    .input {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.silver};
    transform: scaleY(0.4); /* co lại chiều dày */
    transform-origin: center;
  }
  button {
    font-size: 1.2rem;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.cartBg};
    opacity: 0.9;
    color: white;
    padding: 0.8rem;
    border-radius: 2rem;
    transition: 0.3s;
  }
  button:hover,
  button:active {
    opacity: 1;
  }
`;

const OVerLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.overlay};

  z-index: 998;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const StyledLocationIcon = styled(MdMyLocation)`
  color: ${({ theme }) => theme.colors.cartBg};
  cursor: pointer;
  border: 0.5px solid ${({ theme }) => theme.colors.cartBg};
  padding: 0.3rem;
  border-radius: 50%;
  transform: scale(1.5);
`;
