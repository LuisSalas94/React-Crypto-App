import React, { useEffect, useState } from "react";

const Coin = ({ listOfCoins }) => {
	const [filteredCoins, setFilteredCoins] = useState(listOfCoins || []);

	useEffect(() => {
		setFilteredCoins(listOfCoins);
	}, [listOfCoins]);

	const handleChange = (e) => {
		const searchResults = listOfCoins.filter((coin) =>
			coin.name.toLowerCase().includes(e.target.value)
		);
		setFilteredCoins(searchResults);
	};

	return (
		<div className="row mt-5">
			<form className="form-inline mb-4">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search your coin"
					onChange={handleChange}
				/>
			</form>

			{filteredCoins.map((coin, index) => (
				<div className="col" key={index}>
					<div className="card my-4 card-style">
						<img src={coin.icon} alt={coin.name} />
						<hr />
						<div className="card-body">
							<h5 className="card-title">
								<span>Name:</span> {coin.name}
							</h5>
							<h5 className="card-title">
								<span>Price:</span> {coin.price}
							</h5>
							<h5 className="card-title">
								<span>Symbol:</span> {coin.symbol}
							</h5>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Coin;
