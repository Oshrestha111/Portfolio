import "./contact.css";
import Phone from "../../img/phone.png";
import Address from "../../img/address.png";
import Email from "../../img/email.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false);
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const handleSubmit = (e) => {
		e.preventDefault(); //this will prevent from refreshing page when submitting
		emailjs
			.sendForm(
				"service_0m6u4e2", // service ID from Email JS
				"template_numh5ov", // template ID
				formRef.current,
				"user_581KnyA88EfJaqKyq4yTh" // my userId got from integration
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className='c'>
			<div className='c-bg'></div>
			<div className='c-wrapper'>
				<div className='c-left'>
					<h1 className='c-title'>Let's discuss your project</h1>
					<div className='c-info'>
						<div className='c-info-item'>
							<img src={Phone} alt='' className='c-icon' />
							+977-9861332913
						</div>
						<div className='c-info-item'>
							<img src={Email} alt='' className='c-icon' />
							oriya.shrestha111@gmail.com
						</div>
						<div className='c-info-item'>
							<img src={Address} alt='' className='c-icon' />
							Banepa-06, Kavre, Nepal
						</div>
					</div>
				</div>
				<div className='c-right'>
					<p className='c-desc'>
						<b>What's your story?</b>
						Get in touch. Always available for freelancing if the right project
						comes along.
					</p>
					<form ref={formRef} onSubmit={handleSubmit}>
						<input
							style={{
								backgroundColor: darkMode && "#333",
								color: darkMode && "#fff",
							}}
							type='text'
							placeholder='Name'
							name='user_name'
						/>
						<input
							style={{
								backgroundColor: darkMode && "#333",
								color: darkMode && "#fff",
							}}
							type='text'
							placeholder='Subject'
							name='user_subject'
						/>
						<input
							style={{
								backgroundColor: darkMode && "#333",
								color: darkMode && "#fff",
							}}
							type='email'
							placeholder='Email'
							name='user_email'
						/>
						<textarea
							style={{
								backgroundColor: darkMode && "#333",
								color: darkMode && "#fff",
							}}
							placeholder='Message..'
							name='message'
							id=''
							cols='30'
							rows='6'></textarea>
						<button>Submit</button>
						<div className='c-msg'>
							{done && "Thank You! Your Email has bent sent."}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
