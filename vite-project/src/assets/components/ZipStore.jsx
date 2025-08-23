import React from "react";
import styled from "styled-components";

const ZipStore = () => {
  return (
    <StyledZipStore>
      <button>00220</button>
      <hr />
      <button>Helsinki store</button>
    </StyledZipStore>
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
