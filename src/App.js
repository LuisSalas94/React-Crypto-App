import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Coin from "./components/Coin";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
	const [listOfCoins, setListOfCoins] = useState([]);

	const [loading, setLoading] = useState(true);

	const callCryptoAPI = async () => {
		setLoading(true);
		const url = "https://api.coinstats.app/public/v1/coins?skip=0&limit=90";
		const resp = await fetch(url);
		const data = await resp.json();
		setListOfCoins(data.coins);
		setLoading(false);
	};

	useEffect(() => {
		callCryptoAPI();
	}, []);

	return (
		<>
			<Navbar
				message="#100DaysOfCode: Crypto Price App"
				listOfCoins={listOfCoins}
			/>
			<div className="container .container-style">
				{loading ? (
					<h1>Loading...</h1>
				) : (
					<>
						<Coin listOfCoins={listOfCoins} />
					</>
				)}
			</div>
		</>
	);
}

export default App;
