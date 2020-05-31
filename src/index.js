import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./views/home/Home";
import "./assets/main.css";
import * as serviceWorker from "./serviceWorker";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import SignIn from "./views/sign-in/SignIn";
import GrevianceSection from "./views/greviance-section/GrevianceSection";
import ViewGreivances from "./views/view-greivances/ViewGreivances";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/signin" component={SignIn} />
				<Route path="/dashboard" component={GrevianceSection} />
				<Route path="/view-all" component={ViewGreivances}></Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
