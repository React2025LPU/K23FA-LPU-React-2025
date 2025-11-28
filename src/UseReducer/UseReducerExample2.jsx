

import React, { useReducer } from 'react'


const UseReducerExample2 = () => {

    const initialCountstate = {count : 0};
    const initialDiscountState = {status:"not applied"};

const reducerDiscount = (state,action) => {
    switch(action.type){
        case 'apply':
            return {status:"applied"};
        case 'remove':
            return {status:"not applied"};
        default:
            return state;
    }
}

const reducerCount = (state,action) =>{
    switch(action.type){
        case 'addcart' :
            return {count:state.count+action.value};
        case 'removecart':
            // if(state.count>0){
            //     return {count:state.count-1}
            // }
            // else{
            //     return initialCountstate;
            // }

            return {count:state.count<=0 ? 0 : state.count-1}
        case 'resetcart':
            return initialCountstate;
        default :
            return state;
        }
    }
const [DiscountState,dispatchDiscountState] = useReducer(reducerDiscount,initialDiscountState);
const [countState, dispatchCountstate] = useReducer(reducerCount,initialCountstate)
  return (
    <div>
        <h2>Cart Value : {countState.count}</h2>
        <button onClick={()=>{dispatchCountstate({type:'addcart' ,value:5})}}>Add to Cart</button>
        <button onClick={()=>{dispatchCountstate({type:'removecart'})}}>Remove from Cart</button>
        <button onClick={()=>{dispatchCountstate({type:'resetcart'})}}>Reset Cart</button>
        <br/><br/><br/>
        <h2>discount status: {DiscountState.status}</h2>
        <button onClick={() => {dispatchDiscountState({type:'apply'})}}>apply coupon</button>
        <button onClick={() => {dispatchDiscountState({type:'remove'})}}>remove coupon</button>
    </div>
  )
}

export default UseReducerExample2
