import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./About.css";
import "aos/dist/aos.css";
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
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import { Parallax } from "react-parallax";
const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "#d28a7c",
		color: "rgba(0, 0, 0, 0.87)",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(14),
	},
}))(Tooltip);
function About() {
	const [callTool, setCallTool] = useState(false);
	const [mailTool, setMailTool] = useState(false);
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className='about-container'>
			<Parallax
				bgImage='https://res.cloudinary.com/maximuscloud/image/upload/v1600898470/noah-buscher-x8ZStukS2PM-unsplash_wqujxi.jpg'
				strength={1000}
			>
				<div className='about-hero animate__animated animate__fadeIn'>
					<div className='about-hero-overlay '>
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
							<h1>About Us</h1>
						</div>
					</div>
				</div>
				<div className='about-first-overlay animate__animated animate__slideInUp'>
					<div className='about-first-info-container'>
						<p>
							HCM Agro Products is the key enterprise in the field of agriculture focusing
							relentlessly on quality and empowering our customers with a stunning and innovative
							range of products. Our broad vision propels us forward in the direction of sustainable
							agriculture with minimal impact on the environment which encompasses several aspects.
						</p>
						<p>
							With years of experience in the market through unremitting innovation specialising in
							R&D through comprehensive and meticulous service to provide best solutions embedded in
							our products, we were able to set up 2 units that strengthen the roots of HCM Agro
							Products Private Ltd.
						</p>
					</div>
				</div>
			</Parallax>

			<Parallax
				bgImage='https://res.cloudinary.com/maximuscloud/image/upload/v1600913802/sean-stratton-ObpCE_X3j6U-unsplash_vqbj0j.jpg'
				bgClassName='about-bg'
				className='about-fourth-parallax'
				strength={1000}
			>
				<div className='about-fourth-overlay'>
					<div
						className='about-fourth-info-container'
						data-aos='fade-right'
						data-aos-mirror='true'
						data-aos-once='false'
					>
						<h1 className='about-headings'>Our values</h1>
						<p>
							At HCM we win together, we lose together. We own our jobs. We serve customers
							throughout their journeys. We reflect, plan and act. We keep learning, improving and
							excelling at what we do the best.
						</p>
						<List>
							<ListItem>
								<ListItemIcon>
									<img
										src='https://res.cloudinary.com/maximuscloud/image/upload/v1600912279/excellence_jlmimu.png'
										alt='Excellence'
										className='about-list-icon'
									/>
								</ListItemIcon>
								<ListItemText
									primary='EXELLENCE: we constantly strive to be excellent in all that we do'
									className='about-list-text'
								></ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<img
										src='https://res.cloudinary.com/maximuscloud/image/upload/v1600910525/shield_voo9sa.png'
										alt='Safety'
										className='about-list-icon'
									/>
								</ListItemIcon>
								<ListItemText
									primary='SAFETY- We ensure proper safety '
									className='about-list-text'
								></ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<img
										src='https://res.cloudinary.com/maximuscloud/image/upload/v1600912441/customer_qe80yv.png'
										alt='Customers'
										className='about-list-icon'
									/>
								</ListItemIcon>
								<ListItemText
									primary='CUSTOMERS- We place them at the heart of our business and relentlessly meet their expectations'
									className='about-list-text'
								></ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<img
										src='https://res.cloudinary.com/maximuscloud/image/upload/v1600912441/teamwork_lo4mt1.png'
										alt='People'
										className='about-list-icon'
									/>
								</ListItemIcon>
								<ListItemText
									primary='PEOPLE- We develop the talent, reward exceptional performance and growth and respect the right of our employees'
									className='about-list-text'
								></ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<img
										src='https://res.cloudinary.com/maximuscloud/image/upload/v1600912443/group_vacnyd.png'
										alt='Community'
										className='about-list-icon'
									/>
								</ListItemIcon>
								<ListItemText
									primary='COMMUNITY - We are active in the communities we serve to generate economic, social and environmental value'
									className='about-list-text'
								></ListItemText>
							</ListItem>
						</List>
					</div>
				</div>
			</Parallax>
			<Parallax
				bgImage='https://res.cloudinary.com/maximuscloud/image/upload/v1600902481/pexels-pixabay-276259_qru4lg.jpg'
				className='about-second-parallax'
				strength={1000}
			>
				<div className='about-second-overlay'>
					<div
						className='about-second-info-container'
						data-aos='fade-left'
						data-aos-mirror='true'
						data-aos-once='false'
					>
						<h1 className='about-headings'>Our vision</h1>
						<p>
							To establish an everlasting relationship with our customers, focusing relentlessly on
							quality by consistently delivering high performing products which offers great values.
						</p>
					</div>
				</div>
			</Parallax>

			<Parallax
				bgImage='https://res.cloudinary.com/maximuscloud/image/upload/v1600905703/pexels-markus-spiske-2559749_p9ijw8.jpg'
				className='about-third-parallax'
				strength={1000}
			>
				<div className='about-third-overlay'>
					<div
						className='about-third-info-container'
						data-aos='fade-right'
						data-aos-mirror='true'
						data-aos-once='false'
					>
						<h1 className='about-headings'>Our mission</h1>
						<p>
							To establish an everlasting relationship with our customers, focusing relentlessly on
							quality by consistently delivering high performing products which offers great values.
						</p>
					</div>
				</div>
			</Parallax>
		</div>
	);
}

export default About;
//<span>Photo by <a href="https://unsplash.com/@polarmermaid?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Anne Nygård</a> on <a href="https://unsplash.com/s/photos/core-values?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>////
//https://res.cloudinary.com/maximuscloud/image/upload/v1600908571/anne-nygard-E5j_w4OHhSs-unsplash_ip0jlv.jpg/
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">phatplus</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">phatplus</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
