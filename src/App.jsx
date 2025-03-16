import Profile from "./pages/Profile.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products.jsx";
import Counter from "./pages/Counter.jsx";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      {/* <nav>This is my navbar</nav> */}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/counter" element={<Counter />} />

        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
