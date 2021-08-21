import {Buy_Laptops,REQUEST,SUCCESS,FAIL} from '../action/actionType';
import axios from 'axios';
export const buy_laptops=()=> {
    return {
        type:Buy_Laptops
    }
}
export const buy_mobiles=()=> {
    return {
        type:"Buy_Mobiles"
    }
}
export const fetchrequest=()=> {
    return {
        type:REQUEST
    }
}

export const fetchsuccess=(users)=> {
    return {
        type:SUCCESS,
        data:users
    }
}

export const fetchfail=(error)=> {
    return {
        type:FAIL,
        data:error
    }
}

export const fetchusers=()=> {
  return function(dispatch){
      dispatch(fetchrequest());
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response =>{
          let users =response.data.map(user=>user.email);
          //let users= response.data;
          //console.log("gfdgdfgsd",users);
          dispatch(fetchsuccess(users))
      })
      .catch(error=>{
          dispatch(fetchfail(error))
      })
  }
}