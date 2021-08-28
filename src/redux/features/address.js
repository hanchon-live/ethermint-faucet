import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const addressSlice = createSlice({
    name: "address",
    initialState: { value: initialStateValue },
    reducers: {
        setAddress: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;
