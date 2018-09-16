import React, {Component} from 'react'

import Login from './Login'
import NameSurname from './NameSurname'
import Email from './Email'
class FormRegistration extends Component {
	render() {
		return (
			<div id="form_registration_container">
				<form id='form_registration'>
					<Login />
					<NameSurname />
					<Email />
				</form>
			</div>

			)
	}
}

export default FormRegistration