import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const baseCssClassName = 'initial-balance';

const propTypes = {
	value: PropTypes.number.isRequired,
};

/**
 * Displays initial balance;
 * 
 * @param {Object} props
 * @param {number} props.value
 */
function InitialBalance (props) {
	return (
		<div className={baseCssClassName}>
			Initial balance {props.value}
		</div>
	);
}

InitialBalance.propTypes = propTypes;


export default connect((state) => ({
	// @todo use selector to memoize result
	value: state.accounts.reduce((total, account) => (total + account.balance), 0),
}))(InitialBalance);
