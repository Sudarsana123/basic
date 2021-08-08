import {Buy_Laptops} from '../action/actionType';

const initialState ={
  numberofLaptops:100
}

const reducer = (state = initialState,action)=> {
    switch(action.type){
    case  Buy_Laptops:
    return {numberofLaptops: state.numberofLaptops-1}
      default :
      return state
    }
}
export default reducer;
