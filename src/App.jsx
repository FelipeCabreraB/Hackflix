import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Rating from "./components/Rating";
import Movie from "./components/Movie";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);
  const [rating, setRating] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setPage={setPage}
              setRating={setRating}
            />
            {searchValue === "" && (
              <Rating rating={rating} setRating={setRating} setPage={setPage} />
            )}
            <Movies
              searchValue={searchValue}
              rating={rating}
              foundMovies={foundMovies}
              setFoundMovies={setFoundMovies}
              page={page}
              setPage={setPage}
            />
          </Route>
          <Redirect from="/movie/:movieId" to="/pelicula/:movieId"></Redirect>
          <Route path="/pelicula/:movieId">
            <Movie setPage={setPage} />
          </Route>
          <Route path="/sobre-Nosotros">
            <AboutUs setPage={setPage} />
          </Route>
          <Route path="/contacto">
            <Contact setPage={setPage} />
          </Route>
          <Route>
            <NoMatch setPage={setPage} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
