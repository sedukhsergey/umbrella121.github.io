import React, {Component} from 'react'

class Login extends Component {
	render() {
		return (
			<fieldset>
				<legend>Login / Password</legend>
				<p>Enter your login and password</p>
				<span>login</span>
				<input type="text" id="userLogin" placeholder='login'/>
				<span>password</span>
				<input type="text" id="userPassword" placeholder='password'/>
				<span>password confirm</span>
				<input type="text" id="userPassword_confirm" placeholder='password'/>
			</fieldset>
			)
	}
}

export default Login

					