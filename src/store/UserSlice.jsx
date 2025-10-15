import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Login = createAsyncThunk('/auth/login', async (userData, thunk) => {
 try {
   const response = await axios.post('https://dummyjson.com/auth/login', {username:userData.username,password:userData.password}) .catch(error=>thunk.rejectWithValue(error))
   return await response.data;
 } catch (e) {
  thunk.rejectWithValue(e)
 }
})

const UserSlice = createSlice({
  name: "user",
  initialState:{
    data:{},
    isLoggedIn: false,
    error:null,
    token:null,
  },
  reducers:{

  },
  extraReducers:(builder) =>{
    builder.addCase(Login.fulfilled,(state,action) =>{
      state.data = action.payload;
      if(state.data){
        state.isLoggedIn = true;
      }
      state.error = null;
      state.token = state.data.token;
    }).addCase(Login.rejected,(state, action) =>{
      state.data = null;
      state.error = action.error;
      state.isLoggedIn = false;
      state.token = null;
    }).addCase(Login.pending,(state)=>{
      state.data = {};
    })
  }
})

export default UserSlice.reducer;