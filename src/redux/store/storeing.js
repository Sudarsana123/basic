import reducer from "../reducer/reducer";
import {combineReducers, createStore, applyMiddleware} from 'redux';
import mobilereducer from "../reducer/mobilereducer";
import userreducer from "../reducer/userreducer";
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const combineReducer =  combineReducers({
    laptop: reducer,
    mobile: mobilereducer,
    users:userreducer
});
const storeing = createStore(combineReducer,applyMiddleware(thunk,logger));
export default storeing;
