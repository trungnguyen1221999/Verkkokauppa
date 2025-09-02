import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdMyLocation } from "react-icons/md";
import { PiCheckCircleBold } from "react-icons/pi";

const ZipStore = ({ className }) => {
  const [openZip, setOpenZip] = useState(false);
  const [inputValue, setInputValue] = useState("00220");
  const [postCodeNoti, setPostCodeNoti] = useState("");
  const [savePostCode, setSavePostCode] = useState(false);
  const [storeOpen, setStoreOpen] = useState(false);
  const [storeSave, setStoreSave] = useState(false);
  useEffect(() => {
    if (savePostCode) {
      const timer = setTimeout(() => setSavePostCode(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [savePostCode]);
  useEffect(() => {
    if (storeSave) {
      const time = setTimeout(() => setStoreSave(false), 3000);
      return () => clearTimeout(time);
    }
  }, [storeSave]);
  const handleAutoFillZip = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // gọi API để lấy zip code từ lat/lng
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          const zip = data.address.postcode || "";
          setInputValue(zip);
          setPostCodeNoti(checkPostCode(zip));
        } catch (error) {
          console.error("Error fetching postal code:", error);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
      }
    );
  };
  function checkPostCode(postCode) {
    const trimmed = postCode.trim();
    if (trimmed === "") return "Postal code is required";
    else if (!/^\d{5}$/.test(trimmed))
      return "The postal code must be five digits.";
    return "";
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setPostCodeNoti(checkPostCode(value));
  };

  return (
    <div className={className}>
      <StyledZipStore>
        <button onClick={() => setOpenZip(true)}>00220</button>
        <hr />
        <button onClick={() => setStoreOpen(true)}>Helsinki store</button>
      </StyledZipStore>

      {openZip && (
        <OVerLay onClick={() => setOpenZip(false)}>
          <StyledZipPopUp onClick={(e) => e.stopPropagation()}>
            <h2>Enter your zip code</h2>
            <p className="close" onClick={() => setOpenZip(false)}>
              x
            </p>
            <form action="">
              <label htmlFor="postCode">
                <h3>Delivery to postal code</h3>
                <p>E.g. 14470</p>
                <StylePostNoti>{postCodeNoti}</StylePostNoti>
              </label>
              <div className="input">
                <input
                  id="postCode"
                  type="text"
                  placeholder="00220"
                  maxLength={5}
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <StyledLocationIcon onClick={handleAutoFillZip} />
              </div>
            </form>
            <hr />
            <button
              onClick={() => {
                const err = checkPostCode(inputValue);
                setPostCodeNoti(err);
                if (!err) {
                  setSavePostCode(true);
                  setOpenZip(false);
                } else {
                  setSavePostCode(false);
                }
              }}
            >
              Save zip code
            </button>
          </StyledZipPopUp>
        </OVerLay>
      )}

      {/* chỉ render notification khi savePostCode = true */}

      <StylePostCodeSaveNoti show={savePostCode}>
        <div>
          <StyledPiCheckCircleBold />
        </div>
        <p>Postcode is saved</p>
        <CloseBtn onClick={() => setSavePostCode(false)}>x</CloseBtn>
      </StylePostCodeSaveNoti>
      {storeOpen && (
        <OVerLay onClick={() => setStoreOpen(false)}>
          <StyledLocationSelection onClick={(e) => e.stopPropagation()}>
            <h3>Select a location</h3>
            <StyledLabelDiv>
              <Label>
                <input type="radio" name="store" value="Helsinki" />
                <FakeRadio />
                <div>
                  <h5>Helsinki Store</h5>
                  <p>Tyynenmerenkatu 11, 00220 Helsinki</p>
                </div>
              </Label>
              <Label>
                <input type="radio" name="store" value="Oulu" />
                <FakeRadio />
                <div>
                  <h5>Oulu Store</h5>
                  <p>Kaakkurinkulma 4, 90410 Oulu</p>
                </div>
              </Label>
              <Label>
                <input type="radio" name="store" value="Pirkkala" />
                <FakeRadio />
                <div>
                  <h5>Pirkkala Store</h5>
                  <p>Saapastie 2, 33950 Pirkkala</p>
                </div>
              </Label>
              <Label>
                <input type="radio" name="store" value="Raisio" />
                <FakeRadio />
                <div>
                  <h5>Raisio Store</h5>
                  <p>Kuloistentie 3, 21280 Raisio</p>
                </div>
              </Label>
              <Label>
                <input type="radio" name="store" value="Vantaa" />
                <FakeRadio />
                <div>
                  <h5>Vantaa pickup warehouse</h5>
                  <p>Tyynenmerenkatu 11, 01530 Vantaa</p>
                </div>
              </Label>
            </StyledLabelDiv>
            <p className="noStore">
              If you are not shopping in a store, choose:
            </p>

            <Label>
              <input type="radio" name="store" value="no-store" />
              <FakeRadio />
              <h5>No store selection</h5>
            </Label>
            <hr />
            <button
              onClick={() => {
                setStoreSave(true);
                setStoreOpen(false);
              }}
            >
              Save
            </button>
            <div className="close" onClick={() => setStoreOpen(false)}>
              x
            </div>
          </StyledLocationSelection>
        </OVerLay>
      )}
      <StylePostCodeSaveNoti show={storeSave}>
        <div>
          <StyledPiCheckCircleBold />
        </div>
        <p>Store is saved</p>
        <CloseBtn onClick={() => setStoreSave(false)}>x</CloseBtn>
      </StylePostCodeSaveNoti>
    </div>
  );
};

export default ZipStore;

// ----------- Styled Components (giữ nguyên style của ông) -----------

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
    opacity: 0.6;
    @media (max-width: 768px) {
      display: none;
    }
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
  width: 30rem;
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
    transform: scaleY(0.4);
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

export const OVerLay = styled.div`
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

const StylePostNoti = styled.p`
  font-size: 1.1rem !important;
  color: ${({ theme }) => theme.colors.primary} !important;
  font-weight: 400 !important;
`;

const StylePostCodeSaveNoti = styled.div`
  display: flex;
  position: fixed;
  transition: 0.3s;
  bottom: 7rem;
  z-index: 99999;
  left: 50%;
  transform: translateX(-50%)
    translateY(${(props) => (props.show ? "0" : "10px")});
  opacity: ${(props) => (props.show ? 1 : 0)};
  gap: 1rem;
  align-items: stretch;
  overflow: hidden;
  align-items: center;
  border-radius: 1rem;
  width: 20rem;
  border: 0.2px solid #ccc;
  background-color: #add8e6;
  scale: 1.15;
  div {
    background-color: #06a55d;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 0.4rem;
  }
  p {
    font-size: 1.3rem;
    padding: 0.4rem;
    flex: 1;
  }
`;

const StyledPiCheckCircleBold = styled(PiCheckCircleBold)`
  padding: 0.2rem;
  color: white;
  scale: 1.3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseBtn = styled.p`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  right: 0.2rem;
  cursor: pointer;
  font-size: 1.3rem !important;
  color: #06a55d;
`;

const StyledLocationSelection = styled.div`
  width: 38rem;
  position: fixed;
  background-color: #fff;
  z-index: 999;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.5px solid #cccc;
  border-radius: 1rem;
  padding: 1.6rem;
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  label {
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    background-color: #cccccc3d;

    padding: 1rem;
  }

  p {
    font-size: 1.3rem;
    color: #535353;
  }
  button {
    margin-top: 1.3rem;
    color: white;
    background-color: ${({ theme }) => theme.colors.cartBg};
    border: 1px solid ${({ theme }) => theme.colors.cartBg};
    border-radius: 10rem;
    font-size: 1.3rem;
    font-weight: 600;
    padding: 0.6rem;
    opacity: 0.85;
    transition: 0.3s;
  }
  button:hover {
    opacity: 1;
  }
  hr {
    margin-top: 1.5rem;
    opacity: 0.6;
  }
  .noStore {
    margin-bottom: 0.8rem;
  }
  .close {
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    font-size: 1.5rem;

    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close:hover {
    background-color: #cccc;
  }
`;

const StyledLabelDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid #cccc;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;
// Styled Components cho radio custom
const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 1rem;
  background-color: #cccccc3d;
  position: relative;
  border: 0.5px solid #cccccca8;

  input {
    opacity: 0;
    position: absolute;
  }

  div {
    display: flex;
    flex-direction: column;
  }
  &:hover,
  &:active {
    background-color: #add8e6;
  }
`;

const FakeRadio = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: inline-block;
  padding: 0.1rem;
  ${Label} input:checked + & {
    background-color: white;
    border-color: ${({ theme }) => theme.colors.cartBg};
    border: 4px solid ${({ theme }) => theme.colors.cartBg};
    scale: 1.1;
  }
`;
