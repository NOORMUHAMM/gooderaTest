import './App.css';
import Navbar from './Componet/Navbar';
import ShowJobs from './Componet/ShowJobs';
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>

    <div className="App">
      <Navbar />
      <ShowJobs />
      
    </div>
    
    </>
  );
}

export default App;
