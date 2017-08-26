import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './containers/App';

import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider>
		<App />
	</Provider>,
	document.getElementById('app')
)