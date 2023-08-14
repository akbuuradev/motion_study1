import "./App.scss";
import Header from "./components/Header/header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus/aboutus";
import Footer from "./components/Footer/footer";
import StudyAbb from "./components/StudyAbb/studyAbb";
import HomeDetails from "./pages/HomeDetails";
import Countries from "./components/pages/Countries/Countries";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={"/study"} element={<StudyAbb/>}/>
                <Route path="/cambridge" element={<HomeDetails/>}/>
                <Route path="/about" element={<Aboutus/>}/>
                <Route path={'countries'} element={<Countries/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
