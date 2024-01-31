import { createSlice } from "@reduxjs/toolkit";

const initialSta:servicetype={
    services:[{
        title:'Web and Mobile',
        description:'Web and Mobile services'
    },
    {
        title:'BLockCHanin',
        description:'bc'
    },
            ]
}
export const serviceSlice =createSlice({
    name:'service',
    initialState:initialSta,
    reducers:{
        addService:(state,actions)=>{
            state.services =[...state.services,actions.payload]
        }
    }
})
export const {addService}=serviceSlice.actions
export default serviceSlice.reducer