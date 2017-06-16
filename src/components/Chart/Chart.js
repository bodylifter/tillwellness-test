import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

import { connect } from 'react-redux';

import chartUtils from '../../utils/chart';


const baseCssClassNames = 'chart';

const propTypes = {
	initialBalance: PropTypes.number.isRequired,
	monthlyPayment: PropTypes.number.isRequired,
};

/**
 * Displays chart.
 *
 * @param {Object} props
 */
function Chart (props) {
	const {
		initialBalance,
		monthlyPayment,
	} = props;

	if ( initialBalance === 0 || monthlyPayment === 0 ) {
		return null;
	}
	
	return (
		<div className={baseCssClassNames}>
			<LineChart
				width={600}
				height={300}
				data={chartUtils.buildData({
				initialBalance,
				monthlyPayment,
			})}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			>
				<XAxis dataKey={'name'} />
				<YAxis/>
				<CartesianGrid strokeDasharray={'3 3'} />
				<Line type={'monotone'} dataKey={'value'} stroke={'#8884d8'} activeDot={{ r: 8 }}/>
			</LineChart>
		</div>
	);
}

Chart.propTypes = propTypes;

export default connect((state) => ({
	// @todo use selector to memoize result
	initialBalance: state.accounts.reduce((total, account) => (total + account.balance), 0),
	monthlyPayment: state.monthlyPayment,
}))(Chart);
