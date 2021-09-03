import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./features/address";
import faucetReducer from "./features/faucet";


export const store = configureStore({
    reducer: {
        address: addressReducer,
        faucet: faucetReducer,

    },
});
