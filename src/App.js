import React, { Component } from 'react';

import { Provider as StoreProvider } from 'react-redux'
import storeUtils from 'utils/store';

import ChartApp from 'components/ChartApp';


/**
 * Entry point.
 */
class App extends Component {
    constructor (props, context) {
        super(props, context);

        this._store = storeUtils.configureStore();
    }

	render() {
		return (
			<StoreProvider store={this._store}>
				<ChartApp />
			</StoreProvider>
		);
	}
}

export default App;
