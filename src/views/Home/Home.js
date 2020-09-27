import React from "react";
import { withRouter } from "react-router-dom";
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
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import "swiper/components/effect-flip/effect-flip.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import NavBar from "../NavBar/NavBar";
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
function Home() {
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
					</div>
				</SwiperSlide>
				...
			</Swiper>
			<div></div>
		</div>
	);
}

export default withRouter(Home);
