import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
	value: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};


class SumField extends PureComponent {
	_handleChange = (event) => {
		const value = Math.abs(parseFloat(event.currentTarget.value));
		
		this.props.onChange(value);
	}
	
	render () {
		return (
			<input type={'text'} onChange={this._handleChange} value={this.props.value} />
		);
	}
}

SumField.propTypes = propTypes;

export default SumField;
