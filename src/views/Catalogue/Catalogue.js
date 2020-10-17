import React, { useState, useEffect } from "react";
import PDFViewer from "pdf-viewer-reactjs";
import "./Catalogue.css";
import NavBar from "../NavBar/NavBar";
const pdfConverter = require("pdf-to-base64");
function Catalogue() {
	return (
		<div className='catalogue-container'>
			<div className='catalogue-hero animate__animated animate__fadeIn'>
				<div className='catalogue-hero-overlay '>
					<NavBar />
					<div className='catalogue-hero-info'>
						<h1>Catalogue</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Catalogue;
