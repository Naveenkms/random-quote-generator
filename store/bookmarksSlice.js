import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: [],
}

export const bookmarksSlice = createSlice({
    name: "bookmarks",
    initialState,
    reducers: {
     updateBookmarks: (state, action) => {
        state.value = [
            ...state.value,
            action.payload]
     }
    }
});
 
export const { updateBookmarks } = bookmarksSlice.actions;

// export const selectQuote = (state) =>  state.quote.state;

export default bookmarksSlice.reducer;
