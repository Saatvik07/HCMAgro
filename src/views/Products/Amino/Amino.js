import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	ClickAwayListener,
	IconButton,
	withStyles,
	Tooltip,
	Card,
	CardActionArea,
	CardContent,
	CardActions,
	Button,
	Typography,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import "./Amino.css";
const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "#d28a7c",
		color: "rgba(0, 0, 0, 0.87)",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(14),
	},
}))(Tooltip);
function Amino() {
	const [callTool, setCallTool] = useState(false);
	const [mailTool, setMailTool] = useState(false);
	const [modals, setModals] = useState([false, false, false]);
	return (
		<div className='amino-container'>
			<div className='amino-hero animate__animated animate__fadeIn'>
				<div className='amino-hero-overlay '>
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
					<div className='amino-hero-info'>
						<h1>Organic amino</h1>
					</div>
				</div>
			</div>
			<div className='amino-card-container'>
				<Card className='amino-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([true, false, false]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='Granule Organic amino'
							className='amino-card-image'
						/>
						<CardContent style={{ height: "40%" }}>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Granule Organic amino
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								Organic amino is an eco-friendly fertilizer, which helps in improving the quality &
								fertility of soil and hence make the produce healthy & nutritious. It enriches the
								soil with micro-organisms & restore the depleted nutrients of the soil.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='amino-card-footer-container'>
						<div className='amino-card-footer'>
							<Button
								variant='outlined'
								className='amino-card-button'
								onClick={() => {
									setModals([true, false, false]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
				<Card className='amino-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([false, true, false]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566655/WhatsApp_Image_2020-09-18_at_22.32.15_1_fhjpq0.jpg'
							alt='Granule Organic amino'
							className='amino-card-image'
						/>
						<CardContent style={{ height: "40%" }}>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Bio-Fertilizers
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								Mycorrhizae is a biofertilizer that helps in promotion of plant growth in an
								environment friendly manner as well as providing several other benefits to
								cultivation of plants. We offer commercial production of viable, healthy genetically
								pure & high quality mycorrhizae without contamination in sterile environment.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='amino-card-footer-container'>
						<div className='amino-card-footer'>
							<Button
								variant='outlined'
								className='amino-card-button'
								onClick={() => {
									setModals([false, true, false]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
				<Card className='amino-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([false, false, true]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566656/WhatsApp_Image_2020-09-18_at_22.31.30_x9y8d4.jpg'
							alt='Granule Organic amino'
							className='amino-card-image'
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Seaweed Extract
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								The Seaweed extract is natural organic concentrate that are extracted from marine
								plants. These natural and non-toxic extracts are rich in minor elements and natural
								growth hormones and trace elements like auxins, gibberellins and cytokinins.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='amino-card-footer-container'>
						<div className='amino-card-footer'>
							<Button
								variant='outlined'
								className='amino-card-button'
								onClick={() => {
									setModals([false, false, true]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
			</div>
		</div>
	);
}

export default Amino;
