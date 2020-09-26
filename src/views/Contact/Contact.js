import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import {
	ClickAwayListener,
	Tooltip,
	withStyles,
	IconButton,
	ListItemIcon,
	ListItemText,
	List,
	ListItem,
	TextField,
	InputAdornment,
	Button,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import PinDropIcon from "@material-ui/icons/PinDrop";
import BusinessIcon from "@material-ui/icons/Business";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "#d28a7c",
		color: "rgba(0, 0, 0, 0.87)",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(14),
	},
}))(Tooltip);
function Contact() {
	const [callTool, setCallTool] = useState(false);
	const [mailTool, setMailTool] = useState(false);
	return (
		<div className='contact-container'>
			<div className='contact-hero animate__animated animate__fadeIn'>
				<div className='contact-hero-overlay '>
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
					<div className='contact-hero-info'>
						<h1>Contact Us</h1>
					</div>
				</div>
			</div>
			<div className='contact-main-container'>
				<div className='contact-main-left animate__animated animate__fadeIn'>
					<h2>Get in Touch</h2>

					<List>
						<ListItem>
							<ListItemIcon>
								<PinDropIcon style={{ color: "white" }} />
							</ListItemIcon>
							<ListItemText primary='Regd. Office: RR -29, 1st Floor, Mainwali Nagar, New Delhi - 110087'></ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<BusinessIcon style={{ color: "white" }} />
							</ListItemIcon>
							<ListItemText primary='Unit-1: 1/18, Kirari Road, Near Bhalla Factory, Nangloi, New Delhi-110041'></ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<BusinessIcon style={{ color: "white" }} />
							</ListItemIcon>
							<ListItemText primary='Unit-2: 5 K.M. Stone, Beri Dighal Road, Sampla, Distt-Rohtak, Haryana-124501'></ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<CallIcon style={{ color: "white" }} />
							</ListItemIcon>
							<ListItemText primary='Tel:011-25267064, 011-40192472'></ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<BusinessIcon style={{ color: "white" }} />
							</ListItemIcon>
							<ListItemText primary='Email: info@hcmagroproducts.com'></ListItemText>
						</ListItem>
					</List>
				</div>
				<div className='contact-main-right animate__animated animate__fadeIn'>
					<h2>Want to hear from us ?</h2>
					<h5>Write to us and expect a reply within two working days :)</h5>
					<div className='contact-input-container'>
						<List>
							<ListItem>
								<TextField
									label='Name'
									variant='outlined'
									className='contact-input'
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<AccountCircle style={{ color: "white" }} />
											</InputAdornment>
										),
									}}
								/>
							</ListItem>
							<ListItem>
								<TextField
									label='Email'
									variant='outlined'
									className='contact-input'
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<MailIcon style={{ color: "white" }} />
											</InputAdornment>
										),
									}}
								/>
							</ListItem>
						</List>
						<List>
							<ListItem>
								<TextField
									label='Query/Comment'
									variant='outlined'
									multiline
									rows={5}
									className='contact-input'
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<ModeCommentIcon style={{ color: "white" }} />
											</InputAdornment>
										),
									}}
								/>
							</ListItem>
						</List>
					</div>
					<Button variant='outline' className='contact-sendBtn'>
						Send a Message
					</Button>
				</div>
			</div>
			<iframe
				title='map'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.311571363517!2d77.08296015073024!3d28.680324982312612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0414a7999a27%3A0x1011012beb136944!2sHcm%20Agro%20Products%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1600995850294!5m2!1sen!2sin'
				className='contact-map animate__animated animate__fadeIn'
			></iframe>
		</div>
	);
}

export default Contact;
