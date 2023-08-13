import './App.scss';
import Header from "./components/Header/header";
import {Route, Routes} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
        <Routes>
            <Route/>
        </Routes>
    </div>
  );
}

export default App;
