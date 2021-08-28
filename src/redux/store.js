import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./features/address";

export const store = configureStore({
    reducer: {
        address: addressReducer,
    },
});
