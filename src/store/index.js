import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import sankeyDataReducer from './reducer';

const store = createStore(sankeyDataReducer, applyMiddleware(thunk));

export default store;