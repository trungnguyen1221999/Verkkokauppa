// English comments
const theme = {
  colors: {
    text: "#333333", // text color
    primary: "#E3101B", // primary color
    background: "#FFFFFF", // main background
    backgroundAlt: "#F1F1F1", // secondary background
    cartBg: "#1767F3", // cart background
    offer: "#FFDD02", // offer color
    silver: "#6e6a6a",
    overlay: "rgba(0, 0, 0, 0.5)",
  },

  device: {
    mobileS: "only screen and (max-width: 480px)", // very small phones
    mobileL: "only screen and (min-width: 481px) and (max-width: 767px)", // large phones
    tablet: "only screen and (min-width: 768px) and (max-width: 1024px)", // tablets
    laptop: "only screen and (min-width: 1025px) and (max-width: 1439px)", // laptops
    desktop: "only screen and (min-width: 1440px)", // large desktops
  },
};

export default theme;
