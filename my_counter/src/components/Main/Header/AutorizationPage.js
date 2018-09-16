import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AutorizationPage extends Component {

	static propTypes = {
		dispatchAuth: PropTypes.func.isRequired,
		dispatchCheckAuth:PropTypes.func.isRequired,
		isUserAuth: PropTypes.bool.isRequired
	}

	state = {
		login: null,
		password: null
	}


	changeLocalStorage = () => {
		let userData = 
		{
			login: this.state.login,
			password: this.state.password
		};
		let serialObj = JSON.stringify(userData)
		localStorage.setItem(this.state.login, serialObj)
	}

	changeLogin =(e) => {
		let inputValue = e.target.value
		this.setState(() => ({
			login: inputValue
		}))
	}

	changePassword =(e) => {
		let inputValue = e.target.value
		this.setState( () => ( {
			password: inputValue
		}))
	}

	handleClickSubmit = (e) => {
		e.preventDefault();
		this.props.dispatchAuth(
			{
				login: this.state.login,
				password: this.state.password 
			}
		)
		this.changeLocalStorage()
		if( this.state.login && this.state.password )
			this.props.dispatchCheckAuth(true)
	}


	render() {
		return (
			<div className="autorizationPage">
				<form id='autorizationForm' 
							onSubmit={this.handleClickSubmit}>
					<div className='user_data_container'>
						<input type="submit" 
									 value='Войти'
									 className='btn authBtn' />
						<p> 
						<span className='user_data_container_login'>Login</span>
						<input type="text"
									 placeholder='Enter your login'
									 onChange={this.changeLogin} />
						</p>
						<p> 
							<span>Password</span> 
							<input type="password"
										 placeholder='Enter your password'
										 onChange={this.changePassword} />
						</p>
					</div>
				</form>
			</div>
			);
		}
}

export default AutorizationPage