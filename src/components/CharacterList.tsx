import { useState, useEffect } from "react";
import { Character } from "./Character";
import "../App.css";
import "./Character.css"
import izquierda from "../assets/izquierda.png"
import derecha from "../assets/derecha.png"
function NavPage({ page, setPage }) {
  return (
    <header className="d-flex justify-content-between align-items-center ">
    <p>Page: {page}</p>
    <div className="botones-paginacion">
  <div className="boton-atras">
    {page > 1 && (
      <button 
        className="btn btn-danger btn-sm"
        onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))} // Botón para ir a la página anterior
      >
        <img src={izquierda} alt="" style={{ width: "30px", margin: "5px", height: "20px" }} /> Prev Page {page - 1}
      </button>
    )}
  </div>

  <div className="boton-adelante">
    <button
      className="btn btn-danger btn-sm"
      onClick={() => setPage(page + 1)}
    >
       Next Page  <img src={derecha} alt="" style={{ width: "30px",margin: "5px", height: "20px" }} />{page + 0 }
    </button>
    
  </div>
</div>

  </header>
  );
}

export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container ">
      <NavPage page={page} setPage={setPage} />

      <div className="row row-cols-3  "> {/* Columnas de 3 */}
        {characters.map((character) => (
          <div className="col mb-4  " key={character.id}>
            <Character
              key={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default CharacterList;
