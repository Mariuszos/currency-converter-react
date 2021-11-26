import React from "react";
import Currency from "./Currency";
import "./Main.css";

import { getCurrency } from "../helpers";

class Main extends React.Component {
	render() {
		return (
			<main>
			<div className="getCurrency">
				<form onSubmit={getCurrency}>
					<input type="number" className="value" min="0" placeholder="Ile PLN chcesz przeliczyć?" autoFocus />
					<select id="currencyStart">
						<Currency name="Euro" value="eur" />
						<Currency name="Dolar amerykański" value="usd" />
						<Currency name="Frank szwajcarski" value="chf" />
					</select>
					<button type="submit" className="btn">Przelicz</button>
				</form>
				<div className="setCurrency">
					To <span className="currencyValue">0</span> PLN
				</div>
			</div>
			<div className="errors"></div>
		</main>
		);
	}
}

export default Main;
