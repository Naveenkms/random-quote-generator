import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from "./quoteSlice";
import tagsReducer from "./tagsSlice";
import bookmarksReducer from "./bookmarksSlice"

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
    tags: tagsReducer,
    bookmarks: bookmarksReducer
  },
})