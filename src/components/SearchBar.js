import React from "react";

function SearchBar({ handleSelect, handleSort }) {

	const handleChecked = (e) => {
		handleSort(e.target.value)
	}

	return (
		<div>
			<strong>Sort by:</strong>
			<label>
				<input
					type="radio"
					value="Alphabetically"
					name="sort"
					checked={null}
					onChange={handleChecked}
				/>
				Alphabetically
			</label>
			<label>
				<input
					type="radio"
					value="Price"
					name="sort"
					checked={null}
					onChange={handleChecked}
				/>
				Price
			</label>
			<br />
			<label>
				<strong>Filter:</strong>
				<select onChange={handleSelect}>
					<option value="Tech">Tech</option>
					<option value="Sportswear">Sportswear</option>
					<option value="Finance">Finance</option>
				</select>
			</label>
		</div>
	);
}

export default SearchBar;
