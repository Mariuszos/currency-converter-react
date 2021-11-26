import React from "react";

class Currency extends React.Component {
	render() {
		return (
			<option value={this.props.value}>{this.props.name}</option>
		)
	}
}

export default Currency;
