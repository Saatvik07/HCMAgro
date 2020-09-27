import React, { useState } from "react";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import StarBorder from "@material-ui/icons/StarBorder";
import {
	ClickAwayListener,
	Tooltip,
	IconButton,
	withStyles,
	TableContainer,
	TableHead,
	TableCell,
	TableRow,
	Table,
	TableBody,
	Paper,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Manure.css";
const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "#d28a7c",
		color: "rgba(0, 0, 0, 0.87)",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(14),
	},
}))(Tooltip);
const product1 = [
	{ item: "Moisture % by wt.Max", standard: "25.0" },
	{ item: "Total organic carbon % by wt. Min.", standard: "14.0" },
	{ item: "Total N, P2O5, K2O nutrient should not be less than 3%", standard: ">3%" },
];
const product1Benefits = [
	"Very Cost effective.",
	"Supplies organic carbon to soil.",
	"Improves quality of crop.",
	"Suitable for all crops, plants, vegetables and fruit trees.",
	"Absorbs nitrogen from atmosphere.",
	"Easy to spread and absorb.",
	"Eco friendly and non-toxic.",
	"100% Organic from natural agro mineral source.",
	"Strengthens roots system of plants.",
	"Improve soil quality by adding organic carbon.",
];
function Manure() {
	const [callTool, setCallTool] = useState(false);
	const [mailTool, setMailTool] = useState(false);
	return (
		<div className='manure-container'>
			<div className='manure-hero animate__animated animate__fadeIn'>
				<div className='manure-hero-overlay '>
					<div className='navBar'>
						<div className='navBar-left'>
							<img
								src='https://hcmagroproducts.com/wp-content/uploads/2018/08/LOgo.png'
								alt='logo'
								className='navBar-logo'
							></img>
							<Link to='/' className='router-link'>
								<h3 className='navBar-link'>Home</h3>
							</Link>
							<Link to='/about' className='router-link'>
								<h3 className='navBar-link'>About Us</h3>
							</Link>
							<Link to='/products' className='router-link'>
								<h3 className='navBar-link'>Products</h3>
							</Link>
							<Link to='/contact' className='router-link'>
								<h3 className='navBar-link'>Contact Us</h3>
							</Link>
							<a
								href='https://online.flippingbook.com/view/16101/'
								className='router-link'
								target='_blank'
								rel='noopener noreferrer'
							>
								<h3 className='navBar-link'>Catalogue</h3>
							</a>
						</div>
						<div className='navBar-right'>
							<ClickAwayListener
								onClickAway={() => {
									setCallTool(false);
								}}
							>
								<CustomTooltip
									title={
										<p>
											011-25267064
											<br />
											011-40192472
										</p>
									}
									onClose={() => {
										setCallTool(false);
									}}
									open={callTool}
									disableFocusListener
									disableTouchListener
									disableHoverListener
									placement='bottom'
								>
									<IconButton
										aria-label='call us'
										className='contact-btn'
										onClick={() => {
											if (callTool) {
												setCallTool(false);
											} else {
												setCallTool(true);
											}
										}}
									>
										<CallIcon />
									</IconButton>
								</CustomTooltip>
							</ClickAwayListener>
							<ClickAwayListener
								onClickAway={() => {
									setMailTool(false);
								}}
							>
								<CustomTooltip
									title='info@hcmagroproducts.com'
									onClose={() => {
										setMailTool(false);
									}}
									open={mailTool}
									disableFocusListener
									disableTouchListener
									disableHoverListener
									placement='right'
								>
									<IconButton
										aria-label='mail us'
										className='contact-btn'
										onClick={() => {
											if (mailTool) {
												setMailTool(false);
											} else {
												setMailTool(true);
											}
										}}
									>
										<MailIcon />
									</IconButton>
								</CustomTooltip>
							</ClickAwayListener>
						</div>
					</div>
					<div className='manure-hero-info'>
						<h1>Organic Manure</h1>
					</div>
				</div>
			</div>
			<div className='manure-card-container'>
				<div className='manure-modal-container animate__animated animate__fadeIn'>
					<div className='manure-modal-left-div '>
						<img
							className='manure-modal-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='product1'
						/>
						<TableContainer className='manure-modal-table-container'>
							<Table className='manure-modal-table'>
								<TableHead>
									<TableRow>
										<TableCell>Item</TableCell>
										<TableCell>Standard</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{product1.map((row) => (
										<TableRow key={row.item}>
											<TableCell component='th' scope='row'>
												{row.item}
											</TableCell>
											<TableCell>{row.standard}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
					<div className='manure-modal-right-div'>
						<Paper elevation={5} className='manure-modal-heading'>
							<h2>Benefits</h2>
						</Paper>
						<List>
							{product1Benefits.map((benefit) => (
								<ListItem>
									<ListItemIcon>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit}></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Manure;
