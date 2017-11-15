import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory, Router} from 'react-router'
import routes from './routes/routes'

import store from './store/store'

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
		<Provider store={store}>
		  <Router history={history} routes={routes}/>
		</Provider>,
		document.getElementById('content')
);
