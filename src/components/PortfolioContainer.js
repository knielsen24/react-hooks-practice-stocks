import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, removeStock }) {
	
	const portfolioCards = portfolio.map(stock => {
		return (
			<Stock
				key={stock.id}
				{...stock}
				handlePortfolio={removeStock}
			/>
		)
	})

	return (
		<div>
			<h2>My Portfolio</h2>
			{portfolioCards}
		</div>
	);
}

export default PortfolioContainer;
