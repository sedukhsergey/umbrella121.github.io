import {CHANGE_COUNTER} from '../constants/Page'

 export const changeCounter = (payload) => {
	return {
		type: CHANGE_COUNTER,
		payload
	}
}



