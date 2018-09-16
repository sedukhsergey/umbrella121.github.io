import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ModalBlock extends Component {

	static propTypes = {
		acceptLogin: PropTypes.func.isRequired,
		skipLogin: PropTypes.func.isRequired,
		userLogin: PropTypes.string.isRequired,
	}

	render() {
		return (
			<div className="fixed-overlay">
				<div className='modal'>
					<div className='modal_container'>
						<span className='exit'
									onClick={this.props.skipLogin}>
									x
						</span>
						<h1>Are you sure?
							<i>{this.props.userLogin}</i>
						</h1>
						<p>
							<button className='accept'
											onClick={this.props.acceptLogin}>
								<span>Accept</span>
							</button>
							<button className='reject'
											onClick={this.props.skipLogin}>
								<span>Cansel</span>
							</button>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ModalBlock;
