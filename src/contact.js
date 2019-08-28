import React, {Component} from 'react'
import './styles/contact.css'

class Contact extends Component {
	render() {
		return  <div id='contact'>
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
						<label className='form-check-label' for='trim'>Trimming: </label>
						<input id='trim' className='form-check-input' type='checkbox' value='trim'/>
						<label className='form-check-label' for='other'>Other: </label>
						<input id='other' className='form-check-input' type='checkbox' value='other'/>
						
					</div>
					<div className='form-group'>
					</div>
					<button type='submit' className='btn btn-primary'>Submit</button>
				</div>
	}
}

export default Contact