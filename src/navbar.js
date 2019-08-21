import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles/navbar.css'

class Navbar extends Component {
	render() {
		return <div className='nav'>
					<nav >
						<h2 id='logo'><img src='/images/logo.png' />Klipps Landscaping</h2>
					</nav>
				</div>
	}
}

export default Navbar