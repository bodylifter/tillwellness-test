import React from 'react';

import { connect } from 'react-redux'

import AccountsAddForm from '../AccountsAddForm';
import AccountsList from '../AccountsList';



const baseCssClassName = 'accounts';
const accountFormCssClassName = `${baseCssClassName}__add-form`;
const accountListCssClassName = `${baseCssClassName}__list`;


function Accounts (props) {
	return (
		<div className={baseCssClassName}>
			<h2>Accounts</h2>
			<div>Count: {props.numberOfAccounts}</div>

			<div className={accountFormCssClassName}>
				<AccountsAddForm />
			</div>
			<div className={accountListCssClassName}>
				<AccountsList />
			</div>
		</div>
	);
}

export default connect((state) => {
	return {
		numberOfAccounts: state.accounts.length,
	};
})(Accounts);

