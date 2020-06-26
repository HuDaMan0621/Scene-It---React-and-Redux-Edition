import { createStore, applyMiddleware } from 'redux'; //a lot of developers have templates and copy and paste from it. 
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './redux/reducers';

const middleware = [thunk];
const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store