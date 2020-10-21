import React from "react";
import "./Contact.css";
import {
	ListItemIcon,
	ListItemText,
	List,
	ListItem,
	TextField,
	InputAdornment,
	Button,

} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import PinDropIcon from "@material-ui/icons/PinDrop";
import BusinessIcon from "@material-ui/icons/Business";
import AccountCircle from "@material-ui/icons/AccountCircle";

import ModeCommentIcon from "@material-ui/icons/ModeComment";
import NavBar from "../NavBar/NavBar";
function Contact() {
	return (
		<div className='contact-container'>
			<div className='contact-hero animate__animated animate__fadeIn'>
				<div className='contact-hero-overlay '>
					<NavBar />
					<div className='contact-hero-info'>
						<h1>Contact Us</h1>
					</div>
				</div>
			</div>
			<div className='contact-main-container'>
				<div className='contact-main-left animate__animated animate__fadeIn'>
					<h2>Get in Touch</h2>

					<List className='get-in-touch-list'>
						<ListItem>
							<ListItemIcon>
								<PinDropIcon style={{ color: "white" }} />
							</ListItemIcon>
							<ListItemText primary='Regd. Office: RR -29, 1st Floor, Mainwali Nagar, New Delhi - 110087'></ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<BusinessIcon style={{ color: "white" }} />
							</ListItemIcon>
							<ListItemText primary='Unit-1: 1/18, Kirari Road, Near Bhalla Factory, Nangloi, New Delhi-110041'></ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<BusinessIcon style={{ color: "white" }} />
							</ListItemIcon>
							<ListItemText primary='Unit-2: 5 K.M. Stone, Beri Dighal Road, Sampla, Distt-Rohtak, Haryana-124501'></ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<CallIcon style={{ color: "white" }} />
							</ListItemIcon>
							<ListItemText primary='Tel:011-25267064, 011-40192472'></ListItemText>
						</ListItem>
						<ListItem>
							<ListItemIcon>
								<MailIcon style={{ color: "white" }} />
							</ListItemIcon>
							<ListItemText primary='Email: info@hcmagroproducts.com'></ListItemText>
						</ListItem>
					</List>
					<div className="contact-social-container">
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1603246785/output-onlinepngtools_tmslgv.png" alt="facebook" className="footer-social-icon"/>
								<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1603246786/output-onlinepngtools_1_yvqgh0.png" alt="instagram" className="footer-social-icon"/>
					</div>
				</div>
				<div className='contact-main-right animate__animated animate__fadeIn'>
					<h2>Want to hear from us ?</h2>
					<h5>Write to us and expect a reply within two working days :)</h5>
					<div className='contact-input-container'>
						<List>
							<ListItem>
								<TextField
									label='Name'
									variant='outlined'
									className='contact-input'
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<AccountCircle style={{ color: "white" }} />
											</InputAdornment>
										),
									}}
								/>
							</ListItem>
							<ListItem>
								<TextField
									label='Email'
									variant='outlined'
									className='contact-input'
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<MailIcon style={{ color: "white" }} />
											</InputAdornment>
										),
									}}
								/>
							</ListItem>
						</List>
						<List>
							<ListItem>
								<TextField
									label='Query/Comment'
									variant='outlined'
									multiline
									rows={5}
									className='contact-input'
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<ModeCommentIcon style={{ color: "white" }} />
											</InputAdornment>
										),
									}}
								/>
							</ListItem>
						</List>
					</div>
					<Button variant='outline' className='contact-sendBtn'>
						Send a Message
					</Button>
				</div>
			</div>
			<iframe
				title='map'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.311571363517!2d77.08296015073024!3d28.680324982312612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0414a7999a27%3A0x1011012beb136944!2sHcm%20Agro%20Products%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1600995850294!5m2!1sen!2sin'
				className='contact-map animate__animated animate__fadeIn'
			></iframe>
		</div>
	);
}

export default Contact;
