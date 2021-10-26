import "./Header.css";
import { Link } from "react-router-dom";

function Header({ searchValue, setSearchValue, setPage, setRating }) {
  return (
    <div id="header" className="my-1">
      <div className="container">
        <div className="d-flex justify-content-between">
          <Link
            to="/"
            className="a-header fw-bold mt-2"
            onClick={() => {
              setPage(1);
              setSearchValue("");
              setRating(0);
            }}
          >
            Hackflix
          </Link>
          <Link to="/sobre-Nosotros" className="a-header fw-bold mt-2">
            Sobre nosotros
          </Link>
          <Link
            to="/contacto"
            className="a-header fw-bold mt-2"
            onClick={() => setPage(1)}
          >
            Contacto
          </Link>
          <Link
            to="/"
            className="a-header fw-bold mt-2"
            onClick={() => {
              setPage(1);
              setSearchValue("");
              setRating(0);
            }}
          >
            Home
          </Link>
        </div>
        <hr />
        <div>
          <h1 className="mt-5 mb-4">¡Tus peliculas favoritas!</h1>
          <h4 className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h4>
          <form
            className="d-flex justify-content-center align-items-center flex-column"
            action=""
          >
            <label className="d-block" htmlFor="searchBar">
              Buscador
            </label>
            <input
              type="text"
              className="form-control"
              id="searchBar"
              placeholder="Ingresar título de la película..."
              value={searchValue}
              onChange={(event) => {
                setSearchValue(event.target.value);
                setPage(1);
                setRating(0);
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
