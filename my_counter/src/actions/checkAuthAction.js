import { IS_USER_LOGIN } from '../constants/Page'

export const checkAuth = (payload) => {
	return {
		type: IS_USER_LOGIN,
		payload
	}
}
