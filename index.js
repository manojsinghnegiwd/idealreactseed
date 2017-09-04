import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// main routes
import AppRoutes from './routes';

import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<AppRoutes />
	</Provider>,
	document.getElementById('app')
)