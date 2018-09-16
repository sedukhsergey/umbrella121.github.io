import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component{

	render() {
		return (
			<div id="sidebar">
				<nav className='nav'>
					<ul>
						<li className='nav__home'>
							<Link className='nav_link' to='/'>Home</Link>
						</li>
						<li className='nav__registration'>
							<Link className='nav_link' to='/registration'>Registration</Link>
						</li>
						<li className='nav__content'>
							<Link className='nav_link' to='/content'>Content</Link>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
}


export default Nav