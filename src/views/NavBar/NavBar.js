import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	ClickAwayListener,
	Tooltip,
	withStyles,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	useMediaQuery,
	Menu,
	MenuItem,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "#d28a7c",
		color: "rgba(0, 0, 0, 0.87)",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(14),
	},
}))(Tooltip);
function NavBar() {
	const [callTool, setCallTool] = useState(false);
	const [mailTool, setMailTool] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const matches = useMediaQuery("(max-width:1075px)");
	return (
		<div className='navBar'>
			{matches ? (
				<>
					<div className='navBar-left'>
						<img
							src='https://hcmagroproducts.com/wp-content/uploads/2018/08/LOgo.png'
							alt='logo'
							className='navBar-logo-phone'
						></img>
						<MenuIcon onClick={handleClick} />
						<Menu
							className='phone-menu-list'
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>
								<Link to='/' className='router-link'>
									<h3 className='navBar-link'>Home</h3>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link to='/about' className='router-link'>
									<h3 className='navBar-link'>About Us</h3>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link to='/products' className='router-link'>
									<h3 className='navBar-link'>Products</h3>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link to='/contact' className='router-link'>
									<h3 className='navBar-link'>Contact Us</h3>
								</Link>
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Link to='/catalogue' className='router-link'>
									<h3 className='navBar-link'>Catalogue</h3>
								</Link>
							</MenuItem>
						</Menu>
					</div>
					<div className='navBar-right-phone'>
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
									className='contact-btn-phone'
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
									className='contact-btn-phone'
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
				</>
			) : (
				<>
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
				</>
			)}
		</div>
	);
}

export default NavBar;
