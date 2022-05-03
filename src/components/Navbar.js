import React from "react";

const Navbar = ({ message, listOfCoins }) => {
	return (
		<nav className="navbar navbar-dark bg-dark d-flex justify-content-center px-5">
			<h2 className="navbar-brand m-1">{message}</h2>
			<h2 className="navbar-brand m-3">
				Total Number of Coins: {listOfCoins.length}
			</h2>
		</nav>
	);
};

export default Navbar;