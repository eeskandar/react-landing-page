import React from "react";

//include images into your bundle

import { Footer } from "./Footer.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Navbar } from "./Navbar.jsx";
import { NewCard } from "./NewCard.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div>
				<Jumbotron />
			</div>
			<div className="multi-cards row mx-5 mb-5 justify-content-between">
					<NewCard/>
					<NewCard/>
					<NewCard/>
					<NewCard/>
			</div>
			<div>
				<Footer/>
			</div>
		</div>
	);
};

export default Home;