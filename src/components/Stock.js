import React from "react";

function Stock({ id, name, price, ticker, type, handlePortfolio }) {
	
	const handleClick = (e) => {
		handlePortfolio(id)
	}

	return (
		<div>
			<div onClick={handleClick} className="card">
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">{ticker}: {price}</p>
				</div>
			</div>
		</div>
	);
}
export default Stock;
