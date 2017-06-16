import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const baseCssClassName = 'accounts-list';

const propTypes = {
	accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/**
 * Accounts list.
 *
 * @param {Object} props
 * @param {Array.<Object>} props.accounts
 */
function AccountsList (props) {
	return (
		<div className={baseCssClassName}>
			{props.accounts.map((account, i) => (
				<div key={i}>Balance: {account.balance}</div>
			))}
		</div>
	);
}

AccountsList.propTypes = propTypes;

export default connect((state) => ({
	accounts: state.accounts,
}))(AccountsList);
