import { 
	GET_PHOTOS_REQUEST, 
	GET_PHOTOS_SUCCESS
	} from '../constants/Page'

	function getUserPhotosReducer(
		userState={
			photos: [],
			isFetching: false,
	}, action) {
		switch(action.type) {
			case GET_PHOTOS_REQUEST:
				return {...userState, isFetching: true}
			case GET_PHOTOS_SUCCESS:
				return {...userState, photos: action.payload, isFetching: false}
			default:
				return userState
		}
	}

	export default getUserPhotosReducer
