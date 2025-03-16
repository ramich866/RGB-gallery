import React from 'react';
import {BrowserRouter, Route , Routes} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddPhoto from './pages/AddPhoto';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/addphoto" element = {<AddPhoto/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App