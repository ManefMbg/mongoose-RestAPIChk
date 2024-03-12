import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Contact from './Pages/Contact';
import Edit from "./Pages/Edit";
import Add from "./Pages/Add";
import Error from './Pages/Error';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
   <NavBar/>
   <h1>Checkpoint Rest API</h1>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/edit/:d" element={<Edit/>}/>
         <Route path="/add" element={<Add/>}/>
         <Route path="/*" element={<Error/>}/>

     </Routes>
    </div>
  );
}

export default App;