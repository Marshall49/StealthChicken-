import React from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const About = () =>
	<div className="wrapper">
		
		<div className="row justify-content-md-center">
			<div className="col col-lg-8 col-offset-2 text-center">
				<h1>About DIAlogs</h1>
				<p>
					Here at DIAlogs we are looking to START a dialog for physicians that are having difficulties with their patients with diabetes. We want physicians to have a place to display anonymous data and receive feedback from other physicians who may have experienced the same issues.
		        </p>
		    </div>
		</div>    
		<div className="row">
			<div className="col col-lg-12 text-center">
				<h2>Meet the Developers</h2>
				<div class="row">
					<div className="col">  
						<img src="" alt="Jessica" />
						<h3>Jessica Thompson</h3>
						<a id="mail" href="mailto:jessica@gmail.com?Subject=DIAlogs" target="_blank" rel="noopener noreferrer">Email Jessica</a>
					</div>
					<div className="col">  
						<img src="" alt="John" />
						<h3>John Barson</h3>
						<a id="mail" href="mailto:john@gmail.com?Subject=DIAlogs" target="_blank" rel="noopener noreferrer">Email John</a>
					</div>
					<div className="col">  
						<img src="" alt="Malcolm" />
						<h3>Malcolm Strong</h3>
						<a id="mail" href="mailto:malcolm@gmail.com?Subject=DIAlogs" target="_blank" rel="noopener noreferrer">Email Malcolm</a>
					</div>
					<div className="col">  
						<img src="" alt="Caitlin" />
						<h3>Caitlin Rose</h3>
						<a id="mail" href="mailto:cnrose02@gmail.com?Subject=DIAlogs" target="_blank" rel="noopener noreferrer">Email Caitlin</a>
					</div>
				</div>
			</div>
		</div>	
	</div>;

export default About;
