import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: " ",
}

export const quoteSlice = createSlice({
    name: "quote",
    initialState,
    reducers: {
     updateQuotes: (state, action) => {
        state.value = action.payload
     },
    }
});
 
export const { updateQuotes } = quoteSlice.actions;

// export const selectQuote = (state) =>  state.quote.state;

export default quoteSlice.reducer;
