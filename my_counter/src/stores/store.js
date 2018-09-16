import { createStore, combineReducers, applyMiddleware } from 'redux'
import counterReducer from '../reducers/counterReducer'
import checkUserAuthReducer from '../reducers/checkUserAuthReducer'
import userReducer from '../reducers/userReducer'
import textReducer from '../reducers/textReducer'
import changeAuthGuestReducer from '../reducers/changeAuthGuestReducer'
import getUserPhotosReducer from '../reducers/getUserPhotosReducer'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'


const store = createStore(
	combineReducers(
		{
			counter: counterReducer,
			user: userReducer,
			text: textReducer,
			isUserAuth: checkUserAuthReducer,
			isGuestAuth: changeAuthGuestReducer,
			usersPhotos: getUserPhotosReducer,
		}
	),
	applyMiddleware( thunk, createLogger()  )
);

store.subscribe(() =>
	console.log('myStore',store.getState()))

export default store;