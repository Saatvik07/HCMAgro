import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home}></Route>
				<Route exact path='/about' component={About}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
