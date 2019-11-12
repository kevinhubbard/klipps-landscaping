import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Navbar from './navbar'
import Main from './main'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/index.css'


class App extends Component {
	render() {
		return  <div>
					<Navbar/>
					<div className='parallax'></div>
					<Main/>
					<div className='parallax2'></div>
					{/*<Footer/>*/}
				</div>
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));