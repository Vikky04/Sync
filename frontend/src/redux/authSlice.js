import { createSlice } from "@reduxjs/toolkit";
import { EclipseIcon } from "lucide-react";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading:false
    },
    reducers:{
        setLoading:(state,action)=>{
            state.loading=action.payload;
        },
        setUser:(state,action)=>{
            state.user=action.payload;
        }
    }
});

export const {setLoading,setUser} = authSlice.actions;
export default authSlice.reducer;