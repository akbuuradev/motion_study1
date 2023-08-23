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
import United from "./main/America/United";
import Aptis from "./components/Aptis/Aptis";
import Ielts from "./components/Ielts/Ielts";
import Other from "./components/Other/Other";
import Contacts from "./components/Contacts/contacts";
import UniversityDetail from "./pages/UniversityDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LanguageProvider } from "./Data/LanguageContext";
import Britain from "./main/GreatBritain/britain";
import Vienna from "./main/Austria/Vienna";
import Berlin from "./main/Germany/berlin";
import Delft from "./main/Holland/delft";
import Dublin from "./main/Ireland/dublin";
import Spain from "./main/Spain/spain";
import Rome from "./main/Italy/rome";
import Paphos from "./main/Cyprus/paphos";
import Hardin from "./main/China/hardin";
import Jelgava from "./main/Latvia/jelgava";
import TabsDetails from "./pages/Tabs/tabsDetails";
import University from "./pages/University/university";

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
          <Route path={"/united"} element={<United/>} />
          <Route path={"/aptis"} element={<Aptis />} />
          <Route path={"/ielts"} element={<Ielts />} />
          <Route path={"/other"} element={<Other />} />
          <Route path={"/contacts"} element={<Contacts/>}/>
          <Route path={"/university_detail"} element={<UniversityDetail/>}/>
          <Route path={"/britain"} element={<Britain/>}/>
          <Route path={"/austria"} element={<Vienna/>}/>
          <Route path={"/germany"} element={<Berlin/>}/>
          <Route path={"/holland"} element={<Delft/>}/>
          <Route path={"/ireland"} element={<Dublin/>}/>
          <Route path={"/spain"} element={<Spain/>}/>
          <Route path={"/italy"} element={<Rome/>}/>
          <Route path={"/cyprus"} element={<Paphos/>}/>
          <Route path={"/china"} element={<Hardin/>}/>
          <Route path={"/latvia"} element={<Jelgava/>}/>
        </Routes>
        {/*<University/>*/}
        {/*<TabsDetails/>*/}
        <Footer/>
      </LanguageProvider>
    </div>
  );
}

export default App;
