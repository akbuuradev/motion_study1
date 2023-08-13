import './App.scss';
import Header from "./components/Header/header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer/footer";
import Study from "./components/Study/study";

function App() {
  return (
    <div className="App">
      <Header/>
        <Home/>
        <Study/>
        <Routes>
            <Route/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
