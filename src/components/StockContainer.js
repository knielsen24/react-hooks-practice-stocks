import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handlePortfolio }) {

	const stockCards = stocks.map(stock => {
		return (
			<Stock
				key={stock.id}
				{...stock}
				handlePortfolio={handlePortfolio}
			/>
		)
	})

	return (
		<div>
			<h2>Stocks</h2>
			{stockCards}
		</div>
	);
}

export default StockContainer;
