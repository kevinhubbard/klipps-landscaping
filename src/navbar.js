import React, {Component} from 'react'
import './styles/navbar.css'
import logo from './images/logo.png'

class Navbar extends Component {
	render() {
		return <div className='nave'>
					<nav>
						<h2 id='logo'><img src={logo} />Klipps Landscaping</h2>
					</nav>
				</div>
	}
}

export default Navbar