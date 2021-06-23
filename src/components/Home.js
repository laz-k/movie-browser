import Hero from "./Hero";
import Card from "./Card";
import { useEffect, useState } from "react";

const Home = () => {
	const [movieDetails, setMovieDetails] = useState([]);

	useEffect(() => {
		const TMDB_KEY = process.env.REACT_APP_API_KEY_TMDB
		fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=en-US&page=1&region=GB`
		)
			.then(response => response.json())
			.then(data => {
				setMovieDetails(data.results);
			});
	},[]);

	
	const resultsHtml = movieDetails.map((data, index) => {
		return <Card movie={data} key={index} />;
	});

	return (
		<>
			<Hero text="Welcome to Movie Browser" />
			{resultsHtml && (
	<div className="container">
	<h1 className="text-center my-5">Popular Movies</h1>
		<div className="row">{resultsHtml}</div>
	</div>
) 
}
		</>
	);
};

export default Home;
