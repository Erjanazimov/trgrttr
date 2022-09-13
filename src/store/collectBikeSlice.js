import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";


export const orderBikeFetch = createAsyncThunk(
    "collectBike/orderBikeFetch",
    async function (order, {rejectWithValue, dispatch}){
        try {

            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${order.access}`
                },
                body: JSON.stringify(order.objBike)
            }

            const response = await fetch("https://bikepark-api.herokuapp.com/catalog/order/create/", options)
            const data = await response.json();
            console.log(data)
            toast("Успешно созданно заявка")
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)


const collectBikeSlice = createSlice({
    name: "collectBike",
    initialState: {
        startDate: null,
        endDate: null,
        collectBicycle: [],
        order: undefined,
        total_sum: 0,
    },
    reducers:{
        startDate(state, action){
            state.startDate = action.payload
        },
        endDate(state, action){
            state.endDate = action.payload
        },
        collectBikes(state, action){
            state.collectBicycle.push(action.payload);
            state.total_sum += +action.payload.bicycle_price
        },
        removeCollectBike(state, action){
            state.collectBicycle = state.collectBicycle.filter(bike => bike.id !== action.payload.id);
            state.total_sum -= +action.payload.collectBikeObj.bicycle_price
        },
        orderBikeBtn(state, action){
            state.order = action.payload
        },
        checkedAdd(state, action){
             const checkedTrue = state.collectBicycle.filter(item => item.id === action.payload.id);
             checkedTrue.map(bike => {
                 bike[action.payload.checked] = !bike[action.payload.checked]
             })
             // checkedTrue[action.payload.checked] = !checkedTrue[action.payload.checked]
        },

        counterBike(state, action){
            state.collectBicycle.push(action.payload.obj);
            state.total_sum += +action.payload.obj.bicycle_price
        },
        nullFixed(state){
            state.collectBicycle = [];
            state.total_sum = 0;
            state.startDate = "";
            state.endDate = ""
        }

    }
})

export const {startDate, endDate, collectBikes,removeCollectBike, orderBikeBtn, checkedAdd, nullFixed, counterBike} = collectBikeSlice.actions;

export default collectBikeSlice.reducer;