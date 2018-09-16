
const changeAuthGuestReducer = (bool = true, action) => {
	switch(action.type) {
		case 'IS_GUEST_ENTER':
		return action.payload
		default:
			return bool
	}
}

export default changeAuthGuestReducer;