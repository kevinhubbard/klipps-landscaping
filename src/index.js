import React from 'react'
import ReactDOM from 'react-dom'
import Instructions from './Instructions'

class Test extends React.Component {
	render() {
		return  <div id='top'>
					<Instructions/>
				</div>
	}
}

ReactDOM.render(<Test name='fuck'/>, document.getElementById('root'));