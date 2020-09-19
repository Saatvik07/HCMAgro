import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Grid } from "@material-ui/core";

function About() {
	useEffect(() => {
		AOS.init({ duration: 1000, offset: 200 });
	}, []);
	return (
		<div className='animate__animated animate__backInUp'>
			<Grid container spacing={2}>
				<Grid item xs={6} style={{ backgroundColor: "white" }}></Grid>
				<Grid item xs={6} style={{ backgroundColor: "white" }}></Grid>
				<Grid item xs={6} style={{ backgroundColor: "white" }}></Grid>
				<Grid item xs={6} style={{ backgroundColor: "white" }}></Grid>
			</Grid>
		</div>
	);
}

export default About;
