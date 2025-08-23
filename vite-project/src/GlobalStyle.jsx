// English comments
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }
  body{
    font-size: 1.6rem;
    font-family: Antarctica, "Helvetica Neue", Helvetica, Arial, sans-serif;
     background-color: ${({ theme }) => theme.colors.background};
  }
  img, picture, video, canvas, svg {
   object-fit: cover;
    overflow: hidden;
  }

  input, button, textarea, select {
    font: inherit;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }
  

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
  p,h1,h2,h3,h4,h5,h6, button {
     color: ${({ theme }) => theme.colors.text};
  }
`;

export default GlobalStyle;
