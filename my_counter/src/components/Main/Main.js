import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Header from './Header/Header'
import UsersPad from './UsersPad/UsersPad'
import GetUserPhotos from './GetUserPhotos/GetUserPhotos'

class Main extends Component {

	static propTypes = {
		userLogin: PropTypes.string,
		userPassword: PropTypes.string,
		dispatchAuth: PropTypes.func.isRequired,
		isUserAuth: PropTypes.bool.isRequired,
		dispatchCheckAuth:PropTypes.func.isRequired,
		isGuestAuth: PropTypes.bool.isRequired,
		dispatchChangeAuthGuest: PropTypes.func.isRequired,
		dispatchPhotos: PropTypes.func.isRequired,
		photoList: PropTypes.array.isRequired,
		isFetching: PropTypes.bool.isRequired
	}

	render() {
		return (
			<div id='main'>
				<Header 
					isUserAuth={this.props.isUserAuth}
					dispatchCheckAuth={this.props.dispatchCheckAuth}
					userLogin={this.props.userLogin}
					userPassword={this.props.userPassword}
					dispatchAuth={this.props.dispatchAuth}
					isGuestAuth={this.props.isGuestAuth}
					dispatchChangeAuthGuest={this.props.dispatchChangeAuthGuest}
					 />
				<UsersPad />
				<GetUserPhotos
					dispatchPhotos={this.props.dispatchPhotos}
					photoList={this.props.photoList}
					isFetching={this.props.isFetching} />
			</div>
		)
	}
}

export default Main