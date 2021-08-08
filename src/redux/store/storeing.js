import reducer from "../reducer/reducer";
import {combineReducers, createStore} from 'redux';
import mobilereducer from "../reducer/mobilereducer";

const combineReducer =  combineReducers({
    laptop: reducer,
    mobile: mobilereducer
});
const storeing = createStore(combineReducer);
export default storeing;
