import React from 'react';
import {BrowserRouter, Route , Routes} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddPhoto from './pages/AddPhoto';
import Gallery from './pages/Gallery';
import ProtectedRoute from './components/ProtectedRoute';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path = "/" element = {<Gallery/>}/>
          <Route path = "/photo/:id" element = {<Photo/>}/>
          <Route path = "/addphoto" element = {<AddPhoto/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App