import React, {Component} from 'react'

class Email extends Component {
	render() {
		return (
			<fieldset>
				<legend>Email</legend>
				<p>Enter your email</p>
					<span>email</span>
					<input type="text" id='email' placeholder='email'/>
			</fieldset>
			)
	}
}

export default Email