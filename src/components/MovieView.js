import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieView() {
	const { id } = useParams();
	const [movieDetails, setMovieDetails] = useState({});
	const [movieActors, setMovieActors] = useState([]);
	const [movieCrew, setMovieCrew] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const TMDB_KEY = process.env.REACT_APP_API_KEY_TMDB;
		fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_KEY}&language=en-US`)
			.then(response => response.json())
			.then(data => {
				setMovieDetails(data);
				setIsLoading(false);
			});
	}, [id]);

	useEffect(() => {
		const TMDB_KEY = process.env.REACT_APP_API_KEY_TMDB;
		fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_KEY}&language=en-US`)
			.then(response => response.json())
			.then(data => {
				setMovieActors(data.cast);
				setMovieCrew(data.crew)
				setIsLoading(false);
			});
	}, [id]);

	function renderMovieDetails() {

		const actors = movieActors.map(item =>{
			return item.name
		})

		const director = movieCrew.filter(item =>item.job === "Director").map(item => item.name)

		if (isLoading) {
			return <Hero text="Loading..." />;
		}
		if (movieDetails) {
			const posterPath = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
			const missingPoster = "/images/missing-poster.jpg";
			const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`;
			return (
				<>
					<Hero text={movieDetails.original_title} backdrop={backdropUrl} />
					<div className="container my-5">
						<div className="row"  >
							<div className="col-md-3" >
								<img
									src={movieDetails.poster_path !== null ? posterPath : missingPoster}
									alt="movie poster"
									className="img-fluid shadow rounded"
								/>
							</div>
							<div className="col-md-9">
								<h2>
									{movieDetails.original_title} ({movieDetails.release_date.substr(0, 4)}){" "}
								</h2>
								<p className="lead">"{movieDetails.tagline}"</p>
								<p className="lead">{movieDetails.overview}</p>
								<h6 className="lead">
									<strong>Director:</strong> {director}
								</h6>
								<h6 className="lead"><strong>Actors:</strong> {actors.slice(0,4).toString().split(",").join(", ")}.</h6>
								<h6 className="lead">
									<strong>Status:</strong> {movieDetails.status}
								</h6>
								<h6 className="lead">
									<strong>Budget:</strong> $ {movieDetails.budget.toFixed().replace(/\d(?=(\d{3})+$)/g, "$&,")}
								</h6>
								<h6 className="lead">
									<strong>Revenue:</strong> $ {movieDetails.revenue.toFixed().replace(/\d(?=(\d{3})+$)/g, "$&,")}
								</h6>
								<h6 className="lead">
									<strong>Rating:</strong> {movieDetails.vote_average}
								</h6>
							</div>
						</div>
					</div>
				</>
			);
		}
	}
	return renderMovieDetails();
}

export default MovieView;

// https://image.tmdb.org/t/p/original/8ChCpCYxh9YXusmHwcE9YzP0TSG.jpg
