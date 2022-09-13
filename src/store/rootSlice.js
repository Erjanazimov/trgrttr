import {configureStore} from "@reduxjs/toolkit";
import bikeReducer from "./bikeSlice";
import authorizationReducer from "./authorizationSlice";
import userInfoReducer from "./userInfoSlice";
import collectBikeReducer from "./collectBikeSlice";
import orderReducer from "./orderSlice";

export default configureStore({
    reducer:{
        byBike: bikeReducer,
        authorization: authorizationReducer,
        userInfo: userInfoReducer,
        collect: collectBikeReducer,
        order: orderReducer
    }
})