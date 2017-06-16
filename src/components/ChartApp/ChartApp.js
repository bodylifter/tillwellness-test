import React, { Component } from 'react';

import Accounts from '../Accounts';
import InitialBalance from '../InitialBalance';
import MonthlyPaymentForm from '../MonthlyPaymentForm';
import Chart from '../Chart';


const baseCssClassName = 'chart-app';
const sidebarCssClassName = `${baseCssClassName}__sidebar`;
const mainCssClassName = `${baseCssClassName}__main`;


class ChartApp extends Component {
	render () {
		return (
			<div className={baseCssClassName}>
				<div className={sidebarCssClassName}>
					<Accounts />
				</div>
				<div className={mainCssClassName}>
					<InitialBalance />
					<MonthlyPaymentForm />
					<Chart />
				</div>
			</div>
		);
	}
}

export default ChartApp;
