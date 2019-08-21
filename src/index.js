import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Navbar from './navbar'
import Main from './main'

class App extends Component {
	render() {
		return  <div>
					<Navbar/>
					<Main/>
				</div>
	}
}

ReactDOM.render(<App/>, document.getElementById('root'));