import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Search from "./components/Search";
import MovieView from "./components/MovieView";
import Page404 from "./components/Page404";
import Footer from './components/Footer'
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";



function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [inputText, setInputText] = useState("");

	
	useEffect(() => {
		const TMDB_KEY = process.env.REACT_APP_API_KEY_TMDB
		if (searchText) {
			fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
			)
				.then(response => response.json())
				.then(data => {
					if (data.results !== 0) {
						setSearchResults(data.results);
					}
				});
		}
	}, [searchText]);

	return (
		<div>
			<Navbar searchText={searchText} setSearchText={setSearchText} inputText={inputText} setInputText={setInputText} />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/about" > <About/>  </Route>
				<Route exact path="/search" >
					<Search keyword={searchText} searchResults={searchResults} />
				</Route>
				<Route exact path="/movies/:id" > <MovieView/> </Route>
				<Route path=""> <Page404/> </Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
