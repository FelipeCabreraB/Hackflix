import "./Movies.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "react-bootstrap/Spinner";
const axios = require("axios").default;

function Movies({
  foundMovies,
  searchValue,
  setFoundMovies,
  page,
  setPage,
  rating,
}) {
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    let APIurl = "";
    if (searchValue !== "") {
      APIurl =
        "https://api.themoviedb.org/3/search/movie?api_key=3ef483e57f6d90b444c9abcd1ac4d177&query=" +
        searchValue +
        "&page=" +
        page;
    } else {
      APIurl =
        "https://api.themoviedb.org/3/discover/movie?api_key=3ef483e57f6d90b444c9abcd1ac4d177&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&vote_average.gte=" +
        rating +
        "&page=" +
        page;
    }
    const getMovies = async () => {
      const response = await axios.get(APIurl);
      setTotalPages(response.data.total_pages);
      if (page > 1) {
        setFoundMovies((prev) => [...prev, ...response.data.results]);
      } else {
        setFoundMovies([...response.data.results]);
      }
    };
    getMovies();
  }, [searchValue, rating, page]);

  return (
    <InfiniteScroll
      dataLength={foundMovies.length}
      next={() => setPage((prev) => prev + 1)}
      hasMore={page < totalPages}
      loader={
        <Spinner className="my-3" animation="grow" variant="dark"></Spinner>
      }
    >
      <div className="container pb-2">
        <div className="row">
          {foundMovies.map((movie) => (
            <div key={movie.id} className="col-2">
              <Link
                className="text-decoration-none"
                to={"/pelicula/" + movie.id}
              >
                {movie.poster_path !== null ? (
                  <img
                    id="image"
                    className="img-fluid my-2"
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    alt=""
                  />
                ) : (
                  <div className="border mt-2">
                    <p className="mt-3">{movie.title}</p>
                    <p className="no-image">No image available</p>
                    <i class="fas fa-times-circle text-danger mb-3"></i>
                  </div>
                )}
              </Link>
            </div>
          ))}
          {foundMovies.length == 0 && (
            <div className="bg-light card shadow py-3 mt-5">
              <h5 className="">
                Lo sentimos, no encontramos la pelicula que estabas buscando
              </h5>
            </div>
          )}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default Movies;
