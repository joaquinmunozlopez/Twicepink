import Home from "../screens/Home/Home";
import Navegacion from "../components/navbar";
import Prueba from "./Albumes/albums";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
        <Navegacion/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Albumes" element={<Prueba />}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default Router;