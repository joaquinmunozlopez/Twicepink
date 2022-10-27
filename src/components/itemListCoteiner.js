import { useState, useEffect } from "react";
import productosApi from '../API/productosApi';
import Tarjeta from '../components/home/card';
import { useParams } from "react-router-dom";

const ListContainer = () => {
    const [filter, setFilter] = useState("");
  const [productos, setProductos] = useState([]);
  const { cat } = useParams();

  const getImages = () => {
    setTimeout(() => {
      const productos = productosApi;
      setProductos(productos);
    }, 3000);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="principal_container">
      <h1>Albumes</h1>
      <input
        id="filter"
        name="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />

      <div className="cards-container">
        {cat
          ? productos
              .filter((producto) => producto.title.includes(filter))
              .filter((producto) => producto.id === cat)
              .map((product, i) => (
                <Tarjeta
                  id={i}
                  key={i}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              ))
          : productos
              .filter((producto) => producto.title.includes(filter))
              .map((product, i) => (
                <Tarjeta
                  id={i}
                  key={i}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              ))}
      </div>
    </div>
  );
}

export default ListContainer;