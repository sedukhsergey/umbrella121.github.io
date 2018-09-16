import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
	state = {
		counter: 0,
	}
	
	static propTypes = {
		changeCounterDispatch: PropTypes.func.isRequired
	}

	onIncrease = ()=>{
		this.setState(prevState =>({
			counter: prevState.counter + 1
		}))
		this.props.changeCounterDispatch(1)
	}

	onDecrease = () =>{
		this.setState(prevState =>({
			counter: prevState.counter - 1 
		}))
		this.props.changeCounterDispatch(-1)
	}

	render() {
		return (
				<div className='counter'>
					<h2>
						Counter value increment: 
						<span>{this.state.counter}</span>
					</h2>
					<button 
						onClick={ this.onIncrease } 
						className='btn'>+1
					</button>
					<button 
						onClick={ this.onDecrease } 
						className='btn'>-1
					</button>
				</div>
		);
	}
}

export default Counter;


