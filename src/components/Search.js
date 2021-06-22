import Hero from "./Hero";
import Card from "./Card";

const Search = ({ keyword, searchResults }) => {
	
	// keyword[0].toUpperCase()}${keyword.substring(1)}
		const title = `You have searched for the movie: ${keyword}.`;

		const resultsHtml = searchResults.map((data, index) => {
			return <Card movie={data} key={index} />;
		});

		return (
			<>
				{keyword ? <Hero text={title} /> : <Hero text="Search for a movie" />}

				{resultsHtml && keyword ? (
					<div className="container">
						<div className="row">{resultsHtml}</div>
					</div>
				) : (
					<></>
				)}

				{resultsHtml.length === 0 && keyword ? (
					<>
						<h2 className="text-center">No movie titles match your query "{keyword}".</h2>
						<h2 className="text-center">Please try again.</h2>
					</>
				) : (
					<></>
				)}
			</>
		);
	
};

export default Search;
