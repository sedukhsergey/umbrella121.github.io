
const userReducer = (usersState = {}, action) => {
	switch (action.type) {
		case "AUTH":
			return {...action.payload}
		default:
			return usersState
	}
}

export default userReducer;
