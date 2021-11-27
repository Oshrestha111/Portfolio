import "../about/about.css";
import aboutimg from "../../img/aboutme.jpg";

const About = () => {
	return (
		<div className='a'>
			<div className='a-left'>
				<div className='a-card bg'></div>
				<div className='a-card'>
					<img src={aboutimg} alt='' className='a-img' />
				</div>
			</div>
			<div className='a-right'>
				<h1 className='a-title'>About Me</h1>
				<p className='a-sub'>
					It is a long established fact that a reader will be ..
				</p>
				<p className='a-desc'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse
					totam iusto sed natus dolorum explicabo omnis eligendi, laudantium
					incidunt libero sunt iste architecto maiores, labore delectus officia
					corporis deserunt!
				</p>
			</div>
		</div>
	);
};
export default About;
