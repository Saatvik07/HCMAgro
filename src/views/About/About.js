import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
	cardContainerOdd: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		fontSize: "30px",
		margin: "50px",
		backgroundColor: "#aec8ca",
		textTransform: "capitalize",
	},
	cardContainerEven: {
		display: "flex",
		alignItems: "center",
		flexDirection: "row-reverse",
		justifyContent: "space-between",
		fontSize: "30px",
		margin: "50px",
		backgroundColor: "#6d8c8e",
		textTransform: "capitalize",
	},
	cardContent: {
		width: "50%",
	},
	image: {
		height: "400px",
		width: "auto",
		margin: "20px",
	},
}));
function About() {
	const styles = useStyles();
	useEffect(() => {
		AOS.init({ duration: 1000, offset: 200 });
	}, []);
	return (
		<div className='animate__animated animate__backInUp'>
			<Card
				className={styles.cardContainerOdd}
				data-aos-out='fade-right'
				data-aos-anchor='bottom-center'
			>
				<CardContent className={styles.cardContent}>
					We are one of the dedicated manufacturers and exporters of rich quality agro products. The
					high growth of our enterprise is credited to our skilled personnel, quality managers, and
					research department. We serve distinct sectors with our range of products. HCM Agro
					Products Private Ltd. has been established since 13 April 1999.
				</CardContent>
				<img
					src='https://res.cloudinary.com/maximuscloud/image/upload/v1599605651/pexels-pixabay-51947_yymg1c.jpg'
					alt='i'
					className={styles.image}
				/>
			</Card>
			<Card
				className={styles.cardContainerEven}
				data-aos='fade-left'
				data-aos-anchor-placement='bottom-bottom'
			>
				<CardContent className={styles.cardContent}>
					We are one of the dedicated manufacturers and exporters of rich quality agro products. The
					high growth of our enterprise is credited to our skilled personnel, quality managers, and
					research department. We serve distinct sectors with our range of products. HCM Agro
					Products Private Ltd. has been established since 13 April 1999.
				</CardContent>
				<img
					src='https://res.cloudinary.com/maximuscloud/image/upload/v1599605655/pexels-kaboompics-com-5808_apso79.jpg'
					alt='i'
					className={styles.image}
				/>
			</Card>
			<Card className={styles.cardContainerOdd} data-aos='fade-right'>
				<CardContent className={styles.cardContent}>
					We are one of the dedicated manufacturers and exporters of rich quality agro products. The
					high growth of our enterprise is credited to our skilled personnel, quality managers, and
					research department. We serve distinct sectors with our range of products. HCM Agro
					Products Private Ltd. has been established since 13 April 1999.
				</CardContent>
				<img
					src='https://res.cloudinary.com/maximuscloud/image/upload/v1599605711/Main_1_byg3t7.jpg'
					alt='i'
					className={styles.image}
				/>
			</Card>
			<Card className={styles.cardContainerEven} data-aos='fade-left'>
				<CardContent className={styles.cardContent}>
					We are one of the dedicated manufacturers and exporters of rich quality agro products. The
					high growth of our enterprise is credited to our skilled personnel, quality managers, and
					research department. We serve distinct sectors with our range of products. HCM Agro
					Products Private Ltd. has been established since 13 April 1999.
				</CardContent>
				<img
					src='https://res.cloudinary.com/maximuscloud/image/upload/v1599605648/pexels-michael-89267_do9a85.jpg'
					alt='i'
					className={styles.image}
				/>
			</Card>
		</div>
	);
}

export default About;
