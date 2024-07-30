import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mainAPI } from "../../../api/api.ts";
import { RootState } from "../../store";
import { CommentsState } from "./types.ts";

export const fetchAllComments = createAsyncThunk(
  "comments/fetchAllComments",
  async (_, { rejectWithValue }) => {
    try {
      const res = await mainAPI.getAllComments();
      return res.data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message || "Failed to fetch comments");
      }
    }
  },
);

export const fetchCommentsByPostId = createAsyncThunk(
  "comments/fetchCommentsByPostId",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await mainAPI.getCommentsByPostId(id);
      return res.data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message || "Failed to fetch comments");
      }
    }
  },
);

const initialState: CommentsState = {
  all: [],
  certain: [],
};

export const commentsSlice = createSlice({
  name: "comments",

  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchAllComments.fulfilled,
        (state, { payload }: PayloadAction<CommentsType>) => {
          state.all = payload;
        },
      )
      .addCase(fetchAllComments.rejected, (state) => {
        state.all = [];
      })

      .addCase(
        fetchCommentsByPostId.fulfilled,
        (state, { payload }: PayloadAction<CommentsType>) => {
          state.certain = payload;
        },
      )
      .addCase(fetchCommentsByPostId.rejected, (state) => {
        state.certain = [];
      });
  },
});

export const selectAllComments = (state: RootState) => state.comments.all;
export const selectCertainComments = (state: RootState) =>
  state.comments.certain;

export default commentsSlice.reducer;
