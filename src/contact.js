import React, {Component} from 'react'
import './styles/contact.css'

class Contact extends Component {
	render() {
		return  <form id='contact'>
					<h4>Contact Us</h4>
					<div className='form-group'>
						<input type='text' className='form-control' id='name' placeholder='Name:'></input>
					</div>
					<div className='form-group'>
						<input type='text' className='form-control' id='email' placeholder='Email:'></input>
					</div>
					
					<div className='form-check form-check-inline'>

						
						<input id='mow' className='form-check-input' type='checkbox' value='mow'/>
						<label className='form-check-label' for='mow'>Mowing</label>

						
						<input id='scape' className='form-check-input' type='checkbox' value='scape'/>
						<label className='form-check-label' for='scape'>Landscaping</label>
						
						<input id='other' className='form-check-input' type='checkbox' value='other'/>
						<label className='form-check-label' for='other'>Other</label>
						
					</div>
					<div className='form-group'>
						<textarea id='msg' className='form-control' rows='3' placeholder='Additional Info:'></textarea>
					</div>
					<button type='submit' className='btn btn-primary'>Submit</button>
				</form>
	}
}

export default Contact