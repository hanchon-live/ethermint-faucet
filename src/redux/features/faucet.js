import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    faucetAddress:'',
    chainId:'ethermint_9000-1',
    distributionAmount:'1000000000',
    distrbutionDenom:'aphoton'
};

export const faucetSlice = createSlice({
    name: "faucet",
    initialState: { value: initialStateValue },
    reducers: {
        setFaucet: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setFaucet } = faucetSlice.actions;

export default faucetSlice.reducer;
