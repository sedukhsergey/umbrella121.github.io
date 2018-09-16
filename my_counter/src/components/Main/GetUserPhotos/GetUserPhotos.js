import React, {Component} from 'react'
import PropTypes from 'prop-types';

class GetUserPhotos extends Component {

	static propTypes = {
		dispatchPhotos: PropTypes.func.isRequired,
		photoList: PropTypes.array.isRequired,
		isFetching: PropTypes.bool.isRequired
	}

showPhotoList = (array) => {
	return array.map( elem => 
		<img 
			src={elem.picture}
			alt={elem.name}
			key={elem.uuid} /> 
		)
}

	render() {
		console.log('---',this.props.photoList)
		return (
			<div id='getUserPhotos'>
				<button 
					className='btn'
					onClick={this.props.dispatchPhotos}>
					{!this.props.isFetching ? 'Get photos' : '...Please wait'}
				</button>
				<div className="gallery">
					{this.showPhotoList(this.props.photoList)}
				</div>
			</div>
		)
	}
}

export default GetUserPhotos