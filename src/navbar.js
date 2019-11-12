import React, {Component} from 'react'
import './styles/navbar.css'
import logo from './images/logo.png'

class Navbar extends Component {
	render() {
		return <nav>
					<h2><img src={logo}/>Klipps Landscaping</h2>
				</nav>
	}
}

export default Navbar