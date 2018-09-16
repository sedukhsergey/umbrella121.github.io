import React, {Component} from 'react'
import getKey from '../../../func/getKey'

class Exel extends Component {
	state = {
		headers: [],
		contacts: [],
	}

	componentDidMount() {
		this.fetchInitData()
			.then(users => (
				this.setState({
					contacts: this.createContacts(users),
					headers: this.createHeaders(users)
				}))
			)
	}

	fetchInitData() {
		return fetch( 'https://randomuser.me/api/?results=10' )
			.then( results => results.json() )
				.then(data => {
					return data.results.map( elem => {
						return {
							name: `${elem.name.first} ${elem.name.last}`,
							location: `${elem.location.street} ${elem.location.city}`,
							age: elem.dob.age,
							phone: elem.phone,
							email: elem.email
						}
					})
				})
	}

	createContacts = (elem) =>
		elem.map(obj => {
			const arr = []
			for ( let key in obj )
				arr.push(obj[key])
			return arr
	})

	createHeaders = (elem) => {
		const arr = []
		for (let key in elem[0])
			arr.push(key)
		return arr
	}


	_sort = (e) => {
		var column = e.target.cellIndex;
		var data = [...this.state.contacts];
		data.sort((a,b) => a[column] > b[column] ? 1 : -1)
		this.setState(() => ({
			contacts: data
		}))
	}

	render() {
		return (
			<div id='exel'>
				<h2>The table of books chart</h2>
				<table>
					<thead onClick={this._sort}>
						<tr>
							{this.state.headers.map( title =>
								<th key={getKey(title)}>
										{title}
								</th>
							 )}
						</tr>
					</thead>
					<tbody>
						{this.state.contacts.map( (row, index) =>
							<tr key={index}>
								{row.map(cell => 
									<td key={getKey(cell)}>
										{cell}
									</td>
								)}
							</tr>
							)
						}
					</tbody>
				</table>
			</div>

			)
	}
}

export default Exel