import "./App.scss";
import Header from "./components/Header/header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cambridge from "./components/Cambridge/Cambridge";
import Aboutus from "./components/Aboutus/aboutus";
import Home from "./components/Home";
import Footer from "./components/Footer/footer";
import Study from "./components/Study/study";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cambridge" element={<Cambridge />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
      <Header/>
      <Home/>
        <Study/>
      
        <Footer/>
    </div>
  );
}

export default App;
