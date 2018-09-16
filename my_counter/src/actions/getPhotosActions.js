import { 
	GET_PHOTOS_REQUEST, 
	GET_PHOTOS_SUCCESS
	} from '../constants/Page'


const getPhotos = () => dispatch => {
	dispatch({
		type: GET_PHOTOS_REQUEST
	})

	fetch( 'https://randomuser.me/api/?results=50' )
		.then( results => results.json() )
			.then(result => {
				const data = result.results.map( elem => {
					return {
					picture: elem.picture.large,
					uuid: elem.login.uuid,
					name: `${ elem.name.title } ${ elem.name.first } ${ elem.name.last }`
					}
				} )
		dispatch(
			{
				type: GET_PHOTOS_SUCCESS,
				payload: data 
			}
		)
		})
}

export { getPhotos }