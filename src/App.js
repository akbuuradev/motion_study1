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
import Aptis from "./components/Aptis/Aptis";
import Ielts from "./components/Ielts/Ielts";
import Other from "./components/Other/Other";
import Contacts from "./components/Contacts/contacts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LanguageProvider } from "./Data/LanguageContext";
import Vienna from "./main/Austria/Vienna";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Preloader/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path={"/study"} element={<StudyAbb />} />
          <Route path="/cambridge" element={<HomeDetails />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path={"countries"} element={<Countries />} />
          <Route path={"/aptis"} element={<Aptis />} />
          <Route path={"/ielts"} element={<Ielts />} />
          <Route path={"/other"} element={<Other />} />
          <Route path={"/contacts"} element={<Contacts/>}/>
          <Route path={"/united"} element={<Vienna/>}/>
          <Route path={"/britain"} element={<Vienna/>}/>
          <Route path={"/austria"} element={<Vienna/>}/>
          <Route path={"/germany"} element={<Vienna/>}/>
          <Route path={"/holland"} element={<Vienna/>}/>
          <Route path={"/ireland"} element={<Vienna/>}/>
          <Route path={"/spain"} element={<Vienna/>}/>
          <Route path={"/italy"} element={<Vienna/>}/>
          <Route path={"/cyprus"} element={<Vienna/>}/>
          <Route path={"/china"} element={<Vienna/>}/>
          <Route path={"/latvia"} element={<Vienna/>}/>
          <Route path={"/detail"} element={<Detail/>}/>
        </Routes>
        <Footer/>
      </LanguageProvider>
    </div>
  );
}

export default App;
