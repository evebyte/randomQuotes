import React from "react";
import "./index.css";

import { getRandomQuote } from "./quotes.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: "",
			source: "",
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.handleClick();
	}

	handleClick = () => {
		const newQuote = getRandomQuote();

		this.setState({
			quote: newQuote.quote,
			source: newQuote.source,
		});
	};

	render() {
		return (
			<div id="quote-box">
				<p id="text" className="text-center">
					{'"'}
					{this.state.quote}
					{'"'}
				</p>
				<p id="author" className="text-center">
					{"- "}
					{this.state.source}
				</p>
				<div className="d-grid gap-2">
					<button
						id="new-quote"
						className="btn btn-primary"
						onClick={this.handleClick}
					>
						New Quote
					</button>
					<a
						id="tweet-quote"
						className="btn btn-secondary"
						style={{ marginTop: 6 }}
						href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${this.state.quote}" - ${this.state.source}`}
						target="_blank"
						rel="noreferrer"
					>
						<i className="fa-brands fa-twitter"></i>
					</a>
				</div>
			</div>
		);
	}
}

export default App;
