import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles/about.css'

const services = ['Lawn mowing', 'Tree trimming', 'Weeding or Fertilizing', 'Landscape/Garden Designs and maintenance']

class About extends Component {
	render() {
		return  <div id='about'>
					<h3 className='aboutContent'>About Us</h3>
					<p className='aboutContent'>We are a full service landscaping company, conveniently located in Old Bridge NJ. We are able to carry out any task you need. Wether it be 
					<ul className="services">
						{services.map((service, i) =>
							<li key='i'>{service}</li>)}
					</ul> We can take care if it all! Call Us today at <a href='tel:732-484-6688'>732-484-6688</a>, or fill out the form and we will get back to you as quickly as possible.</p>
				</div>
	}
}

export default About