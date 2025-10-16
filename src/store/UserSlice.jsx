import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const UserLogin = createAsyncThunk('/auth/login', async (userData, thunkAPI) => {
 try {
   const response = await axios.post('https://dummyjson.com/auth/login', {
    username:userData.userName,
    password:userData.password
  }) 
   return  response.data;
 } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
 }
})

const UserSlice = createSlice({
  name: "user",
  initialState:{
    data: JSON.parse(localStorage.getItem('userData'))|{},
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' ? true:false,
    error:null,
    token:null,
  },
  reducers:{
 UserLogout: (state) => {
      state.data = {};
      state.isLoggedIn = false;
      state.error = null;
      state.token = null;
    }
  },

  extraReducers:(builder) =>{
    builder
    .addCase(UserLogin.fulfilled,(state,action) =>{
      state.data = action.payload;
     state.isLoggedIn = true;
        state.token = action.payload?.token || null;
        state.error = null;
         state.token = state.data.accessToken;
         console.log(state.data);
         if(state.data) {
          state.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', true);
          localStorage.setItem('userData', JSON.stringify(state.data));
         }
    })
    .addCase(UserLogin.rejected,(state, action) =>{
      state.data = {};
      state.error = action.payload || action.error.message;
      state.isLoggedIn = false;
      state.token = null;
    })
    .addCase(UserLogin.pending,(state)=>{
      state.error = null;
    })
  }
})


export default UserSlice.reducer;