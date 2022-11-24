import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./nav/Nav";
import List from './Components/List/List';
import Dropdown from './Components/Dropdown/Dropdown';
import Date from './Components/Date/Date';





const App = () => {
  return (
    <BrowserRouter>

        <Routes>

        
           <Route path="/" element={<Nav />}>

          <Route path="/list" element={<List />} />
          <Route path="/Dropdown" element={<Dropdown />} />
          <Route path="/Date" element={<Date />} />

            

         </Route> 


          {/* <Route path="*" element={<h1>Page Not Found</h1>} /> */}

        </Routes>

      </BrowserRouter>
    
  )
}

export default App