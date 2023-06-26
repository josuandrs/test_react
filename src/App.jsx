import { useEffect, useState } from "react";
import "./App.css";
import Publicacion from "./nuevo/Publicacion";
import logo from "./img/logo.png";
import Search from "./nuevo/Search";

function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);
  return (
    <>
      <div className="contenedor">
        <div className="head">
          <picture>
            <img src={logo} alt="" />
          </picture>
          <div className="search">
            <Search />
          </div>
        </div>
        <div className="lugar">
          <div className="cuontry">
              <h1>Stay in Finland</h1>
          </div>
          <div className="stay">
              <h3>12 + stay</h3>
          </div>
        </div>
        <div className="anuncios">
        {data.map((el, i) =>{
          return (
            <Publicacion 
              key={i}
              photo={el.photo}
              type={el.type}
              superHost={el.superHost}
              rating={el.rating}
              title={el.title}
              city={el.city}
            />
          )})}
        </div>
        <div className="piePagina">
          <small>created by<u><strong> username</strong></u> - devChallenges.io</small>
        </div>
      </div>      
    </>
  )
}

export default App;
