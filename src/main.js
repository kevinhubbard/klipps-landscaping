import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import About from './about'
import Contact from './contact'

import './styles/main.css'

class Main extends Component {
	render() {
		return  <div id='main'>
					<About/>
					<Contact/>
				</div>
	}
}

export default Main