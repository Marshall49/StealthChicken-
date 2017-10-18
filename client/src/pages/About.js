import React from 'react';
import './style.css';

const About = () =>
	<div className="wrapper">
		
		<div className="row justify-content-md-center">
			<div className="col col-lg-8 col-offset-2 text-center" id="about_description">
				<h1 id='all_title'>About DIAlogs...</h1>
				<p id="para">
					Here at DIAlogs we are looking to START a dialog for physicians that are having difficulties with their patients with diabetes. We want physicians to have a place to display anonymous data and receive feedback from other physicians who may have experienced the same issues.
		        </p>
		    </div>
		</div>    
		<div className="row">
			<div className="col col-lg-12 text-center" id="about_page">
				<h2 id="emphasize">Meet the Developers</h2>
			</div>
		</div>
				<div class="row" id="developers">
					<div className="col-md-3">  
						<a href="https://www.linkedin.com/in/jessica-thompson-311b5647" alt="Jessica's LinkedIn" target="blank"><img src="https://i.imgur.com/H0NXyr7t.jpg" alt="Jessica" className="rounded-circle" /></a>
						<h3 className="name">Jessica Thompson</h3>
						<a id="mail" href="mailto:jessica@gmail.com?Subject=DIAlogs" target="_blank" rel="noopener noreferrer">Email Jessica</a>
					</div>
					<div className="col-md-3">   
						<a href="https://www.linkedin.com/in/johnbarson/" alt="John's LinkedIn" target="blank"><img src="https://i.imgur.com/lnq2IG0t.jpg" alt="John" className="rounded-circle"/></a>
						<h3 className="name">John Barson</h3>
						<a id="mail" href="mailto:john@gmail.com?Subject=DIAlogs" target="_blank" rel="noopener noreferrer">Email John</a>
					</div>
					<div className="col-md-3">   
						<a href="https://www.linkedin.com/in/malcolm-strong-78088a105/" alt="Malcolm's LinkedIn" target="blank"><img src="https://i.imgur.com/L5r9NhWt.jpg" alt="Malcolm" className="rounded-circle"/></a>
						<h3 className="name">Malcolm Strong</h3>
						<a id="mail" href="mailto:malcolm@gmail.com?Subject=DIAlogs" target="_blank" rel="noopener noreferrer">Email Malcolm</a>
					</div>
					<div className="col-md-3">  
						<a href="https://www.linkedin.com/in/caitlin-rose-86552a54/" alt="Caitlin's LinkedIn" target="blank"><img src="https://i.imgur.com/B9FfmCSt.jpg" alt="Caitlin" className="rounded-circle"/></a>
						<h3 className="name">Caitlin Rose</h3>
						<a id="mail" href="mailto:cnrose02@gmail.com?Subject=DIAlogs" target="_blank" rel="noopener noreferrer">Email Caitlin</a>
					</div>
				</div>
	</div>;

export default About;
