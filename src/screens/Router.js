import Home from "../screens/Home/Home";
import Navegacion from "../components/navbar";
import ListContainer from "../components/itemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/item detail/itemDetailContainer";

const Router = () => {
  return (
    <BrowserRouter>
        <Navegacion/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/categoria/:categoria" element={<ListContainer />}></Route>
        <Route path="/:categoria/:productoID" element={<ItemDetailContainer />}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default Router;