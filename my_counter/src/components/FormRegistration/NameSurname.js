import React, {Component} from 'react'


class NameSurname extends Component {
	render() {
		return (
			<fieldset>
				<legend>Name / Surname</legend>
				<p>Enter your name and surname</p>
				<span>name</span>
				<input type="text" id="userName" placeholder='name'/>
				<span>surname</span>
				<input type="text" id="userSurname" placeholder='surname'/>
			</fieldset>

			)
	}
}

export default NameSurname