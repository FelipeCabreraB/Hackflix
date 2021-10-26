import React from "react";
import { useParams } from "react-router-dom";
import "./Movie.css";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

const axios = require("axios").default;

function Movie({ setPage }) {
  const params = useParams().movieId;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/" +
            params +
            "?api_key=3ef483e57f6d90b444c9abcd1ac4d177&language=en-US"
        );
        setMovie(response.data);
      } catch (err) {
        setMovie({
          title: "Error: no existe ningúna pelicula con ese Id",
        });
      }
    };
    getMovies();
  }, [params]);

  return (
    <>
      {movie === null ? (
        <Spinner className="mt-5" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div className="container">
          <div className="card shadow mt-3 p-3 movie-bg">
            <h1 className="mb-3 mt-3">{movie.title}</h1>
            <hr />
            <div className="d-flex">
              {movie.poster_path !== null ? (
                <img
                  id="image-movie"
                  className="img-fluid my-2 mx-3"
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  alt=""
                />
              ) : (
                <div className="border me-3 px-3">
                  <p className="mt-3">{movie.title}</p>
                  <p className="no-image">No image available</p>
                  <i class="fas fa-times-circle text-danger"></i>
                </div>
              )}
              <div className="d-flex flex-column justify-content-center">
                <div className="d-flex">
                  <h5 className="my-3 text-start">Año de estreno:</h5>
                  <p className="my-3 ms-4">
                    {movie.release_date} <i className="fas fa-video ms-2"></i>{" "}
                  </p>
                </div>
                <div className="d-flex">
                  <h5 className="my-3 text-start">Ranking promedio:</h5>
                  <p className="my-3 ms-4">
                    {movie.vote_average}{" "}
                    <i className="fas fa-star text-warning ms-2"></i>
                  </p>
                </div>
                <div className="d-flex">
                  <h5 className="my-3 text-start">Cantidad de votos:</h5>
                  <p className="my-3 ms-4">
                    {movie.vote_count}{" "}
                    <i className="fas fa-user-check text-success ms-2"></i>
                  </p>
                </div>
                <div>
                  <h5 className="my-3 text-start">Descripción: </h5>
                  <p className="my-3 ms-4 text-start">{movie.overview} </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="text-start">
              <Link to="/" className="text-dark" onClick={() => setPage(1)}>
                <i className="fas fa-arrow-left me-1"></i>Volver
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Movie;
