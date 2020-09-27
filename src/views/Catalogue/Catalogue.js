import React, { useState } from "react";
import { ClickAwayListener, Tooltip, IconButton, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import "./Catalogue.css";
import { Parallax } from "react-parallax";
const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "#d28a7c",
		color: "rgba(0, 0, 0, 0.87)",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(14),
	},
}))(Tooltip);
function Catalogue() {
	const [callTool, setCallTool] = useState(false);
	const [mailTool, setMailTool] = useState(false);
	return (
		<div className='catalogue-container'>
			<div className='catalogue-hero animate__animated animate__fadeIn'>
				<div className='catalogue-hero-overlay '>
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
					<div className='catalogue-hero-info'>
						<h1>Catalogue</h1>
					</div>
				</div>
			</div>
			<Parallax
				bgImage='https://res.cloudinary.com/maximuscloud/image/upload/v1601250050/Capture_tmhdpv.png'
				strength={1000}
			>
				<div className='catalogue-card-container'>
					<a
						href='https://online.flippingbook.com/view/16101/'
						class='fbo-embed'
						data-fbo-id='16101'
						data-fbo-lightbox='yes'
						data-fbo-width='740px'
						data-fbo-height='480px'
						data-fbo-version='1'
					>
						<h1>Click here to see our catalogue</h1>
					</a>
					<script
						async
						defer
						src='https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=16101'
					></script>
				</div>
			</Parallax>
		</div>
	);
}

export default Catalogue;
