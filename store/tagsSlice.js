import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: [],
}

export const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
     updateTags: (state, action) => {
        state.value = action.payload
     }
    }
});
 
export const { updateTags } = tagsSlice.actions;

// export const selectQuote = (state) =>  state.quote.state;

export default tagsSlice.reducer;
