import React, {Component} from 'react'
import About from './about'
import Contact from './contact'
import Gallery from './gallery'

import './styles/main.css'

class Main extends Component {
	render() {
		return  <div id='main'>
					<About/>
					<Contact/>
					<Gallery/>
				</div>
	}
}

export default Main