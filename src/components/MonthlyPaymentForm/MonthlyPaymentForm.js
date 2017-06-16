import React, { PureComponent } from 'react';

import SumField from '../SumField';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import monthlyPaymentActions from '../../actions/monthlyPaymentActions';


const baseCssClassName = 'monthly-payment-form';


class MonthlyPaymentForm extends PureComponent {
	_handleChange = (value) => {
		this.props.setPayment({
			value,
		});
	}

	render () {
		return (
			<div className={baseCssClassName}>
				Monthly Payment <SumField onChange={this._handleChange} value={this.props.monthlyPayment} />
			</div>
		);
	}
}

export default connect((state) => ({
	monthlyPayment: state.monthlyPayment,
}), (dispatch) => bindActionCreators({
	setPayment: monthlyPaymentActions.setPayment,
}, dispatch))(MonthlyPaymentForm);
