import React from "react";
import "./Silicon.css";
import { Paper, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import StarBorder from "@material-ui/icons/StarBorder";
import NavBar from "../../NavBar/NavBar";
const product1Benefits = [
	"Facilitate uptake of chemicals into the plant tissue.",
	"Easy dispersion in aqueous systems.",
	"Produces very rapid wetting and spreading on hard to wet surface such as waxy leaves.",
	"Enhance the performance of agricultural chemicals and plant growth regulator.",
	"It can be used as formulation ingredient in pesticide products, or as tank-mix adjuvant for foliar applied chemicals.",
];
function Silicon() {
	return (
		<div className='silicon-container'>
			<div className='silicon-hero animate__animated animate__fadeIn'>
				<div className='silicon-hero-overlay '>
					<NavBar />
					<div className='silicon-hero-info'>
						<h1>Silicon Spreader</h1>
					</div>
				</div>
			</div>
			<div className='silicon-card-container animate__animated animate__fadeIn'>
				<div className='silicon-headline'>
					<h2>
						Our Silicon Spreader is processed by experienced professionals using optimum quality,
						chemical compounds and progressive technology in adherence with norms.
					</h2>
				</div>

				<div className='silicon-modal-container '>
					<div className='silicon-modal-left-div '>
						<img
							className='silicon-modal-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='product1'
						/>
					</div>
					<div className='silicon-modal-right-div'>
						<Paper elevation={5} className='silicon-modal-heading'>
							<h2>Advantages</h2>
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
			</div>
		</div>
	);
}

export default Silicon;
