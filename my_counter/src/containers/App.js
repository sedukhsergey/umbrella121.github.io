import React from 'react'
import {connect} from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import {changeCounter} from '../actions/counterActions'
import {auth} from '../actions/userActions'
import {changeText} from '../actions/textActions'
import {checkAuth} from '../actions/checkAuthAction'
import {changeAuth} from '../actions/changeAuthGuestAction.js'
import {getPhotos} from '../actions/getPhotosActions'

import Main from '../components/Main/Main'
import FormRegistration from '../components/FormRegistration/FormRegistration'
import Content from '../components/Content/Content'
import Nav from '../components/Nav/Nav'


class App extends React.Component {

	render() {
		return (
			<div>
				<Nav />
				<Switch>
					<Route exact path='/' render={ () => (
						<Main 
							userLogin={this.props.login}
							userPassword={this.props.password}
							isUserAuth={this.props.isUserAuth}
							dispatchAuth={this.props.dispatchAuth}
							isGuestAuth={this.props.isGuestAuth}
							dispatchChangeAuthGuest={this.props.dispatchChangeAuthGuest}
							dispatchCheckAuth={this.props.dispatchCheckAuth}
							dispatchPhotos={this.props.dispatchPhotos}
							photoList={this.props.photoList}
							isFetching={this.props.isFetching} />
						)}/>
					<Route path='/registration' 
								 component={FormRegistration} />
					<Route path='/content' render={() =>(
						<Content 
							changeCounterDispatch={this.props.changeCounterDispatch}
							dispatchText={this.props.dispatchText}
							/>
					)} />
	    	</Switch>
	    </div>
		)
	}
}

const mapStateToProps = store => {
	return {
		login: store.user.login,
		password: store.user.password,
		isUserAuth: store.isUserAuth,
		isGuestAuth: store.isGuestAuth,
		photoList: store.usersPhotos.photos,
		isFetching: store.usersPhotos.isFetching
	}
}

const mapDispatchToProps = dispatch => ({
	changeCounterDispatch(newCounterValue) {
		const action = changeCounter(newCounterValue);
		dispatch(action)
	},
	dispatchAuth(user) {
		const userAction = auth(user);
		dispatch(userAction);
	},
	dispatchText(text) {
		const textAction = changeText(text);
		dispatch(textAction)
	},
	dispatchCheckAuth(flag) {
	const flagUserAuth = checkAuth(flag)
	dispatch(flagUserAuth)
	},
	dispatchChangeAuthGuest(flag) {
		const flagGuestAuth = changeAuth(flag)
		dispatch(flagGuestAuth)
	},
	dispatchPhotos() {
		dispatch(getPhotos())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


