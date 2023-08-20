import "./App.scss";
import Header from "./components/Header/header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus/aboutus";
import Footer from "./components/Footer/footer";
import StudyAbb from "./components/StudyAbb/studyAbb";
import HomeDetails from "./pages/HomeDetails";
import Countries from "./pages/Countries/Countries";
import Preloader from "./components/preloader/preloader";
import United from "./components/pages/America/United";
import Aptis from "./components/Aptis/Aptis";
import Ielts from "./components/Ielts/Ielts";
import Other from "./components/Other/Other";
import Contacts from "./components/Contacts/contacts";
import UniversityDetail from "./pages/UniversityDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LanguageProvider } from "./Data/LanguageContext";

function App() {
  return (
    <div className="App">
      <Preloader />
      <LanguageProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/study"} element={<StudyAbb />} />
          <Route path="/cambridge" element={<HomeDetails />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path={"countries"} element={<Countries />} />
          <Route path={"/united"} element={<United />} />
          <Route path={"/aptis"} element={<Aptis />} />
          <Route path={"/ielts"} element={<Ielts />} />
          <Route path={"/other"} element={<Other />} />
          <Route path={"/contacts"} element={<Contacts />} />
          <Route path={"/university_detail"} element={<UniversityDetail />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
