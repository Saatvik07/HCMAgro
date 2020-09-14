import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { Paper, Tooltip, IconButton, Button } from "@material-ui/core";
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
// install Swiper components
import Zoom from "react-reveal/Zoom";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay, Mousewheel]);
const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "lightgreen",
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
		<Swiper
			spaceBetween={-20}
			slidesPerView={1}
			navigation
			scrollbar={{ draggable: true }}
			tag='ul'
			effect='coverflow'
			mousewheel={true}
			id='first'
			className='animate__animated animate__fadeIn'
			// autoplay={{
			// 	delay: "3000",
			// 	stopOnLastSlide: false,
			// 	disableOnInteraction: false,
			// }}
		>
			<SwiperSlide tag='li'>
				<div
					style={{
						width: "90vw",
						height: "95vh",
						backgroundImage:
							"url(https://res.cloudinary.com/maximuscloud/image/upload/v1599605651/pexels-pixabay-51947_yymg1c.jpg)",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div
						style={{
							backgroundColor: "black",
							opacity: 0.6,
							width: "100%",
							height: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<div
							style={{
								height: "10%",
								width: "100%",
								display: "flex",
								justifyContent: "flex-start",
								alignItems: "center",
								opacity: 1,
							}}
						>
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
						<div
							style={{
								height: "90%",
								width: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								opacity: 1,
							}}
						>
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
					style={{
						width: "90vw",
						height: "95vh",
						backgroundImage:
							"url(https://res.cloudinary.com/maximuscloud/image/upload/v1599605655/pexels-kaboompics-com-5808_apso79.jpg)",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div
						style={{
							height: "100%",
							width: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Button
							variant='contained'
							size='large'
							color='primary'
							onClick={(event) => {
								document.getElementById("first").className = "animate__animated animate__backOutUp";
								document.getElementById("first").onanimationend = () => {
									history.push("/about");
								};
							}}
						>
							Primary
						</Button>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide tag='li'>
				<img
					src='https://res.cloudinary.com/maximuscloud/image/upload/v1599605711/Main_1_byg3t7.jpg'
					alt='first'
					className='slider-image'
				/>
			</SwiperSlide>
			<SwiperSlide tag='li'>
				<img
					src='https://res.cloudinary.com/maximuscloud/image/upload/v1599605648/pexels-michael-89267_do9a85.jpg'
					alt='first'
					className='slider-image'
				/>
			</SwiperSlide>
			<SwiperSlide tag='li'>
				<img
					src='https://res.cloudinary.com/maximuscloud/image/upload/v1599605652/Main_rkfanj.jpg'
					alt='first'
					className='slider-image'
				/>
			</SwiperSlide>
			...
		</Swiper>
	);
}

export default withRouter(Home);
