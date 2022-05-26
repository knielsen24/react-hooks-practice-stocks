import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import { StrictMode } from "react/cjs/react.production.min";

function MainContainer() {

	const [stocks, setStocks] = useState([])
	const [portfolio, setPortfolio] = useState([])
	const [category, setCategory] = useState("")

	const baseURL = "http://localhost:3001/stocks"
	useEffect(() => {
		fetch(baseURL)
			.then(r => r.json())
			.then(data => setStocks(data))
	}, [])

	const handlePortfolio = (id) => {
		const findStock = stocks.find(stock => stock.id === id)
		const updatedPortfolio = [...portfolio, findStock]
		setPortfolio(updatedPortfolio)
	}

	const removeStock = (id) => {
		const filterStock = portfolio.filter(stock => stock.id !== id)
		setPortfolio(filterStock)
	}

	const handleSort = (value) => {
		const sortStocks = stocks.map(stock => stock).sort((a, b) => {
			if (value === "Price") return a.price - b.price
			else if (value === "Alphabetically") return a.name.localeCompare(b.name)
		})
		setStocks(sortStocks)
	}

	const handleSelect = (e) => {
		setCategory(e.target.value)
	}

	const filterStocks = stocks.filter(stock => {
		if (stock.type.includes(category)) return true
	})

	return (
		<div>
			<SearchBar handleSort={handleSort} handleSelect={handleSelect} />
			<div className="row">
				<div className="col-8">
					<StockContainer stocks={filterStocks} handlePortfolio={handlePortfolio} />
				</div>
				<div className="col-4">
					<PortfolioContainer portfolio={portfolio} removeStock={removeStock} />
				</div>
			</div>
		</div>
	);
}

export default MainContainer;
