import Header from "./assets/components/Header";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Gaming from "./assets/pages/catalog/Gaming";
import PictureSound from "./assets/pages/catalog/PictureSound";
import PhonesTabletsWatches from "./assets/pages/catalog/PhonesTabletsWatches";
import DomesticAppliances from "./assets/pages/catalog/DomesticAppliances";
import HomeYard from "./assets/pages/catalog/HomeYard";
import Hobbies from "./assets/pages/catalog/Hobbies";
import Toimitus from "./assets/pages/Toimitus";
import Outlet from "./assets/pages/Outlet";
import Poistoerat from "./assets/pages/Poistoerat";
import Yrityksille from "./assets/pages/Yrityksille";
import Oppaat from "./assets/pages/Oppaat";
import Ajankohtaista from "./assets/pages/Ajankohtaista";
import InformationTech from "./assets/pages/catalog/InformationTech";
import Palvelut from "./assets/pages/Palvelut";
import Footer from "./assets/components/Footer";
import Error404 from "./assets/pages/Error404";
import { MenuProvider } from "./assets/components/MenuContext";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MenuProvider>
        <Header />
      </MenuProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/etusivu" replace />} />

        <Route path="/etusivu" element={<Home />} />
        <Route path="/catalog/tietotekniikka" element={<InformationTech />} />
        <Route path="/catalog/pelaaminen" element={<Gaming />} />
        <Route path="/catalog/kuva-ja-aani" element={<PictureSound />} />
        <Route
          path="/catalog/puhelimet-tabletit-ja-kellot"
          element={<PhonesTabletsWatches />}
        />

        <Route path="/catalog/kodinkoneet" element={<DomesticAppliances />} />
        <Route path="/catalog/koti-ja-piha" element={<HomeYard />} />
        <Route
          path="/catalog/harrastukset-ja-vapaa-aika"
          element={<Hobbies />}
        />
        <Route path="/wolt-tunnin-kotiinkuljetus" element={<Toimitus />} />
        <Route path="/outlet/yksittaiskappaleet" element={<Outlet />} />
        <Route path="/poistoerat" element={<Poistoerat />} />
        <Route path="/yritysmyynti" element={<Yrityksille />} />
        <Route path="/artikkelit" element={<Oppaat />} />
        <Route path="/palvelut" element={<Palvelut />} />
        <Route path="/ajankohtaista" element={<Ajankohtaista />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
