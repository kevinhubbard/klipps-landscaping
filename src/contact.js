import React, {Component} from 'react'
import './styles/contact.css'

class Contact extends Component {
	render() {
		return  <div id='contact'>
					<form>
						<input type='text' name='name' placeholder='Name'/>
						<label for='cleanUp'>Clean Up</label>
						<input id='cleanUp' type='checkbox' name='services' value='cleanUp'/>
						<label for='mowing'>Mowing</label>
						<input id='mowing' type='checkbox' name='services' value='mowing'/>
						<label for='trimming'>Trimming</label>
						<input id='trimming' type='checkbox' name='services' value='trimming'/>
						<input type='submit' value='submit'/>
					</form>
				</div>
	}
}

export default Contact