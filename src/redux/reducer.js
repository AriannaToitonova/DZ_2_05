
const initialState = {
    oneNum: 0,
    twoNum: 0,
    result:0
}



export default function reducer (state=initialState, action){

    if(action.type === "NUMBER_ONE"){
        return {
            ...state,
            oneNum: action.payload
        }
    }
    else if(action.type === "NUMBER_TWO"){
        return {
            ...state,
            twoNum: action.payload
        }
    }
    else if (action.type === "PLUS"){
        return {
            ...state,
            result: +state.oneNum + +state.twoNum
        }
    }
    else if (action.type === "MINUS"){
        return {
            ...state,
            result: +state.oneNum - +state.twoNum
        }
    }
    else if (action.type === "MULTI"){
        return {
            ...state,
            result: +state.oneNum * +state.twoNum
        }
    }
    else if (action.type === "DIVIS"){
        return {
            ...state,
            result: +state.oneNum / +state.twoNum
        }
    }

    return state
}