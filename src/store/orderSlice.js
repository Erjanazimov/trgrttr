import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const orderTekFetch = createAsyncThunk(
    "collectBike/orderBikeFetch",
    async function (order, {rejectWithValue, dispatch}){
        try {
            let options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${order.tek.access}`
                }
            }

            const response = await fetch("https://bikepark-api.herokuapp.com/catalog/order/list/?query=unfullfilled", options)
            const data = await response.json();

            dispatch(addOrderDetails(data))
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

export const orderFetch = createAsyncThunk(
    "collectBike/orderFetch",
    async function (order, {rejectWithValue, dispatch}){
        try {
            let options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${order.access}`
                }
            }

            const response = await fetch("https://bikepark-api.herokuapp.com/catalog/order/list/?query=completed", options)
            const data = await response.json();
            dispatch(addOrder(data))

        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)


const orderSlice = createSlice({
    name: "order",
    initialState: {
        order_details: [],
        order: [],
        address: ""
    },
    reducers: {
        addOrderDetails(state, action) {
            state.order_details = action.payload
        },
        addOrder(state, action){
            state.order = action.payload
        },
        addressaChange(state, action){
            state.address = action.payload
        }
    }
})

export const {addOrderDetails, addOrder, addressaChange} = orderSlice.actions;

export default orderSlice.reducer;