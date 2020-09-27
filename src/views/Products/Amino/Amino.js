import React, { useState } from "react";
import {
	Card,
	CardActionArea,
	CardContent,
	CardActions,
	Button,
	Typography,
} from "@material-ui/core";
import "./Amino.css";
import NavBar from "../../NavBar/NavBar";
function Amino() {
	const [modals, setModals] = useState([false, false, false]);
	return (
		<div className='amino-container'>
			<div className='amino-hero animate__animated animate__fadeIn'>
				<div className='amino-hero-overlay '>
					<NavBar />
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
