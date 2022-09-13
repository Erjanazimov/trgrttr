import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const fetchUserInfo = createAsyncThunk(
    "authorization/fetchUserInfo",
    async function (token, {rejectWithValue, dispatch}){
        try {
            let options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token.access}`
                }
            }
            const response = await fetch("https://bikepark-api.herokuapp.com/auth/users/me/", options)

            const data = await response.json();

            dispatch(userInfo(data))
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

export const activeUsers = createAsyncThunk(
    "authorization/activeUsers",
    async function (url, {rejectWithValue, dispatch}){
        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(url)
            }

            const response = await fetch("https://bikepark-api.herokuapp.com/auth/users/activation/", options)

            const data = await response.json();


        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: {
        login: {
            name: "",
            email: "",
            password: "",
            phone_number: "",
            currentPassword: ""
        }
    },
    reducers: {
        userInfo(state, action){
            state.login.name = action.payload.name;
            state.login.email = action.payload.email;
            state.login.password = action.payload.id
            state.login.phone_number = action.payload.phone_number;
        }, userInfoHandler(state, action){
            let keys = Object.keys(action.payload);
            let text = action.payload[keys[0]];
            state.login[keys[0]] = text;
        }
    }
})

export const {userInfo, userInfoHandler} = userInfoSlice.actions

export default userInfoSlice.reducer;