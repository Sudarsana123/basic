
const initialMobile ={
    numberofmobile:1000
}

const mobilereducer = (state=initialMobile,action) => {
    switch(action.type){
        case "Buy_Mobiles":
            return {numberofmobile: state.numberofmobile-1}
            default:
                return state
    }
}
export default mobilereducer;
