import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: [],
}

export const bookmarksSlice = createSlice({
    name: "bookmarks",
    initialState,
    reducers: {
     addBookmarks: (state, action) => {
        state.value = [
            ...state.value,
            action.payload
        ]
     },
     removeBookmarks: (state, action) =>{
        state.value = state.value.filter(item => item._id !== action.payload._id)
     }
    }
});
 
export const { addBookmarks, removeBookmarks } = bookmarksSlice.actions;

// export const selectQuote = (state) =>  state.quote.state;

export default bookmarksSlice.reducer;
