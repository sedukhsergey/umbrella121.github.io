import React, {Component} from 'react'
import PropTypes from 'prop-types'

import UserDataBlock from './UserDataBlock'
import ModalBlock from './ModalBlock'

class ProfilePage extends Component {

	static propTypes = {
		userLogin: PropTypes.string.isRequired,
		userPassword: PropTypes.string.isRequired,
		dispatchCheckAuth:PropTypes.func.isRequired,
		isUserAuth: PropTypes.bool.isRequired,
		isGuestAuth: PropTypes.bool.isRequired,
		dispatchChangeAuthGuest: PropTypes.func.isRequired
	}

	acceptLogin = () => {
		this.props.dispatchCheckAuth(true)
		this.props.dispatchChangeAuthGuest(false)
	}

	skipLogin = () => {
		this.props.dispatchCheckAuth(false)
		this.props.dispatchChangeAuthGuest(true)
	}

	renderModalBlock() {
		return this.props.isUserAuth && this.props.isGuestAuth 
			?
			<ModalBlock 
				acceptLogin={this.acceptLogin}
				skipLogin={this.skipLogin}
				userLogin={this.props.userLogin} />
			:
			<UserDataBlock userLogin={this.props.userLogin} />
	}

	render() {
		return (
			<div className='profile_page'>
				{this.renderModalBlock()}
			</div>
		);
	}
}

export default ProfilePage;
