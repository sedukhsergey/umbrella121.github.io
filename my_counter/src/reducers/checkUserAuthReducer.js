
const checkAuthReducer =(bool = false, action) => {
	switch(action.type) {
		case 'IS_USER_LOGIN':
		return action.payload
		default:
			return bool
	}
}

export default checkAuthReducer;