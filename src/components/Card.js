import { Link } from "react-router-dom";
import missingPoster from "../missing-poster.jpg"

const Card = ({ movie }) => {
	const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	const detailUrl = `/movies/${movie.id}`;

	return (
		<div className="col-lg-3 col-md-4  my-4">
			<div className="card h-100">
				<img
					src={movie.poster_path !== null ? posterUrl : missingPoster}
					className="card-img-top"
					alt={movie.original_title}
				/>
				<div className="card-body d-flex flex-column">
					<h5 className="card-title">Title: {movie.original_title}</h5>
					<h6 className="card-text">
						Release date: {movie.release_date !== undefined ? movie.release_date.split("-").reverse().join("-") : "Unknown"}
					</h6>
					<Link to={detailUrl} className="btn btn-primary align-self-center mt-auto w-75  ">
						Show Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
