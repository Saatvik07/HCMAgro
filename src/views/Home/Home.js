import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { Tooltip, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import "./Home.css";
import SwiperCore, {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	EffectCoverflow,
	EffectFlip,
	EffectFade,
	Autoplay,
	Mousewheel,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/effect-flip/effect-flip.scss";
import "swiper/components/effect-fade/effect-fade.scss";
// install Swiper components
import Zoom from "react-reveal/Zoom";
SwiperCore.use([
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	EffectCoverflow,
	Autoplay,
	Mousewheel,
	EffectFlip,
	EffectFade,
]);
const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "#d28a7c",
		color: "rgba(0, 0, 0, 0.87)",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(14),
	},
}))(Tooltip);
function Home() {
	const [callTool, setCallTool] = useState(false);
	const [mailTool, setMailTool] = useState(false);
	const history = useHistory();
	return (
		<div>
			<Swiper
				spaceBetween={-20}
				slidesPerView={1}
				navigation
				tag='ul'
				effect='fade'
				id='first'
				className='animate__animated animate__fadeIn swiper-container'
				autoplay={{
					delay: "3000",
					stopOnLastSlide: false,
					disableOnInteraction: false,
				}}
			>
				<SwiperSlide tag='li'>
					<div
						className='slide-container'
						style={{
							backgroundImage:
								"url(https://res.cloudinary.com/maximuscloud/image/upload/v1599605651/pexels-pixabay-51947_yymg1c.jpg)",
						}}
					>
						<div className='slide-overlay'>
							<div className='navBar'>
								<div className='navBar-left'>
									<img
										src='https://hcmagroproducts.com/wp-content/uploads/2018/08/LOgo.png'
										alt='logo'
										className='navBar-logo'
									></img>
									<h3 className='navBar-link'>Home</h3>
									<h3 className='navBar-link'>About Us</h3>
									<h3 className='navBar-link'>Products</h3>
									<h3 className='navBar-link'>Contact Us</h3>
									<h3 className='navBar-link'>Catalogue</h3>
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
							<div className='slide-info'>
								<img
									src='https://hcmagroproducts.com/wp-content/uploads/2018/08/LOgo.png'
									alt='logo'
									style={{ width: "200px", height: "auto", opacity: 1 }}
								></img>
								<h1 style={{ color: "white", opacity: 1 }}>
									We welcome you to fascinating world of HCM Agro Products Private Ltd.
								</h1>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide tag='li'>
					<div
						className='slide-container'
						style={{
							backgroundImage:
								"url(https://res.cloudinary.com/maximuscloud/image/upload/v1599605655/pexels-kaboompics-com-5808_apso79.jpg)",
						}}
					>
						<div className='slide-overlay'>
							<div className='navBar'>
								<div className='navBar-left'>
									<img
										src='https://hcmagroproducts.com/wp-content/uploads/2018/08/LOgo.png'
										alt='logo'
										className='navBar-logo'
									></img>
									<h3 className='navBar-link'>Home</h3>
									<h3 className='navBar-link'>About Us</h3>
									<h3 className='navBar-link'>Products</h3>
									<h3 className='navBar-link'>Contact Us</h3>
									<h3 className='navBar-link'>Catalogue</h3>
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
							<div className='slide-info'>
								<img
									src='https://hcmagroproducts.com/wp-content/uploads/2018/08/LOgo.png'
									alt='logo'
									style={{ width: "200px", height: "auto", opacity: 1 }}
								></img>
								<h1 style={{ color: "white", opacity: 1 }}>
									We welcome you to fascinating world of HCM Agro Products Private Ltd.
								</h1>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide tag='li'>
					<div
						className='slide-container'
						style={{
							backgroundImage:
								"url(https://res.cloudinary.com/maximuscloud/image/upload/v1600471837/pexels-oleg-magni-890507_pupjf7.jpg)",
						}}
					>
						<div className='slide-overlay'>
							<div className='navBar'>
								<div className='navBar-left'>
									<img
										src='https://hcmagroproducts.com/wp-content/uploads/2018/08/LOgo.png'
										alt='logo'
										className='navBar-logo'
									></img>
									<h3 className='navBar-link'>Home</h3>
									<h3 className='navBar-link'>About Us</h3>
									<h3 className='navBar-link'>Products</h3>
									<h3 className='navBar-link'>Contact Us</h3>
									<h3 className='navBar-link'>Catalogue</h3>
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
							<div className='slide-info'>
								<img
									src='https://hcmagroproducts.com/wp-content/uploads/2018/08/LOgo.png'
									alt='logo'
									style={{ width: "200px", height: "auto", opacity: 1 }}
								></img>
								<h1 style={{ color: "white", opacity: 1 }}>
									We welcome you to fascinating world of HCM Agro Products Private Ltd.
								</h1>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide tag='li'>
					<div
						className='slide-container'
						style={{
							backgroundImage:
								"url(https://res.cloudinary.com/maximuscloud/image/upload/v1599605652/Main_rkfanj.jpg)",
						}}
					>
						<div className='slide-overlay'>
							<div className='navBar'>
								<div className='navBar-left'>
									<img
										src='https://hcmagroproducts.com/wp-content/uploads/2018/08/LOgo.png'
										alt='logo'
										className='navBar-logo'
									></img>
									<h3 className='navBar-link'>Home</h3>
									<h3 className='navBar-link'>About Us</h3>
									<h3 className='navBar-link'>Products</h3>
									<h3 className='navBar-link'>Contact Us</h3>
									<h3 className='navBar-link'>Catalogue</h3>
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
							<div className='slide-info'>
								<img
									src='https://hcmagroproducts.com/wp-content/uploads/2018/08/LOgo.png'
									alt='logo'
									style={{ width: "200px", height: "auto", opacity: 1 }}
								></img>
								<h1 style={{ color: "white", opacity: 1 }}>
									We welcome you to fascinating world of HCM Agro Products Private Ltd.
								</h1>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide tag='li'>
					<div
						className='slide-container'
						style={{
							backgroundImage:
								"url(https://res.cloudinary.com/maximuscloud/image/upload/v1600471386/Main_gkqn9l.jpg)",
						}}
					>
						<div className='slide-overlay'>
							<div className='navBar'>
								<div className='navBar-left'>
									<img
										src='https://hcmagroproducts.com/wp-content/uploads/2018/08/LOgo.png'
										alt='logo'
										className='navBar-logo'
									></img>
									<h3 className='navBar-link'>Home</h3>
									<h3 className='navBar-link'>About Us</h3>
									<h3 className='navBar-link'>Products</h3>
									<h3 className='navBar-link'>Contact Us</h3>
									<h3 className='navBar-link'>Catalogue</h3>
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
							<div className='slide-info'>
								<img
									src='https://hcmagroproducts.com/wp-content/uploads/2018/08/LOgo.png'
									alt='logo'
									style={{ width: "200px", height: "auto", opacity: 1 }}
								></img>
								<h1 style={{ color: "white", opacity: 1 }}>
									We welcome you to fascinating world of HCM Agro Products Private Ltd.
								</h1>
							</div>
						</div>
					</div>
				</SwiperSlide>
				...
			</Swiper>
			<div></div>
		</div>
	);
}

export default withRouter(Home);
