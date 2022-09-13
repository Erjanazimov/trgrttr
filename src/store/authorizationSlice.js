import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

export const addRegister = createAsyncThunk(
    "authorization/addRegister",
    async function (register, {rejectWithValue, dispatch}){
        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(register)
            }
            const response = await fetch("https://bikepark-api.herokuapp.com/auth/users/", options)

            const data = await response.json();
            if (response.ok){
                toast.success("Отправлено сообщение на email")
            } else {
                for (let i in  data){
                    toast.error(data[i].toString())
                }
            }
        //   переделать
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

export const addLogin = createAsyncThunk(
    "authorization/addLogin",
    async function (login, {rejectWithValue, dispatch}){
        try {
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(login)
            }
            const response = await fetch("https://bikepark-api.herokuapp.com/auth/jwt/create", options)

            if (!response.ok){
                return  toast.error("Не правильно пароль или логин " + response.status )
            }
            const data = await response.json();
            localStorage.setItem("token", JSON.stringify(data));
            dispatch(userChecked(data));
            if (response.ok){
                window.location.reload()
            }
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

export const loginChecked = createAsyncThunk(
    "authorization/loginChecked",
    async function (loginToken, {rejectWithValue, dispatch}){
        try {
            const objToken = {
                token: loginToken.access
            }
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const response = await fetch("https://bikepark-api.herokuapp.com/auth/jwt/verify", options);
            const data = await response.json();

            if (response.ok){
                dispatch(userChecked(loginToken));
            } else {
                dispatch(tokenAddRefresh())
            }
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

export const tokenAddRefresh = createAsyncThunk(
    "authorization/tokenAddRefresh",
    async function (token, {rejectWithValue, dispatch}){
        try {
            const dates = localStorage.getItem("token");
            const parse = JSON.parse(dates);
            let obj = {
                refresh: parse.refresh
            }
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)

            }
            const response = await fetch("https://bikepark-api.herokuapp.com/auth/jwt/refresh/", options)
            if (response.ok) {
                const data = await response.json();
                dispatch(loginChecked(data));
            }
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)



const authorizationSlice = createSlice({
    name: "authorization",
    initialState: {
      register: {
          name: "",
          email: "",
          phone_number: "",
          password: ""
      },
        login: {
            phone_number: "",
            password: ""
        },
        token: {
            access: ""
        },
        access: undefined
    },
    reducers: {
        registerChange(state, action){
            let keys = Object.keys(action.payload);
            let text = action.payload[keys[0]];
            state.register[keys[0]] = text;
        },
        loginChange(state, action){
            let keys = Object.keys(action.payload);
            let text = action.payload[keys[0]];
            state.login[keys[0]] = text
        },
        addToken(state, action){
            state.token.access = action.payload.access;
        },
        userChecked(state, action){
            state.access = action.payload.access
        },
        exitLogin(state){
            state.token.access = "";
            state.access = undefined;
            localStorage.clear();
        }

    }
})

export const {registerChange, loginChange, addToken, userChecked, exitLogin} = authorizationSlice.actions

export default authorizationSlice.reducer;