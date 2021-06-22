import React from "react";
import Hero from "./Hero";

function Page404() {
	return (
		<>
		<Hero text="Ooops! Code 404" />
			<h4 className="text-center my-5">The page you're looking for doesn't exist.</h4>
		</>
	);
}

export default Page404;
