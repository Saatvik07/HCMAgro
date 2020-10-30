import React, { useState, useEffect} from "react";
import "./Products.css";
import {
	IconButton,
	Card,
	CardActionArea,
	Typography,
	CardContent,
	CardActions,
	Button,
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
function Products() {
	const [expandSeaWeed, setExpandSeaWeed] = useState(false);
	const [expandBio, setExpandBio] = useState(false);
	const [expandHumate, setExpandHumate] = useState(false);
	const [expandAmino, setExpandAmino] = useState(false);
	const [expandZinc, setExpandZinc] = useState(false);
	const [expandFilm, setExpandFilm] = useState(false);
	const history = useHistory();
	return (
		<div className='products-container'>
			<div className='products-hero animate__animated animate__fadeIn'>
				<NavBar />
				<div className='products-hero-overlay '>
					<div className='products-hero-info'>
						<h1>Products</h1>
					</div>
				</div>
			</div>
			<div className='products-card-container'>
				<Card className='products-card one animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							history.push("/manure");
						}}
					>
						<img
							className='products-card-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600557794/pexels-john-lambeth-2252584_gqmapm.jpg'
							alt='humates'
						/>
						<CardContent className='products-list-text'>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "#DAD7CD" }}
							>
								Organic Manure
							</Typography>
							Organic Manure is an eco-friendly fertilizer, which helps in improving the quality &
							fertility of soil and hence make the produce healthy & nutritious. It enriches the
							soil with micro-organisms & restore the depleted nutrients of the soil.
						</CardContent>
					</CardActionArea>
					<CardActions>
						<div className='products-card-footer'>
							<IconButton
								className='products-card-button'
								onClick={() => {
									history.push("/manure");
								}}
							>
								<ArrowForwardOutlinedIcon />
							</IconButton>
						</div>
					</CardActions>
				</Card>
				<Card className='products-card two animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							history.push("/xanthan");
						}}
					>
						<img
							className='products-card-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600557804/pexels-matheus-cenali-2733918_j78wcf.jpg'
							alt='Xanthan gum'
						/>
						<CardContent className='products-list-text'>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "#DAD7CD" }}
							>
								Xanthan Gum
							</Typography>
							Xanthan Gum is a high molecular weight exocellular polysaccharide derived from the
							bacterium Xanthomonas campestris using a natural, aerobic fermentation process, in a
							sterile, controlled environment.
						</CardContent>
					</CardActionArea>
					<CardActions>
						<div className='products-card-footer'>
							<IconButton
								className='products-card-button'
								onClick={() => {
									history.push("/xanthan");
								}}
							>
								<ArrowForwardOutlinedIcon />
							</IconButton>
						</div>
					</CardActions>
				</Card>
				<Card className='products-card three animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							history.push("/silicon");
						}}
					>
						<img
							className='products-card-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600557788/pexels-quang-nguyen-vinh-2135677_f5mpyo.jpg'
							alt='Silicon Spreader'
						/>
						<CardContent className='products-list-text'>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "#DAD7CD" }}
							>
								Silicon Spreader
							</Typography>
							Silicon Spreader is a super wetting and agriculture spreading Agent, which have low
							molecular weight nonionic surfactant developed to improve the wetting, spreading and
							penetration of agriculture chemicals.
						</CardContent>
					</CardActionArea>
					<CardActions>
						<div className='products-card-footer'>
							<IconButton
								className='products-card-button'
								onClick={() => {
									history.push("/silicon");
								}}
							>
								<ArrowForwardOutlinedIcon />
							</IconButton>
						</div>
					</CardActions>
				</Card>
				<Card className='products-card one animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setExpandSeaWeed(!expandSeaWeed);
						}}
					>
						<img
							className='products-card-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600557792/pexels-nick-collins-1274609_jut6vd.jpg'
							alt='seaweed extract'
						/>
						<CardContent className='products-card-info'>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "#DAD7CD" }}
							>
								Sea Weed Extract
							</Typography>
							Seaweed extracts is a natural concentrate extracted from marine plants which
							demonstrate to possess novel mechanisms for increasing crop productivity.
							<br></br>
							<Button variant='outlined' className='products-card-expand-icon'>
								{expandSeaWeed ? "See Less" : "See More"}
							</Button>
						</CardContent>
					</CardActionArea>
					<Collapse in={expandSeaWeed} timeout='auto' unmountOnExit style={{ zIndex: 200 }}>
						<CardContent>
							<List>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Seaweed Extract Granules' className='products-list-text' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Seaweed Extract Powder' className='products-list-text' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Seaweed Extract Flakes' className='products-list-text' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Seaweed Extract Gel' className='products-list-text' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Green Seaweed Extract' className='products-list-text' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Brown Seaweed Extract' className='products-list-text' />
								</ListItem>
							</List>
						</CardContent>
					</Collapse>
					<CardActions>
						<div className='products-card-footer'>
							<IconButton
								className='products-card-button'
								onClick={() => {
									history.push("/seaweed");
								}}
							>
								<ArrowForwardOutlinedIcon />
							</IconButton>
						</div>
					</CardActions>
				</Card>
				<Card className='products-card two animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setExpandBio(!expandBio);
						}}
					>
						<img
							className='products-card-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600557792/pexels-nick-collins-1274609_jut6vd.jpg'
							alt='seaweed extract'
						/>
						<CardContent className='products-card-info'>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "#DAD7CD" }}
							>
								Bio-Fertilizer
							</Typography>
							Mycorrhizae is a biofertilizer that helps in promotion of plant growth as well as
							providing several other benefits to cultivation of plants.
							<br></br>
							<Button variant='outlined' className='products-card-expand-icon'>
								SEE MORE
							</Button>
						</CardContent>
					</CardActionArea>
					<Collapse in={expandBio} timeout='auto' unmountOnExit>
						<CardContent>
							<List>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Rhizobium Biofertilizer' className='products-list-text' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText
										primary='Azotobacter Biofertilizer'
										className='products-list-text'
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText
										primary='Azospirillum  Biofertilizer'
										className='products-list-text'
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText
										primary='phosphate solubilizing bacteria (PSB)  Biofertilizer'
										className='products-list-text'
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText
										primary='Mycorrhizal Biofertilizer '
										className='products-list-text'
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText
										primary='Potassium mobilizing Biofertilizer '
										className='products-list-text'
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText
										primary='Zinc solubilizing Biofertilizer'
										className='products-list-text'
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText
										primary='Acetobacter Biofertilizer '
										className='products-list-text'
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Carrier based consortia ' className='products-list-text' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Liquid consortia' className='products-list-text' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText
										primary='Phosphate Solubilizing Fungal Biofertilizer'
										className='products-list-text'
									/>
								</ListItem>
							</List>
						</CardContent>
					</Collapse>
					<CardActions>
						<div className='products-card-footer'>
							<IconButton
								className='products-card-button'
								onClick={() => {
									history.push("/category2");
								}}
							>
								<ArrowForwardOutlinedIcon />
							</IconButton>
						</div>
					</CardActions>
				</Card>
				<Card className='products-card three animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setExpandHumate(!expandHumate);
						}}
					>
						<img
							className='products-card-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600557792/pexels-nick-collins-1274609_jut6vd.jpg'
							alt='seaweed extract'
						/>
						<CardContent className='products-card-info'>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "#DAD7CD" }}
							>
								Humate/Humic Series
							</Typography>
							Humate is a key component in building a living soil. It is used as fertilizer additive
							that contributes naturally in increasing the soil fertility and accelerating plant
							growth.
							<br></br>
							<Button variant='outlined' className='products-card-expand-icon' >
								SEE MORE
							</Button>
						</CardContent>
					</CardActionArea>
					<Collapse in={expandHumate} timeout='auto' unmountOnExit>
						<CardContent>
							<List>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Humic Acid' className='products-list-text' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Potassium Humate' className='products-list-text' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Super Potassium Humate' className='products-list-text' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Boron Humate' className='products-list-text' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Sodium Humate' className='products-list-text' />
								</ListItem>
							</List>
						</CardContent>
					</Collapse>
					<CardActions>
						<div className='products-card-footer'>
							<IconButton
								className='products-card-button'
								onClick={() => {
									history.push("/humate");
								}}
							>
								<ArrowForwardOutlinedIcon />
							</IconButton>
						</div>
					</CardActions>
				</Card>
				<Card className='products-card one animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setExpandAmino(!expandAmino);
						}}
					>
						<img
							className='products-card-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600557792/pexels-nick-collins-1274609_jut6vd.jpg'
							alt='seaweed extract'
						/>
						<CardContent className='products-card-info'>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "#DAD7CD" }}
							>
								Amino & Fulvic Acid Series
							</Typography>
							They are bio- organic products which play an important role in the nutrition
							development of the plant and promotes hormonal activity for higher yields
							<br></br>
							<Button variant='outlined' className='products-card-expand-icon'>
								SEE MORE
							</Button>
						</CardContent>
					</CardActionArea>
					<Collapse in={expandAmino} timeout='auto' unmountOnExit>
						<CardContent>
							<List>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Amino Acid Powder' className='products-list-text' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Amino Acid Granules' className='products-list-text' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Fulvic Acid' className='products-list-text' />
								</ListItem>
							</List>
						</CardContent>
					</Collapse>
					<CardActions>
						<div className='products-card-footer'>
							<IconButton
								className='products-card-button'
								onClick={() => {
									history.push("/amino");
								}}
							>
								<ArrowForwardOutlinedIcon />
							</IconButton>
						</div>
					</CardActions>
				</Card>
				<Card className='products-card two animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setExpandZinc(!expandZinc);
						}}
					>
						<img
							className='products-card-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600557792/pexels-nick-collins-1274609_jut6vd.jpg'
							alt='seaweed extract'
						/>
						<CardContent className='products-card-info'>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "#DAD7CD" }}
							>
								Zinc Series
							</Typography>
							In plants, zinc is a key constituent of many enzymes and proteins. It is needed by
							plants in small amounts, but yet crucial to plant development.
							<br></br>
							<Button variant='outlined' className='products-card-expand-icon'>
								SEE MORE
							</Button>
						</CardContent>
					</CardActionArea>
					<Collapse in={expandZinc} timeout='auto' unmountOnExit>
						<CardContent>
							<List>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Zinc Tablets' className='products-list-text' />
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText primary='Zinc Powder' className='products-list-text' />
								</ListItem>
							</List>
						</CardContent>
					</Collapse>
					<CardActions>
						<div className='products-card-footer'>
							<IconButton
								className='products-card-button'
								onClick={() => {
									history.push("/category2");
								}}
							>
								<ArrowForwardOutlinedIcon />
							</IconButton>
						</div>
					</CardActions>
				</Card>
				<Card className='products-card three animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setExpandFilm(!expandFilm);
						}}
					>
						<img
							className='products-card-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600557792/pexels-nick-collins-1274609_jut6vd.jpg'
							alt='seaweed extract'
						/>
						<CardContent className='products-card-info'>
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "#DAD7CD" }}
							>
								Water Soluble Film
							</Typography>
							PVA film with properties of excellent gas barrier, water-soluble and biodegradable,
							has become one of the most successful eco-friendly materials in recent years.
							<br></br>
							<Button variant='outlined' className='products-card-expand-icon'>
								SEE MORE
							</Button>
						</CardContent>
					</CardActionArea>
					<Collapse in={expandFilm} timeout='auto' unmountOnExit>
						<CardContent>
							<List>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText
										primary='Water soluble film for agriculture'
										className='products-list-text'
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText
										primary='Water soluble film for embroidery '
										className='products-list-text'
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText
										primary='Water soluble films for laundry '
										className='products-list-text'
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText
										primary='Water soluble laundry pods'
										className='products-list-text'
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<ChevronRightIcon style={{ color: "#DAD7CD" }} />
									</ListItemIcon>
									<ListItemText
										primary='Water soluble laundry bags'
										className='products-list-text'
									/>
								</ListItem>
							</List>
						</CardContent>
					</Collapse>
					<CardActions>
						<div className='products-card-footer'>
							<IconButton
								className='products-card-button'
								onClick={() => {
									history.push("/category2");
								}}
							>
								<ArrowForwardOutlinedIcon />
							</IconButton>
						</div>
					</CardActions>
				</Card>
			</div>
		</div>
	);
}

export default Products;
//Photo by Quang Nguyen Vinh from Pexels
//Photo by John Lambeth from Pexels
