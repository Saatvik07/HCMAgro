import React, { useState } from "react";
import "./Silicon.css";
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
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import StarBorder from "@material-ui/icons/StarBorder";
const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "#d28a7c",
		color: "rgba(0, 0, 0, 0.87)",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(14),
	},
}))(Tooltip);
const product1Benefits = [
	"Facilitate uptake of chemicals into the plant tissue.",
	"Easy dispersion in aqueous systems.",
	"Produces very rapid wetting and spreading on hard to wet surface such as waxy leaves.",
	"Enhance the performance of agricultural chemicals and plant growth regulator.",
	"It can be used as formulation ingredient in pesticide products, or as tank-mix adjuvant for foliar applied chemicals.",
];
function Silicon() {
	const [callTool, setCallTool] = useState(false);
	const [mailTool, setMailTool] = useState(false);
	return (
		<div className='silicon-container'>
			<div className='silicon-hero animate__animated animate__fadeIn'>
				<div className='silicon-hero-overlay '>
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
							<Link to='/catalogue' className='router-link'>
								<h3 className='navBar-link'>Catalogue</h3>
							</Link>
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
					<div className='silicon-hero-info'>
						<h1>Silicon Spreader</h1>
					</div>
				</div>
			</div>
			<div className='silicon-card-container animate__animated animate__fadeIn'>
				<div className='silicon-headline'>
					<h2>
						Our Silicon Spreader is processed by experienced professionals using optimum quality,
						chemical compounds and progressive technology in adherence with norms.
					</h2>
				</div>

				<div className='silicon-modal-container '>
					<div className='silicon-modal-left-div '>
						<img
							className='silicon-modal-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='product1'
						/>
					</div>
					<div className='silicon-modal-right-div'>
						<Paper elevation={5} className='silicon-modal-heading'>
							<h2>Advantages</h2>
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

export default Silicon;
