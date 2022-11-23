import { ActionTypes } from "../constants/action-types";
const intialState = {
    products:[
        {
           products:[],
        },
    ],
};


export const productReducer = (state=intialState,{type,payload}) =>{
     switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;
     }
}

export const selectProductReducer=(state={},{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload};
        default:
            return state;
    }
}