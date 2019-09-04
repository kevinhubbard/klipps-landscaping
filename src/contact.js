import React, {Component} from 'react'
import './styles/contact.css'

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			msg: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		fetch('/', {
			method: 'POST',
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				msg: this.state.msg
			}),
			headers: { "Content-type": "application/json"}
		});

		alert(`Thank you ${this.state.name}! We will respond accordingly.`);

		document.getElementById('name').value='';
		document.getElementById('email').value='';
		document.getElementById('msg').value='';
	}

	render() {
		return  <form id='contact' onSubmit={this.handleSubmit}>
					<h4>Contact Us</h4>
					<div className='form-group'>
						<input type='text' className='form-control' id='name' name='name' placeholder='Name:' onChange={this.handleChange}></input>
					</div>
					<div className='form-group'>
						<input type='text' className='form-control' id='email' name='email' placeholder='Email:' onChange={this.handleChange}></input>
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
						<textarea id='msg' className='form-control' name='msg' rows='3' placeholder='Additional Info:' onChange={this.handleChange}></textarea>
					</div>
					<input className='btn btn-primary' type='submit' value='submit'/>
				</form>
	}
}

export default Contact