import React from "react";
import Header from "../components/Header";
import ProductsItems from "./ProductsItems";

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<ProductsItems />
		</React.Fragment>
	);
};

export default Home;
