import { IS_GUEST_ENTER } from '../constants/Page.js'

export const changeAuth = (payload) => {
	return {
		type: IS_GUEST_ENTER,
		payload
	}
}
