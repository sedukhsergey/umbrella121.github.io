import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Article extends Component {
	static propTypes = {
		dispatchText: PropTypes.func.isRequired
	}

state = {
	text: '',
	number: 0,
}

_textChange = (ev) => {
	let input = ev.target.value
	this.setState(() => ({
		text:input
	}))
	this.props.dispatchText(this.state.text)
}

	handleClick = () => {
		this.setState(() => ({
			number: this.state.number + 1,
		}))
	}


	render() {
		return (
				<div className='article'>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit autem dolorem expedita aut temporibus iusto blanditiis, suscipit inventore doloribus, placeat, at adipisci. Adipisci molestiae, hic, corrupti mollitia ipsum laboriosam obcaecati!
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet harum minima perspiciatis adipisci porro atque, eligendi nihil repellendus aliquid. Voluptas aut earum eaque accusantium tempora deleniti eius, nostrum velit similique.
					</p>
					<p>
					<button className='btn' onClick={this.handleClick}>Click</button>
						<span>{this.state.number}</span>
					</p>
					<div>
						<textarea 
							defaultValue={this.state.text}
							onChange={this._textChange}>
						</textarea>
						<h3> The length of textarea is: {this.state.text.length}</h3>
					</div>
				</div>
		)
	}
}

export default Article;


