import {CHANGE_TEXT} from '../constants/Page'

export const changeText = (payload) => {
	return {
		type: CHANGE_TEXT,
		 payload
	}
}
