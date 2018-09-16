import {AUTH} from '../constants/Page'

export const auth = (payload) => {
		return {
			type: AUTH,
			payload
		}
}
