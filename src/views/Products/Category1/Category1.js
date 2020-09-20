import React, { useState } from "react";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import StarBorder from "@material-ui/icons/StarBorder";
import {
	ClickAwayListener,
	Tooltip,
	IconButton,
	withStyles,
	CardActionArea,
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	Modal,
	Backdrop,
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
import "./Category1.css";
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
function Category1() {
	const [callTool, setCallTool] = useState(false);
	const [mailTool, setMailTool] = useState(false);
	const [modals, setModals] = useState([false, false, false]);
	return (
		<div className='category1-container'>
			<div className='category1-hero animate__animated animate__fadeInDown'>
				<div className='category1-hero-overlay '>
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
					<div className='category1-hero-info'>
						<h1>Category1</h1>
					</div>
				</div>
			</div>
			<div className='category1-card-container'>
				<Card className='category1-card'>
					<CardActionArea
						onClick={() => {
							setModals([true, false, false]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='Granule Organic Manure'
							className='category1-card-image'
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Granule Organic Manure
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								Organic Manure is an eco-friendly fertilizer, which helps in improving the quality &
								fertility of soil and hence make the produce healthy & nutritious. It enriches the
								soil with micro-organisms & restore the depleted nutrients of the soil.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<div className='category1-card-footer'>
							<Button
								variant='outlined'
								className='category1-card-button'
								onClick={() => {
									setModals([true, false, false]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
				<Card className='category1-card'>
					<CardActionArea>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566655/WhatsApp_Image_2020-09-18_at_22.32.15_1_fhjpq0.jpg'
							alt='Granule Organic Manure'
							className='category1-card-image'
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Granule Organic Manure
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								Organic Manure is an eco-friendly fertilizer, which helps in improving the quality &
								fertility of soil and hence make the produce healthy & nutritious. It enriches the
								soil with micro-organisms & restore the depleted nutrients of the soil.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<div className='category1-card-footer'>
							<Button variant='outlined' className='category1-card-button'>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
				<Card className='category1-card'>
					<CardActionArea>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566656/WhatsApp_Image_2020-09-18_at_22.31.30_x9y8d4.jpg'
							alt='Granule Organic Manure'
							className='category1-card-image'
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Granule Organic Manure
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								Organic Manure is an eco-friendly fertilizer, which helps in improving the quality &
								fertility of soil and hence make the produce healthy & nutritious. It enriches the
								soil with micro-organisms & restore the depleted nutrients of the soil.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<div className='category1-card-footer'>
							<Button variant='outlined' className='category1-card-button'>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
			</div>
			<Modal
				open={modals[0]}
				onClose={() => {
					document.querySelector(".category1-modal").className =
						"category1-modal animate__animated animate__fadeOut";
					document.querySelector(".category1-modal").onanimationend = () => {
						setModals([false, false, false]);
					};
				}}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
				className='category1-modal animate__animated animate__fadeIn'
			>
				<div className='category1-modal-container'>
					<div className='category1-modal-left-div'>
						<img
							className='category1-modal-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='product1'
						/>
						<TableContainer className='category1-modal-table-container'>
							<Table className='category1-modal-table'>
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
					<div className='category1-modal-right-div'>
						<Paper elevation={5} className='category1-modal-heading'>
							<h2>Granule Organic Manure</h2>
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
			</Modal>
		</div>
	);
}

export default Category1;
