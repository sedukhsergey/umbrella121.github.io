import React, {Component} from 'react'
import PropTypes from 'prop-types'

class UserDataBlock extends Component {

	static propTypes = {
		userLogin: PropTypes.string.isRequired
	}

	render() {
		return (
			<div className='userData'>
				<ul>
					<li><span>login: {this.props.userLogin}</span></li>
				</ul>
			</div>
		);
	}
}

export default UserDataBlock;
