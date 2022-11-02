import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import productosApi from "../../API/productosApi"
import ItemDetalle from "./itemDetail";

const ItemDetailContainer = () => {
    const [filter, setFilter] = useState("");
    const [producto, setProducto] = useState([])
    const {productoID} = useParams();

    const getData = () => {
        setTimeout(() => {
          const productos = productosApi;
          setProducto(productos);
        }, 3000);
      };

      useEffect(() => {
        getData();
      }, []);


    return(
        <div>
            <h1>Albumes</h1>
            <input
             id="filter"
             name="filter"
             type="text"
             value={filter}
             onChange={(event) => setFilter(event.target.value)}
            />
            {productoID ? producto: producto
            .filter((producto) => producto.title.includes(filter))
            .filter((producto) => producto.id === productoID)
            .map((product)=>(
                <ItemDetalle
                  id={product.id}
                  key={product.id}
                  title={product.title}
                  image={product.image}
                  category={product.category}
                  description={product.description}
                  price={product.price}
                />
            ))}
        </div>
    )
}

export default ItemDetailContainer;