import React, { useEffect, useState } from "react";
import "./Products.css";
import {
	ClickAwayListener,
	Tooltip,
	withStyles,
	IconButton,
	Card,
	CardActionArea,
	Typography,
	CardContent,
	CardActions,
	Button,
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowDropDownCircleRoundedIcon from "@material-ui/icons/ArrowDropDownCircleRounded";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import { useHistory, Link } from "react-router-dom";
const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "#d28a7c",
		color: "rgba(0, 0, 0, 0.87)",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(14),
	},
}))(Tooltip);
function Products() {
	const [callTool, setCallTool] = useState(false);
	const [mailTool, setMailTool] = useState(false);
	const [expandSeaWeed, setExpandSeaWeed] = useState(false);
	const history = useHistory();
	return (
		<div className='products-container'>
			<div className='products-hero animate__animated animate__fadeIn'>
				<div className='products-hero-overlay '>
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
					<div className='products-hero-info'>
						<h1>Products</h1>
					</div>
				</div>
			</div>
			<div className='products-card-container'>
				<Card className='products-card one animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							history.push("/category1");
						}}
					>
						<img
							className='products-card-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600557794/pexels-john-lambeth-2252584_gqmapm.jpg'
							alt='humates'
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Organic Manure Granules
							</Typography>
							Organic Manure is an eco-friendly fertilizer, which helps in improving the quality &
							fertility of soil and hence make the produce healthy & nutritious. It enriches the
							soil with micro-organisms & restore the depleted nutrients of the soil.
						</CardContent>
					</CardActionArea>
					<CardActions>
						<div className='products-card-footer'>
							<IconButton
								className='products-card-button'
								onClick={() => {
									history.push("/category1");
								}}
							>
								<ArrowForwardOutlinedIcon />
							</IconButton>
						</div>
					</CardActions>
				</Card>
				<Card className='products-card two animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setExpandSeaWeed(!expandSeaWeed);
						}}
					>
						<img
							className='products-card-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600557792/pexels-nick-collins-1274609_jut6vd.jpg'
							alt='seaweed extract'
						/>
						<CardContent className='products-card-info'>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Sea Weed Extract
							</Typography>
							The Seaweed extract is natural organic concentrate that are extracted from marine
							plants.
							<br></br>
							<Button variant='outlined' className='products-card-expand-icon'>
								SEE MORE
							</Button>
						</CardContent>
					</CardActionArea>
					<Collapse in={expandSeaWeed} timeout='auto' unmountOnExit>
						<CardContent>
							<List>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon />
									</ListItemIcon>
									<ListItemText primary='Seaweed Extract Granules' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon />
									</ListItemIcon>
									<ListItemText primary='Seaweed Extract Powder' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon />
									</ListItemIcon>
									<ListItemText primary='Seaweed Extract Flakes' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon />
									</ListItemIcon>
									<ListItemText primary='Seaweed Extract Gel' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon />
									</ListItemIcon>
									<ListItemText primary='Green Seaweed Extract' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon />
									</ListItemIcon>
									<ListItemText primary='Brown Seaweed Extract' />
								</ListItem>
							</List>
						</CardContent>
					</Collapse>
					<CardActions>
						<div className='products-card-footer'>
							<IconButton
								className='products-card-button'
								onClick={() => {
									history.push("/category2");
								}}
							>
								<ArrowForwardOutlinedIcon />
							</IconButton>
						</div>
					</CardActions>
				</Card>
				<Card className='products-card three animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							history.push("/category3");
						}}
					>
						<img
							className='products-card-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600557804/pexels-matheus-cenali-2733918_j78wcf.jpg'
							alt='humates'
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Humates
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<div className='products-card-footer'>
							<IconButton
								className='products-card-button'
								onClick={() => {
									history.push("/category3");
								}}
							>
								<ArrowForwardOutlinedIcon />
							</IconButton>
						</div>
					</CardActions>
				</Card>
				<Card className='products-card one animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							history.push("/category4");
						}}
					>
						<img
							className='products-card-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600557788/pexels-quang-nguyen-vinh-2135677_f5mpyo.jpg'
							alt='humates'
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Humates
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<div className='products-card-footer'>
							<IconButton
								className='products-card-button'
								onClick={() => {
									history.push("/category4");
								}}
							>
								<ArrowForwardOutlinedIcon />
							</IconButton>
						</div>
					</CardActions>
				</Card>
			</div>
		</div>
	);
}

export default Products;
//Photo by Quang Nguyen Vinh from Pexels
//Photo by John Lambeth from Pexels
