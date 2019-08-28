import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Navbar from './navbar'
import Main from './main'
import Footer from './footer.js'
import 'bootstrap/dist/css/bootstrap.css'
import './styles/index.css'


class App extends Component {
	render() {
		return  <div>
					<div className='wrapper'>
						<Navbar/>
						<Main/>
						<div className='push'></div>
						
					</div>
					<Footer/>
				</div>
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));