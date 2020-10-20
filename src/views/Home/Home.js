import React from "react";
import { withRouter, useHistory, Link} from "react-router-dom";
import "./Home.css";
import SwiperCore, { Navigation, A11y, EffectFade, Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-flip/effect-flip.scss";
import NavBar from "../NavBar/NavBar";
import { Button, useMediaQuery, IconButton} from "@material-ui/core";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
SwiperCore.use([Navigation, A11y, Autoplay, EffectFade]);
function Home() {
	const matches = useMediaQuery("(max-width:720px)");
	const history = useHistory();
	return (
		<div>
			<Swiper
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
						
							<NavBar />
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
				</SwiperSlide>
				<SwiperSlide tag='li'>
					<div
						className='slide-container'
						style={{
							backgroundImage:
								"url(https://res.cloudinary.com/maximuscloud/image/upload/v1599605655/pexels-kaboompics-com-5808_apso79.jpg)",
						}}
					>
						<NavBar />
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
						<div className='slide-overlay'>
							
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
						
							<NavBar />
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
				</SwiperSlide>
				<SwiperSlide tag='li'>
					<div
						className='slide-container'
						style={{
							backgroundImage:
								"url(https://res.cloudinary.com/maximuscloud/image/upload/v1599605652/Main_rkfanj.jpg)",
						}}
					>
						
							<NavBar />
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
				</SwiperSlide>
				<SwiperSlide tag='li'>
					<div
						className='slide-container'
						style={{
							backgroundImage:
								"url(https://res.cloudinary.com/maximuscloud/image/upload/v1600471386/Main_gkqn9l.jpg)",
						}}
					>
						
							<NavBar />
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
				</SwiperSlide>
				...
			</Swiper>
			<div className="home-about-hero-container animate__animated animate__fadeIn">
					<div className="home-about-hero-left">
						<p>Get to know all about HCM</p>
						{matches?<IconButton size="small"
								onClick={() => {
									history.push("/about");
								}}
							>
								<ArrowForwardOutlinedIcon />
							</IconButton> : 
							<Button variant="outlined" className="home-learn-button" size="large" onClick={() => {
								history.push("/about");
							}}>  
							Learn More
						</Button>}

					</div>
					<div className="home-about-hero-right">
						<p>HCM Agro Products is the key enterprise in the field of agriculture focusing
							relentlessly on quality and empowering our customers with a stunning and
							innovative range of products.Our broad vision propels us forward in the direction of sustainable agriculture
							with minimal impact on the environment which encompasses several aspects.</p>
						
						<div className="home-about-hero-svg-bar">
							<div className="home-about-svg-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1603108097/chemistry_orfhan.png" className="home-about-svg" alt="research-svg"/>
								<h5>Innovative</h5>
							</div>
							<div className="home-about-svg-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1603108095/agricultural_obpsw4.png" className="home-about-svg" alt="environment-svg"/>
								<h5>Eco-Friendly</h5>
							</div>
							<div className="home-about-svg-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1603108097/agriculture_1_jzeweq.png" className="home-about-svg" alt="organic-svg"/>
								<h5>Organic</h5>
							</div>
							<div className="home-about-svg-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1603108097/seed_urrup5.png" className="home-about-svg" alt="best-practices-svg"/>
								<h5>Best Practices</h5>
							</div>
							<div className="home-about-svg-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1603108095/agriculture_tjeu0p.png" className="home-about-svg" alt="techno-advanced-svg"/>
								<h5>Technologically Advanced</h5>
							</div>
						</div>
					</div>
			</div>
		</div>
	);
}

export default withRouter(Home);
//Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>