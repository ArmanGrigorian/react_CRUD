import { configureStore } from "@reduxjs/toolkit";
import { usersReducer, postsReducer, commentsReducer } from "./features/index.ts";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
