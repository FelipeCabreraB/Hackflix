import React from "react";
import { Link } from "react-router-dom";

function NoMatch({ setPage }) {
  return (
    <div>
      <h1 className="mt-5 pt-5">Error 404 – Página no encontrada.</h1>
      <Link to="/" className="text-dark" onClick={() => setPage(1)}>
        <i className="fas fa-arrow-left me-1"></i>Ir a la página principal
      </Link>
    </div>
  );
}

export default NoMatch;
