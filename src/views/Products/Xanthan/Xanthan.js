import React, { useState } from "react";
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
import "./Xanthan.css";
const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "#d28a7c",
		color: "rgba(0, 0, 0, 0.87)",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(14),
	},
}))(Tooltip);
const product1 = [
	{ item: "Appearance", standard: "Cream-White" },
	{ item: "Viscosity 1% Solution in 1% KCl", standard: "13200-1800 cps" },
	{ item: "pH 1% Solution", standard: "6.0-8.0" },
	{ item: "Moisture", standard: "Maximum 13%" },
	{ item: "Ash", standard: "Maximum 13%" },
	{ item: "Particle Size", standard: "Min 95% through 200 Mesh" },
	{ item: "V1/V2", standard: "1.02-1.45" },
	{ item: "Pyruvic Acid", standard: "Minimum 1.5%" },
	{ item: "Heavy Metal ", standard: "Max 20 ppm" },
	{ item: "Lead", standard: "Max 2 ppm" },
	{ item: "Arsenic", standard: "Max 3 ppm" },
	{ item: "Ispropyl Alcohol", standard: "Max 500 ppm" },
	{ item: "Sincerity (purity or assay)", standard: "92-108%" },
	{ item: "Total Plate Count", standard: "Not more than 500 cfu/g" },
	{ item: "Yeast/Moulds", standard: "Not more than 500 cfu/g" },
	{ item: "E. Coli", standard: "Absent /25g" },
];
const product1Benefits = [
	"Minimized pumping friction in lime, freshwater and saltwater muds.",
	"Maximized drill bit penetration.",
	"Accelerated drilling rates in low viscosity/high shear conditions.",
	"High viscosity at low concentrations.",
	"Decreased solids buildup in drilling fluids.",
	"Handling high gravel concentrations.",
	"Efficient suspension/solids transport in high viscosity/low shear conditions.",
	"Stabilization of hole-cleaning fluids.",
	"Decreased damage to oil formation.",
];
function Xanthan() {
	const [callTool, setCallTool] = useState(false);
	const [mailTool, setMailTool] = useState(false);
	return (
		<div className='xanthan-container'>
			<div className='xanthan-hero animate__animated animate__fadeIn'>
				<div className='xanthan-hero-overlay '>
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
					<div className='xanthan-hero-info'>
						<h1>Xanthan Gum</h1>
					</div>
				</div>
			</div>
			<div className='xanthan-card-container'>
				<div className='xanthan-modal-container animate__animated animate__fadeIn'>
					<div className='xanthan-modal-left-div '>
						<img
							className='xanthan-modal-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='product1'
						/>
						<Paper elevation={5} className='xanthan-modal-heading'>
							<h2>Applications</h2>
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
					<div className='xanthan-modal-right-div'>
						<TableContainer className='xanthan-modal-table-container'>
							<Table className='xanthan-modal-table'>
								<TableHead>
									<TableRow>
										<TableCell>Characteristics</TableCell>
										<TableCell>Specifications</TableCell>
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
				</div>
			</div>
		</div>
	);
}

export default Xanthan;
