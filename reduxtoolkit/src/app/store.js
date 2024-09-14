import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
      reducer: todoReducer, // Combine all reducers into a single reducer
});
