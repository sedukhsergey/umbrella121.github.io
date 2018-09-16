import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './stores/store'
import {HashRouter, Route} from 'react-router-dom'
import App from './containers/App'

render(
  <Provider store={store}>
    <HashRouter>
			<Route component={App} />
		</HashRouter>
	</Provider>, 
	document.getElementById('root') 
);
