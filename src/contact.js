import React, {Component} from 'react'
import './styles/contact.css'

class Contact extends Component {
	render() {
		return  <form id='contact' action='mailto:dgkallday98@gmail.com' method='post' enctype='text/plain'>
					<div className='form-group'>
						<label for='name'>Name:</label>
						<input type='text' className='form-control' id='name'></input>
					</div>
					<div className='form-group'>
						<label for='email'>Email:</label>
						<input type='text' className='form-control' id='email'></input>
					</div>
					<p id='services'>Services:</p>
						<br/>
					
					<div className='form-check form-check-inline'>

						<label className='form-check-label' for='mow'>Mowing: </label>
						<input id='mow' className='form-check-input' type='checkbox' value='mow'/>
						<label className='form-check-label' for='scape'>Landscaping: </label>
						<input id='scape' className='form-check-input' type='checkbox' value='scape'/>
						<label className='form-check-label' for='other'>Other: </label>
						<input id='other' className='form-check-input' type='checkbox' value='other'/>
						
					</div>
					<div className='form-group'>
					</div>
					<button type='submit' className='btn btn-primary'>Submit</button>
				</form>
	}
}

export default Contact