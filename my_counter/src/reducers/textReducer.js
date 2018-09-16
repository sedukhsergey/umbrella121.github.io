
const textReducer = (textState = '', action) => {
	switch (action.type) {
		case 'CHANGE_TEXT':
			return textState + action.payload
		default:
			return textState
	}
}

export default textReducer;
