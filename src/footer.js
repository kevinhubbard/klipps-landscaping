import React, {Component} from 'react'
import './styles/footer.css'

class Footer extends Component {
	render(){
		const d = new Date();
		const y = d.getFullYear();
		return  <footer>
					<h5>Klipps Landscaping LLC {y}</h5>
				</footer>
	}
}



export default Footer