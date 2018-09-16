import React, {Component} from 'react'
import PropTypes from 'prop-types'

import ProfilePage from './ProfilePage'
import AutorizationPage from './AutorizationPage'

 class Header extends Component {

	static propTypes = {
		dispatchAuth: PropTypes.func.isRequired,
		userLogin: PropTypes.string,
		userPassword: PropTypes.string,
		dispatchCheckAuth:PropTypes.func.isRequired,
		isUserAuth: PropTypes.bool.isRequired,
		isGuestAuth: PropTypes.bool.isRequired,
		dispatchChangeAuthGuest: PropTypes.func.isRequired
	}

	renderUserDataPage = () => {
		return this.props.isUserAuth
			?
			<ProfilePage 
				dispatchCheckAuth={this.props.dispatchCheckAuth}
				isUserAuth={this.props.isUserAuth}
				userLogin={this.props.userLogin}
				userPassword={this.props.userPassword}
				isGuestAuth={this.props.isGuestAuth}
				dispatchChangeAuthGuest={this.props.dispatchChangeAuthGuest} />
			:
			<AutorizationPage 
				dispatchAuth={this.props.dispatchAuth}
				dispatchCheckAuth={this.props.dispatchCheckAuth}
				isUserAuth={this.props.isUserAuth} />
	}

	render() {
		return (
			<div className='header'>
				{this.renderUserDataPage()}
			</div>
		)
	}
}

export default Header



