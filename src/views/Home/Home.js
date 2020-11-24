import React, {useEffect, useState}from "react";
import { withRouter, useHistory} from "react-router-dom";
import "./Home.css";
import SwiperCore, { Navigation, A11y, EffectFade, Autoplay} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-flip/effect-flip.scss";
import NavBar from "../NavBar/NavBar";
import { Button, useMediaQuery, IconButton, CircularProgress,GridList,GridListTile,GridListTileBar, makeStyles} from "@material-ui/core";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import AOS from "aos";
SwiperCore.use([Navigation, A11y, Autoplay, EffectFade]);
const tileData = [
	{
		image:"https://res.cloudinary.com/maximuscloud/image/upload/v1605050728/Seaweed_granules_yhjcmy.jpg",
		title:"Seaweed Extract",

	},
	{
		image:"https://res.cloudinary.com/maximuscloud/image/upload/v1605189057/Humid_acid_granules_f5u9em.jpg",
		title:"Humic Acid",
	},
	{
		image:"https://res.cloudinary.com/maximuscloud/image/upload/v1605050732/seaweed_gel_mg5iax.jpg",
		title:"Seaweed Extract Gel"
	},
	{
		image:"https://res.cloudinary.com/maximuscloud/image/upload/v1605204111/Super_potassium_FLAKES_lxowoc.jpg",
		title:"Super Potassium Flakes"
	}
]
const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  flexWrap: 'wrap',
	  justifyContent: 'space-around',
	  overflow: 'hidden',
	  backgroundColor: theme.palette.background.paper,
	},
	gridList: {
	  flexWrap: 'nowrap',
	  // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
	  transform: 'translateZ(0)',
	  margin: "30px 0px !important"
	},
	title: {
	  color: theme.palette.primary.light,
	},
	titleBar: {
	  background:
		'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	},
  }));
function Home() {
	const classes = useStyles();
	const matches = useMediaQuery("(max-width:720px)");
	const history = useHistory();
	const [loading,setLoading] = useState([false,false]);
	useEffect(()=>{
		if(loading[0]==true && loading[1]==true){
			document.getElementById("loader").style.display="none";
			document.getElementById("main-container").classList.remove("not-loaded");
			AOS.init();
			setLoading([false,false]);
		}
		console.log(loading);
	})
	return (
		<div style={{textAlign:"center"}}> 
			<div id="main-container" className="not-loaded">
			<Swiper
				slidesPerView={1}
				navigation
				tag='ul'
				effect='fade'
				id='first'
				className='animate__animated animate__fadeIn home-swiper-container'
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
								"url(https://res.cloudinary.com/maximuscloud/image/upload/v1600898470/noah-buscher-x8ZStukS2PM-unsplash_wqujxi.jpg)",
						}}
					>
						
							<NavBar />
							<div className='slide-info'>
								<img
									src='https://hcmagroproducts.com/wp-content/uploads/2018/08/LOgo.png'
									alt='logo'
									style={{ width: "200px", height: "auto", opacity: 1 }}
									onLoad = {()=>{
										setLoading([true,loading[1]]);
									}}
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
								"url(https://res.cloudinary.com/maximuscloud/image/upload/v1604078780/pexels-pawe%C5%82-fija%C5%82kowski-1253748_lz7bi7.jpg)",
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
								"url(https://res.cloudinary.com/maximuscloud/image/upload/v1604078802/pexels-singkham-1108572_frpldg.jpg)",
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
								"url(https://res.cloudinary.com/maximuscloud/image/upload/v1604078767/pexels-pixabay-207247_m09p9k.jpg)",
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
								"url(https://res.cloudinary.com/maximuscloud/image/upload/v1604078767/pexels-pixabay-207247_m09p9k.jpg)",
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
								"url(https://res.cloudinary.com/maximuscloud/image/upload/v1604079430/pexels-germain-rodriguez-1453485_mbymuw.jpg)",
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
								"url(https://res.cloudinary.com/maximuscloud/image/upload/v1604079981/pexels-paul-basel-1816699_aqqaea.jpg)",
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
				...
			</Swiper>
			<p className="home-best-heading">Our Bestsellers</p>
			<GridList className={classes.gridList} cols={2.5}>
				{tileData.map((tile) => (
				<GridListTile key={tile.img} className="home-tile">
					<img src={tile.image} alt={tile.title} />
					<GridListTileBar
					title={tile.title}
					className="home-title-bar"
					actionIcon={
						<IconButton aria-label={`star ${tile.title}`}>
						<OpenInNewIcon  style={{color:"#dad7cd"}}/>
						</IconButton>
					}
					/>
				</GridListTile>
				))}
      	</GridList>
			{/* <div className="hex-container" >
				<div className="upper-hex-container">
					<div className="hex-image hex1"
						data-aos='fade-up'
						data-aos-mirror='true'
						data-aos-once='false'></div>
					
				</div>
				<div className="lower-hex-container">
				<div className="hex-image hex2"
					data-aos='fade-left'
					data-aos-mirror='true'
					data-aos-once='false'></div>
					<div className="hex-image hex3"
					data-aos='fade-right'
					data-aos-mirror='true'
					data-aos-once='false'></div>
				</div>
			</div> */}
			
			
			{matches?
			<div className="home-about-hero-container animate__animated animate__fadeIn" data-aos='fade-up'
			data-aos-mirror='true'
			data-aos-once='false' >
					<div style={{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-evenly",marginBottom:"30px"}}>
						<div className="home-about-hero-left" >
							<p>Get to know all about HCM</p>
							<IconButton size="small" 
								onClick={() => {
									history.push("/about");
								}}
							>
								<ArrowForwardOutlinedIcon style={{color: "#3a5a40"}}/>
							</IconButton> 
						</div>
						
						<div className="home-about-hero-right" data-aos='fade-up'
						data-aos-mirror='true'
						data-aos-once='false'>
							<p>HCM Agro Products is the key enterprise in the field of agriculture focusing
								relentlessly on quality and empowering our customers with a stunning and
								innovative range of products.Our broad vision propels us forward in the direction of sustainable agriculture
								with minimal impact on the environment which encompasses several aspects.</p>
						</div>
					</div>
					<div className="home-about-hero-svg-bar" data-aos='fade-up'
						data-aos-mirror='true'
						data-aos-once='false'>
							<div className="home-about-svg-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101158/output-onlinepngtools_10_dlgnob.png" className="home-about-svg" alt="research-svg" onLoad = {()=>{
					setLoading([loading[0],true]);
				}}/>
								<h5>Innovative</h5>
							</div>
							<div className="home-about-svg-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101158/output-onlinepngtools_7_fgtybu.png" className="home-about-svg" alt="environment-svg"/>
								<h5>Eco-Friendly</h5>
							</div>
							<div className="home-about-svg-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101158/output-onlinepngtools_9_elizrd.png" className="home-about-svg" alt="organic-svg"/>
								<h5>Organic</h5>
							</div>
							<div className="home-about-svg-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101158/output-onlinepngtools_8_hdarcx.png" className="home-about-svg" alt="best-practices-svg"/>
								<h5>Best Practices</h5>
							</div>
							<div className="home-about-svg-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101143/output-onlinepngtools_11_kwfayo.png" className="home-about-svg" alt="techno-advanced-svg"/>
								<h5>Technologically Advanced</h5>
							</div>
					</div>
			</div>
			:<div className="home-about-hero-container animate__animated animate__fadeIn" >
					<div className="home-about-hero-left"
						data-aos='fade-up'
						data-aos-mirror='true'
						data-aos-once='false'>
						<p>Get to know all about HCM</p>
						<Button variant="outlined" className="home-learn-button" size="large" onClick={() => {
								history.push("/about");
							}}>  
							Learn More
						</Button>
					</div>
					
					<div className="home-about-hero-right" 
							data-aos='fade-up'
							data-aos-mirror='true'
							data-aos-once='false'>
						<p>HCM Agro Products is the key enterprise in the field of agriculture focusing
							relentlessly on quality and empowering our customers with a stunning and
							innovative range of products.Our broad vision propels us forward in the direction of sustainable agriculture
							with minimal impact on the environment which encompasses several aspects.</p>
						
						<div className="home-about-hero-svg-bar" 
							data-aos='fade-up'
							data-aos-mirror='true'
							data-aos-once='false'>
							<div className="home-about-svg-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101158/output-onlinepngtools_10_dlgnob.png" className="home-about-svg" alt="research-svg" onLoad = {()=>{
				setLoading([loading[0],true]);
			}}/>
								<h5>Innovative</h5>
							</div>
							<div className="home-about-svg-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101158/output-onlinepngtools_7_fgtybu.png" className="home-about-svg" alt="environment-svg"/>
								<h5>Eco-Friendly</h5>
							</div>
							<div className="home-about-svg-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101158/output-onlinepngtools_9_elizrd.png" className="home-about-svg" alt="organic-svg"/>
								<h5>Organic</h5>
							</div>
							<div className="home-about-svg-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101158/output-onlinepngtools_8_hdarcx.png" className="home-about-svg" alt="best-practices-svg"/>
								<h5>Best Practices</h5>
							</div>
							<div className="home-about-svg-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101143/output-onlinepngtools_11_kwfayo.png" className="home-about-svg" alt="techno-advanced-svg"/>
								<h5>Technologically Advanced</h5>
							</div>
					</div>
				</div>
			</div>
			}
			</div>
			<CircularProgress id="loader" style={{height:"200px", width:"200px",color:"#3a5a40", marginTop:"50px"}}/>
		</div>
	);
}

export default withRouter(Home);
//Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>