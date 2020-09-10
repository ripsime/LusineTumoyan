import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// Commons
import Header from "./common/Header";
import Nav from "./common/Nav";
// Containers
import Home from "./home/Home";
import Dashboard from "./dashboard/Dashboard";
import PageNotFound from "./errors/PageNotFound";

//const history = createBrowserHistory();

class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<div className="main">
					<Nav />						
					<div className="content">	
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/home" component={Home} />
							<Route exact path="/dashboard" component={Dashboard} />
							<Route component={PageNotFound} />
						</Switch>											
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
