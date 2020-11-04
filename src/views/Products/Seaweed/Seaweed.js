import React from 'react'
import "./Seaweed.css";
import StarBorder from "@material-ui/icons/StarBorder";
import {
	TableContainer,
	TableHead,
	TableCell,
	TableRow,
	Table,
	TableBody,
	Paper,
	List,
	ListItem,
	ListItemIcon,
    ListItemText,
    useMediaQuery
} from "@material-ui/core";
import NavBar from "../../NavBar/NavBar";
const seaweedTable = [
	{ item: "Alginic Acid", standard: "15-19%" },
	{ item: "Nitrogen(N)", standard: "2-5%" },
    { item: "Phosphorous(P2O2)", standard: "2-3%" },
    { item: "Potassium(K2O)", standard: "16-20%" },
    { item: "Organic Matter", standard: "45-55%" },
    { item: "Solubility in water", standard: "100%" },
    { item: "pH", standard: "6-10" },
];
const seaweedBenefits = [
    "Multi-functioning organic fertilizer helps in rejuvenating and composting soil.",
    "Proven supplements to fertilizers.",
    "It is a naturally derived soil conditioner.",
    "Seaweed helps to keep the soil moist thus reducing the need to water.",
    "It helps to grow string, healthy crops and resist fungus and disease.",
    "It doesn’t blow away, seaweed (especially when it is stiff wet) won’t blow away in a stiff wind.",
];
function Seaweed() {
    const matches = useMediaQuery("(max-width:720px)");
    return (
        <div className='seaweed-container'>
            <div className='seaweed-hero animate__animated animate__fadeIn'>
            <NavBar />
                <div className='seaweed-hero-overlay '>
                    <div className='seaweed-hero-info'>
                        <h1>Seaweed Extract</h1>
                    </div>
                </div>
            </div>
            {matches?
                <div className="seaweed-card-container">
                    <div className="seaweed-card-container-left">
                            <img
                                className='seaweed-image'
                                src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
                                alt='product1'
                            />
                            <TableContainer className='seaweed-table-container'>
                            <Table className='seaweed-table'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="seaweed-table-text-headings">Item</TableCell>
                                        <TableCell className="seaweed-table-text-headings">Standard</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {seaweedTable.map((row) => (
                                        <TableRow key={row.item}>
                                            <TableCell component='th' scope='row' className="seaweed-table-text">
                                                {row.item}
                                            </TableCell>
                                            <TableCell  className="seaweed-table-text">{row.standard}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className="seaweed-card-container-right">
                        <Paper elevation={5} className='seaweed-heading'>
                                <h2>Benefits</h2>
                            </Paper>
                            <List>
                                {seaweedBenefits.map((benefit) => (
                                    <ListItem>
                                        <ListItemIcon style={{color:"#3a5a40"}}>
                                            <StarBorder />
                                        </ListItemIcon>
                                        <ListItemText primary={benefit} className="seaweed-list-text"></ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                    </div>
            </div>
            :
            <div className="seaweed-card-container">
                <div className="seaweed-card-container-left">
                        <img
							className='seaweed-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='product1'
						/>
                        <TableContainer className='seaweed-table-container'>
                            <Table className='seaweed-table'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="seaweed-table-text-headings">Item</TableCell>
                                        <TableCell className="seaweed-table-text-headings">Standard</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {seaweedTable.map((row) => (
                                        <TableRow key={row.item}>
                                            <TableCell component='th' scope='row' className="seaweed-table-text">
                                                {row.item}
                                            </TableCell>
                                            <TableCell className="seaweed-table-text">{row.standard}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                </div>
                <div className="seaweed-card-container-right">
                    <Paper elevation={5} className='seaweed-heading'>
						<h2>Benefits</h2>
					</Paper>
                    <List>
                        {seaweedBenefits.map((benefit) => (
                            <ListItem>
                                <ListItemIcon style={{color:"#3a5a40"}}>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary={benefit} className="seaweed-list-text"></ListItemText>
                            </ListItem>
                        ))}
                    </List>
						
                </div>
            </div>}
            {/*<div className='seaweed-card-container'>
                <Card className='seaweed-card animate__animated animate__fadeIn'>
                    <CardActionArea
                        onClick={() => {
                            setModals([true, false, false,false,false]);
                        }}>
                        <img
                            src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
                            alt='Granule Organic amino'
                            className='seaweed-card-image'
                        />
                        <CardContent style={{ height: "40%" }} className="seaweed-card-content">
                            <Typography
                                gutterBottom
                                variant='h5'
                                component='h2'
                                style={{ marginBottom: "20px", color: "white" }}
                            >
                                
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                            It is a powder or granular form of leonardite/Lignite & weathered coal. Humic Acid is basic raw material for manufacturers in agricultural and industrial products and it is a permanent humic substance and can not be degraded that fast by the microorganisms in the soil and increase fertility.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className='seaweed-card-footer-container'>
                        <div className='seaweed-card-footer'>
                            <Button
                                variant='outlined'
                                className='seaweed-card-button'
                                onClick={() => {
                                    setModals([true, false, false, false,false]);
                                }}
                            >
                                Learn More
                            </Button>
                        </div>
                    </CardActions>
                </Card>
                <Card className='seaweed-card animate__animated animate__fadeIn'>
                    <CardActionArea
                        onClick={() => {
                            setModals([false, true, false,false,false]);
                        }}
                    >
                        <img
                            src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566655/WhatsApp_Image_2020-09-18_at_22.32.15_1_fhjpq0.jpg'
                            alt='Granule Organic amino'
                            className='seaweed-card-image'
                        />
                        <CardContent style={{ height: "40%" }} className="seaweed-card-content">
                            <Typography
                                gutterBottom
                                variant='h5'
                                component='h2'
                                style={{ marginBottom: "20px", color: "white" }}
                            >
                                Potassium seaweed
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                                Potassium seaweed is extracted from natural leonardite. It is black powder, flake or crystal granular, soluble in water, which perfectly combine humic acids and nutrients. It improves the structure of soil, increase the buffering power of soil. Optimize N,P,K absorption by plants.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className='seaweed-card-footer-container'>
                        <div className='seaweed-card-footer'>
                            <Button
                                variant='outlined'
                                className='seaweed-card-button'
                                onClick={() => {
                                    setModals([false, true, false,false,false]);
                                }}
                            >
                                Learn More
                            </Button>
                        </div>
                    </CardActions>
                </Card>
                <Card className='seaweed-card animate__animated animate__fadeIn'>
                    <CardActionArea
                        onClick={() => {
                            setModals([false, false, true, false,false]);
                        }}
                    >
                        <img
                            src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566656/WhatsApp_Image_2020-09-18_at_22.31.30_x9y8d4.jpg'
                            alt='Granule Organic amino'
                            className='seaweed-card-image'
                        />
                        <CardContent className="seaweed-card-content">
                            <Typography
                                gutterBottom
                                variant='h5'
                                component='h2'
                                style={{ marginBottom: "20px", color: "white" }}
                            >
                                Sodium seaweed
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                            Sodium is used in agriculture as fertilizer additive to increase the efficiency of fertilizer especially Nitrogen & Phosphorus based fertilizers. Sodium seaweed has the prominent property to absorb toxins, which decides this product is naturally an important for animal health. It also can be used in Aquaculture.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className='seaweed-card-footer-container'>
                        <div className='seaweed-card-footer'>
                            <Button
                                variant='outlined'
                                className='seaweed-card-button'
                                onClick={() => {
                                    setModals([false, false, true, false,false]);
                                }}
                            >
                                Learn More
                            </Button>
                        </div>
                    </CardActions>
                </Card>
                <Card className='seaweed-card animate__animated animate__fadeIn'>
                    <CardActionArea
                        onClick={() => {
                            setModals([false, false, false, true,false]);
                        }}
                    >
                        <img
                            src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566656/WhatsApp_Image_2020-09-18_at_22.31.30_x9y8d4.jpg'
                            alt='Granule Organic amino'
                            className='seaweed-card-image'
                        />
                        <CardContent className="seaweed-card-content">
                            <Typography
                                gutterBottom
                                variant='h5'
                                component='h2'
                                style={{ marginBottom: "20px", color: "white" }}
                            >
                                Boron seaweed
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                                Boron is an essential element for plants development, growth, crop yielding & seed development. It helps with the transfer of water & nutrition in plants. It contains rich humic acid and organic boron, which is an organic compound & microbial stimulator.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className='seaweed-card-footer-container'>
                        <div className='seaweed-card-footer'>
                            <Button
                                variant='outlined'
                                className='seaweed-card-button'
                                onClick={() => {
                                    setModals([false, false, false, true,false]);
                                }}
                            >
                                Learn More
                            </Button>
                        </div>
                    </CardActions>
                </Card>
                <Card className='seaweed-card animate__animated animate__fadeIn'>
                    <CardActionArea
                        onClick={() => {
                            setModals([false, false, false, true,false]);
                        }}
                    >
                        <img
                            src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566656/WhatsApp_Image_2020-09-18_at_22.31.30_x9y8d4.jpg'
                            alt='Granule Organic amino'
                            className='seaweed-card-image'
                        />
                        <CardContent className="seaweed-card-content">
                            <Typography
                                gutterBottom
                                variant='h5'
                                component='h2'
                                style={{ marginBottom: "20px", color: "white" }}
                            >
                                Super Potassium seaweed
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                                Info not available
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className='seaweed-card-footer-container'>
                        <div className='seaweed-card-footer'>
                            <Button
                                variant='outlined'
                                className='seaweed-card-button'
                                onClick={() => {
                                    setModals([false, false, false, true,false]);
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
                <div className='amino-dialog-left-div '>
                    <img
                        className='product-dialog-image'
                        src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
                        alt='product1'
                    />
                    <TableContainer className='manure-modal-table-container'>
                        <Table className='manure-modal-table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                    <TableCell>Standard</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {humicTable.map((row) => (
                                    <TableRow key={row.item}>
                                        <TableCell component='th' scope='row'>
                                            {row.item}
                                        </TableCell>
                                        <TableCell>{row.standard}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className='amino-dialog-right-div'>
                    <Paper elevation={5} className='manure-modal-heading'>
                        <h2>Benefits</h2>
                    </Paper>
                    <List className="product-dialog-list">
                        {humicBenefits.map((benefit) => (
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
        </Dialog>
        <Dialog open={modals[1]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">
            <div className='product-dialog-container '>
                <div className='amino-dialog-left-div'>
                    <img
                        className='product-dialog-image'
                        src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
                        alt='product1'
                    />
                    <TableContainer className='manure-modal-table-container'>
                        <Table className='manure-modal-table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                    <TableCell>Standard</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {potassiumTable.map((row) => (
                                    <TableRow key={row.item}>
                                        <TableCell component='th' scope='row'>
                                            {row.item}
                                        </TableCell>
                                        <TableCell>{row.standard}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                    
                </div>
                <div className='amino-dialog-left-div'>
                <Paper elevation={5} className='manure-modal-heading'>
                        <h2>Benefits</h2>
                    </Paper>
                <List className="product-dialog-list">
                        {potassiumBenefits.map((benefit) => (
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
        </Dialog>
        <Dialog open={modals[2]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">
            <div className='product-dialog-container '>
                <div className='amino-dialog-left-div'>
                    <img
                        className='product-dialog-image'
                        src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
                        alt='product1'
                    />
                    <TableContainer className='manure-modal-table-container'>
                        <Table className='manure-modal-table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                    <TableCell>Standard</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sodiumTable.map((row) => (
                                    <TableRow key={row.item}>
                                        <TableCell component='th' scope='row'>
                                            {row.item}
                                        </TableCell>
                                        <TableCell>{row.standard}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Paper elevation={5} className='manure-modal-heading'>
                        <h2>Benefits</h2>
                    </Paper>
                    <List className="product-dialog-list">
                            {sodiumBenefits.map((benefit) => (
                                <ListItem>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary={benefit}></ListItemText>
                                </ListItem>
                            ))}
                    </List>
                </div>
                <div className='amino-dialog-left-div'>
                <Paper elevation={5} className='manure-modal-heading'>
                        <h2>For Animals</h2>
                    </Paper>
                <List className="product-dialog-list">
                        {sodiumBenefits2.map((benefit) => (
                            <ListItem>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary={benefit}></ListItemText>
                            </ListItem>
                        ))}
                </List>
                <Paper elevation={5} className='manure-modal-heading'>
                        <h2>For Industry</h2>
                    </Paper>
                <List className="product-dialog-list">
                        {sodiumBenefits3.map((benefit) => (
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
        </Dialog>
        <Dialog open={modals[3]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">
            <div className='product-dialog-container '>
                <div className='amino-dialog-left-div'>
                    <img
                        className='product-dialog-image'
                        src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
                        alt='product1'
                    />
                    <TableContainer className='manure-modal-table-container'>
                        <Table className='manure-modal-table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                    <TableCell>Standard</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {boronTable.map((row) => (
                                    <TableRow key={row.item}>
                                        <TableCell component='th' scope='row'>
                                            {row.item}
                                        </TableCell>
                                        <TableCell>{row.standard}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                    
                </div>
                <div className='amino-dialog-left-div'>
                <Paper elevation={5} className='manure-modal-heading'>
                        <h2>Benefits</h2>
                    </Paper>
                <List className="product-dialog-list">
                        {boronBenefits.map((benefit) => (
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
        </Dialog>
        <Dialog open={modals[4]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">
            <div className='product-dialog-container '>
                <div className='amino-dialog-left-div'>
                    <img
                        className='product-dialog-image'
                        src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
                        alt='product1'
                    />
                    <TableContainer className='manure-modal-table-container'>
                        <Table className='manure-modal-table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                    <TableCell>Standard</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {superPotassiumTable.map((row) => (
                                    <TableRow key={row.item}>
                                        <TableCell component='th' scope='row'>
                                            {row.item}
                                        </TableCell>
                                        <TableCell>{row.standard}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                    
                </div>
                <div className='amino-dialog-left-div'>
                <Paper elevation={5} className='manure-modal-heading'>
                        <h2>Benefits</h2>
                    </Paper>
                <List className="product-dialog-list">
                        {potassiumBenefits.map((benefit) => (
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
                        </Dialog>*/}
    </div>
);
}

export default Seaweed
