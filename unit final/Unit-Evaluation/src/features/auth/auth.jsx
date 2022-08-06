import { createSlice } from "@reduxjs/toolkit";


export const Auth=createSlice({
    name:'Auth',
    initialState:{
        value:[]
    },
    reducers:{
        additem:(state,action)=>{
            // console.log("trigger")
            var nw_state=[...state.value,action.payload]
            state.value=nw_state
            console.log(state.value)
        }
        ,
        deleteitem:(state,action)=>{
            state.value.splice(action.payload,1)
        }
    }

})

export default Cart.reducer
export const{additem,deleteitem}=Cart.actions