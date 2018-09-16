import React from 'react'

class Timer extends React.Component {

	state = {
		value: 0,
	}
	
	increment = () => {
		this.setState(() => ({
			value: this.state.value + 1
		}))
	}

	startTimer = () => {
		this.timerID = setInterval(this.increment, 10)
	}

	stopTimer = () => {
		clearInterval(this.timerID)
		this.setState(() => ({
			value: 0
		}))
	}

	render() {
		const value = this.state.value
		return (
				<div className='timer'>
					<div className="timer_container">
						<h3>Timer</h3>
						<p>
							<span>{Math.round(value/100/60/60)}:</span>
							<span>{Math.round(value/100/60)}:</span>
							<span>{Math.round(value/100)}.</span>
							<span>{value % 100}</span>
						</p>
					</div>
						<button 
							onClick={this.startTimer}
							className='btn'>
								Start timer
						</button>
						<button 
							onClick={this.stopTimer}
							className='btn'>
								Stop timer
						</button>
				</div>
		);
	}
}

export default Timer;


