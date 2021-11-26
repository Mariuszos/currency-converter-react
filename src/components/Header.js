import React from "react";
import "./Header.css"

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="logo">
				</div>
				<div className="currency">{this.props.appName}</div>
			</header>
		)
	}
}

export default Header;