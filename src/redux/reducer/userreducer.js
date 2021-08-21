import {REQUEST, SUCCESS, FAIL } from '../action/actionType';
const initialuser = {
    users: [],
    name:'',
    error: '',
    isloading: false
}

const userreducer = (state = initialuser, action) => {
    switch (action.type) {
        case REQUEST:
            return { ...state, isloading: true }
        case SUCCESS:
            return { isloading: false, name: action.data, error: '' }
        case FAIL:
            return { isloading: false, error: action.data, user: [] }
        default:
            return state
    }
}
export default userreducer;