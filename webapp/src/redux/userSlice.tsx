import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logguedStatus: false,
    canLogin: true,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogguedStatus: (state, action) => {
            state.logguedStatus = action.payload;
        },
    }
});

export const { setLogguedStatus }=userSlice.actions;
export default userSlice.reducer;