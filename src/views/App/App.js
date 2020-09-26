import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Products from "../Products/Products";
import About from "../About/About";
import {
	Button,
	TableBody,
	TableCell,
	TableHead,
	Table,
	TableRow,
	ListItem,
	ListItemIcon,
	ListItemText,
	TextField,
} from "@material-ui/core";
import Manure from "../Products/Manure/Manure";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import TripOriginIcon from "@material-ui/icons/TripOrigin";
import EmailIcon from "@material-ui/icons/Email";
import Contact from "../Contact/Contact";
function App() {
	const [email, setEmail] = useState("");
	return (
		<div className='content-footer'>
			<BrowserRouter>
				<div className='content'>
					<Switch>
						<Route exact path='/' component={Home}></Route>
						<Route exact path='/about' component={About}></Route>
						<Route path='/products' component={Products}></Route>
						<Route path='/manure' component={Manure}></Route>
						<Route path='/contact' component={Contact}></Route>
					</Switch>
				</div>

				<footer>
					<div className='footer-container'>
						<div className='footer-left'>
							<img
								src='https://hcmagroproducts.com/wp-content/uploads/2018/08/LOgo.png'
								alt='logo'
								className='footer-logo'
							></img>
							<h5>© 2020 HCM Agro Products Pvt Ltd. All Rights Reserved.</h5>
						</div>
						<div className='footer-center'>
							<div className='footer-center-left'>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell className='footer-tableCell'>
												<ListItem className='footer-table-listItem'>
													<ListItemIcon className='footer-table-icon'>
														<TripOriginIcon />
													</ListItemIcon>
													<ListItemText
														primary='Quick Links'
														className='footer-link'
													></ListItemText>
												</ListItem>
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell className='footer-tableCell'>
												<Link to='/' className='router-link'>
													<ListItem className='footer-table-listItem'>
														<ListItemIcon className='footer-table-icon'>
															<DoubleArrowIcon />
														</ListItemIcon>
														<ListItemText primary='Home' className='footer-link'></ListItemText>
													</ListItem>
												</Link>
											</TableCell>
											<TableCell className='footer-tableCell'>
												<Link to='/about' className='router-link'>
													<ListItem className='footer-table-listItem'>
														<ListItemIcon className='footer-table-icon'>
															<DoubleArrowIcon />
														</ListItemIcon>
														<ListItemText primary='About Us' className='footer-link'></ListItemText>
													</ListItem>
												</Link>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className='footer-tableCell'>
												<Link to='/catalogue' className='router-link'>
													<ListItem className='footer-table-listItem'>
														<ListItemIcon className='footer-table-icon'>
															<DoubleArrowIcon />
														</ListItemIcon>
														<ListItemText
															primary='Catalogue'
															className='footer-link'
														></ListItemText>
													</ListItem>
												</Link>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</div>
							<div className='footer-center-right'>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell className='footer-tableCell'>
												<ListItem className='footer-table-listItem'>
													<ListItemIcon className='footer-table-icon'>
														<TripOriginIcon />
													</ListItemIcon>
													<ListItemText primary='Products' className='footer-link'></ListItemText>
												</ListItem>
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell className='footer-tableCell'>
												<Link to='/manure' className='router-link'>
													<ListItem className='footer-table-listItem'>
														<ListItemIcon className='footer-table-icon'>
															<DoubleArrowIcon />
														</ListItemIcon>
														<ListItemText
															primary='Organic Manure'
															className='footer-link'
														></ListItemText>
													</ListItem>
												</Link>
											</TableCell>
											<TableCell className='footer-tableCell'>
												<Link to='/category2' className='router-link'>
													<ListItem className='footer-table-listItem'>
														<ListItemIcon className='footer-table-icon'>
															<DoubleArrowIcon />
														</ListItemIcon>
														<ListItemText
															primary='Category2'
															className='footer-link'
														></ListItemText>
													</ListItem>
												</Link>
											</TableCell>
											<TableCell className='footer-tableCell'>
												<Link to='/category2' className='router-link'>
													<ListItem className='footer-table-listItem'>
														<ListItemIcon className='footer-table-icon'>
															<DoubleArrowIcon />
														</ListItemIcon>
														<ListItemText
															primary='Category3'
															className='footer-link'
														></ListItemText>
													</ListItem>
												</Link>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className='footer-tableCell'>
												<Link to='/category3' className='router-link'>
													<ListItem className='footer-table-listItem'>
														<ListItemIcon className='footer-table-icon'>
															<DoubleArrowIcon />
														</ListItemIcon>
														<ListItemText
															primary='Category4'
															className='footer-link'
														></ListItemText>
													</ListItem>
												</Link>
											</TableCell>
											<TableCell className='footer-tableCell'>
												<Link to='/category4' className='router-link'>
													<ListItem className='footer-table-listItem'>
														<ListItemIcon className='footer-table-icon'>
															<DoubleArrowIcon />
														</ListItemIcon>
														<ListItemText
															primary='Category5'
															className='footer-link'
														></ListItemText>
													</ListItem>
												</Link>
											</TableCell>
											<TableCell className='footer-tableCell'>
												<Link to='/category2' className='router-link'>
													<ListItem className='footer-table-listItem'>
														<ListItemIcon className='footer-table-icon'>
															<DoubleArrowIcon />
														</ListItemIcon>
														<ListItemText
															primary='Category6'
															className='footer-link'
														></ListItemText>
													</ListItem>
												</Link>
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell className='footer-tableCell'>
												<Link to='/category3' className='router-link'>
													<ListItem className='footer-table-listItem'>
														<ListItemIcon className='footer-table-icon'>
															<DoubleArrowIcon />
														</ListItemIcon>
														<ListItemText
															primary='Category7'
															className='footer-link'
														></ListItemText>
													</ListItem>
												</Link>
											</TableCell>
											<TableCell className='footer-tableCell'>
												<Link to='/category4' className='router-link'>
													<ListItem className='footer-table-listItem'>
														<ListItemIcon className='footer-table-icon'>
															<DoubleArrowIcon />
														</ListItemIcon>
														<ListItemText
															primary='Category8'
															className='footer-link'
														></ListItemText>
													</ListItem>
												</Link>
											</TableCell>
											<TableCell className='footer-tableCell'>
												<Link to='/category2' className='router-link'>
													<ListItem className='footer-table-listItem'>
														<ListItemIcon className='footer-table-icon'>
															<DoubleArrowIcon />
														</ListItemIcon>
														<ListItemText
															primary='Category9'
															className='footer-link'
														></ListItemText>
													</ListItem>
												</Link>
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</div>
						</div>
						<div className='footer-right'>
							<ListItem>
								<ListItemIcon>
									<EmailIcon style={{ color: "white" }} />
								</ListItemIcon>
								<ListItemText primary='Get the Catalogue' />
							</ListItem>

							<TextField
								className='footer-input'
								variant='outlined'
								label='Email'
								onChange={(event) => {
									setEmail(event.target.value);
								}}
							/>
							<Button variant='outlined' className='footer-sendBtn'>
								Send
							</Button>
						</div>
					</div>
				</footer>
			</BrowserRouter>
		</div>
	);
}

export default App;
