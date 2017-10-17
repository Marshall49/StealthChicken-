import React from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const About = () =>
	<div className="wrapper">
		
		<div className="row justify-content-md-center">
			<div className="col col-lg-8 col-offset-2 text-center">
				<h1>About DIAlogs</h1>
				<p>
					 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
		            aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius
		            natoque penatibus et magnis dis parturient montes, nascetur
		            ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at
		            et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
		            gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis
		            mi sollicitudin turpis semper, et interdum risus lobortis.
		            Vestibulum suscipit nunc non egestas tristique. Proin hendrerit
		            efficitur malesuada. Mauris lorem urna, sodales accumsan quam non,
		            tristique tempor erat. Nullam non sem facilisis, tempus tortor sit
		            amet, volutpat nisl. Ut et turpis non nunc maximus mollis a vitae
		            tortor. Pellentesque mattis risus ac quam laoreet cursus. Praesent
		            suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis
		            consequat mattis tortor vitae mattis.
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
