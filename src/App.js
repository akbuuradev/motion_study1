import "./App.scss";
import Header from "./components/Header/header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus/aboutus";
import Footer from "./components/Footer/footer";
import StudyAbb from "./components/StudyAbb/studyAbb";
import HomeDetails from "./pages/HomeDetails";
import Countries from "./components/pages/Countries/Countries";
import Preloader from "./components/preloader/preloader";
import United from "./components/pages/United/United";
import Aptis from "./components/Aptis/Aptis";
import Ielts from "./components/Ielts/Ielts";
import Other from "./components/Other/Other";

function App() {
  return (
    <div className="App">
      <Preloader/>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
