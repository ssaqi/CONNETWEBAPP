import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import CreateCard from "./Pages/CreateCardPage"

function App() {
  return (

    <>
    
        <Routes>
          
        <Route path="/" element={<Home/>}/>
        <Route path="/card" element={<CreateCard/>} />
        
  
      </Routes> 
    
    </>
  );
}

export default App;
