import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'

import {routerReducer} from 'react-router-redux'

import * as reducers from './reducers'

import config from '../configs/config'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});

const store = createStore(
    reducer,
    config.devtool ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : '',
    applyMiddleware(thunkMiddleware)
);

export default store;
