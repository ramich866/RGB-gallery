import React from 'react';
import {BrowserRouter, Route , Routes} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddPhoto from './pages/AddPhoto';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/addphoto" element = {<AddPhoto/>}/>
        <Route path = "/gallery" element = {<Gallery/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App