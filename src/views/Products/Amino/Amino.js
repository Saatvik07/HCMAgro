import React, { useState } from "react";
import StarBorder from "@material-ui/icons/StarBorder";
import {
	Card,
	CardActionArea,
	CardContent,
	CardActions,
	Button,
	Typography,
	Modal,
	Paper,
	TableContainer,TableBody,Table,TableHead,TableRow,TableCell,List,ListItem,ListItemIcon,ListItemText, Dialog
} from "@material-ui/core";
import "./Amino.css";
import NavBar from "../../NavBar/NavBar";
const product1 = [
	{ item: "", standard1: "50-55%", standard2:"80-85%", standard3:"90-95%" },
	{ item: "Appearance", standard1: "White", standard2:"Cream Powder", standard3:"Off white" },
	{ item: "Total Protein", standard1: "50-55%", standard2:"80-85%", standard3:"90-95%" },
	{ item: "Total Nitrogen", standard1: "10-11%", standard2:"12-13%", standard3:"15-16%" },
	{ item: "pH", standard1: "3.5-5.5", standard2:"6-7", standard3:"6-7" },
	{ item: "Loss on drying", standard1: "4-5%", standard2:"4-5%", standard3:"3-3.5%" },
	{ item: "Odour", standard1: "Protein Odour", standard2:"Protein Odour", standard3:"Protein Odour" },
	{ item: "Water solubility", standard1: "100%", standard2:"100%", standard3:"100%" },
];
const product1Benefits = [
	"Stimulates plant growth and increases the output of plants.",
	"Improve the quality of product & also promotes the development of root & shoots",
	"A good supplementary nutrilizer to N,P,K fertilizers & pesticides",
];
function Amino() {
	const [modals, setModals] = useState([false, false, false]);
	const handleClose = ()=>{
			let dialog = document.body.querySelector("#dialog");
			dialog.animate([
				// keyframes
				{ opacity: 1 }, 
				{ opacity: 0}
			  ], { 
				// timing options
				duration: 700,
			  });
			  setTimeout(() => {
				setModals([false,false,false]);
			}, 350);

	}
	return (
		<div className='amino-container'>
			<div className='amino-hero animate__animated animate__fadeIn'>
				<div className='amino-hero-overlay '>
					<NavBar />
					<div className='amino-hero-info'>
						<h1>Amino & Fulvic Acid Series</h1>
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
								Amino Acid Powder
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
								Amino Acid Granules
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
								Fulvic Acid
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
			<Dialog open={modals[0]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">

				<div className='product-dialog-container '>
					<div className='manure-modal-left-div '>
						<img
							className='product-dialog-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='product1'
						/>
						<Paper elevation={5} className='manure-modal-heading'>
							<h2>Benefits</h2>
						</Paper>
						<List className="product-dialog-list">
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
					<div className='manure-modal-right-div'>
					<TableContainer className='manure-modal-table-container'>
							<Table className='manure-modal-table'>
								<TableHead>
									<TableRow>
										<TableCell>Item</TableCell>
										<TableCell></TableCell>
										<TableCell>Standard</TableCell>
										<TableCell></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{product1.map((row) => (
										<TableRow key={row.item}>
											<TableCell component='th' scope='row'>
												{row.item}
											</TableCell>
											<TableCell>{row.standard1}</TableCell>
											<TableCell>{row.standard2}</TableCell>
											<TableCell>{row.standard3}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>

					</div>
				</div>
			</Dialog>
			<Dialog open={modals[2]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">

				<div className='product-dialog-container '>
					<div className='manure-modal-left-div '>
						<img
							className='product-dialog-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='product1'
						/>
						<Paper elevation={5} className='manure-modal-heading'>
							<h2>Benefits</h2>
						</Paper>
						<List className="product-dialog-list">
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
					<div className='manure-modal-right-div'>
					<TableContainer className='manure-modal-table-container'>
							<Table className='manure-modal-table'>
								<TableHead>
									<TableRow>
										<TableCell>Item</TableCell>
										<TableCell></TableCell>
										<TableCell>Standard</TableCell>
										<TableCell></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{product1.map((row) => (
										<TableRow key={row.item}>
											<TableCell component='th' scope='row'>
												{row.item}
											</TableCell>
											<TableCell>{row.standard1}</TableCell>
											<TableCell>{row.standard2}</TableCell>
											<TableCell>{row.standard3}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>

					</div>
				</div>
			</Dialog>
		</div>
	);
}

export default Amino;
