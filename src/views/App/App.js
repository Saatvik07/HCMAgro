import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import { Button } from "@material-ui/core";
function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route exact path='/about' component={About}></Route>
				</Switch>
				{/* <footer>
				<div className='footer-container'>
					<div className='footer-left'>
						<img
							src='https://hcmagroproducts.com/wp-content/uploads/2018/08/LOgo.png'
							alt='logo'
							className='footer-logo'
						></img>
						<h6>© 2020 HCM Agro Products Pvt Ltd. All Rights Reserved.</h6>
					</div>
					<div className='footer-center'>
						<Link to='/'>
							<h4 className='footer-link'>Home</h4>
						</Link>

						<Link to='/about'>
							<h4 className='footer-link'>About Us</h4>
						</Link>
						<Link to='/products'>
							<h4 className='footer-link'>Products</h4>
						</Link>
						<Link to='/catalogue'>
							<h4 className='footer-link'>Catalogue</h4>
						</Link>
					</div>
					<div className='footer-right'>
						<Button
							variant='outlined'
							style={{ color: "#fec397", border: "2px solid #fec397", margin: "10px" }}
						>
							Contact Us
						</Button>
					</div>
				</div>
			</footer> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
