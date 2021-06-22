import Hero from "./Hero";

const About = () => {
	return (
		<>
			<Hero text="About Movie Browser" />
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 my-5">
						<p>
							This project is part of "Section 15: React 201" of "The Ultimate 2021 Fullstack Web Development Bootcamp" on Udemy. We've learned about useState & useEffect and we've used TMDB's API to fetch movie data. Final assignment was to implement some new features to the site e.g add a 404 page, handle missing poster images, handle no search results and adding functionality to search button. I have also added popular movies on home page and more information in detailed view.

						</p>
						
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
