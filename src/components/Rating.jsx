import "./Rating.css";
const RatingBar = require("react-rating").default;

function Rating({ setRating, rating, setPage }) {
  return (
    <div className="d-flex justify-content-center pb-3 pt-1">
      <strong className="me-2">Filtrar por Rating:</strong>
      <RatingBar
        className="text-warning"
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        initialRating={rating}
        start={0}
        step={2}
        stop={10}
        onChange={(rate) => {
          setRating(rate);
          setPage(1);
        }}
      />
    </div>
  );
}

export default Rating;
