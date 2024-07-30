import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mainAPI } from "../../../api/api.ts";
import { RootState } from "../../store.ts";
import { PostsState } from "./types.ts";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await mainAPI.getAllPosts();
      return res.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to fetch posts");
    }
  },
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (newPost: PostType, { rejectWithValue }) => {
    try {
      await mainAPI.createPost(newPost);
      return newPost;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to create post");
    }
  },
);

export const updatePostById = createAsyncThunk(
  "posts/updatePostById",
  async (
    updatedPost: { id: number; title: string; body: string },
    { rejectWithValue },
  ) => {
    try {
      await mainAPI.updatePostById(updatedPost);
      return updatedPost;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to update post");
    }
  },
);

export const deletePostById = createAsyncThunk(
  "posts/deletePostId",
  async (id: string, { rejectWithValue }) => {
    try {
      await mainAPI.deletePostById(id);
      return { id };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to delete post");
    }
  },
);

export const deleteAllPosts = createAsyncThunk(
  "posts/deleteAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      await mainAPI.deleteAllPosts();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return rejectWithValue(err.message || "Failed to delete all posts");
    }
  },
);

const initialState: PostsState = {
  all: [],
};

export const postsSlice = createSlice({
  name: "posts",

  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH ALL POSTS
      .addCase(
        fetchAllPosts.fulfilled,
        (state, { payload }: PayloadAction<PostsType>) => {
          state.all = payload;
        },
      )
      .addCase(fetchAllPosts.rejected, (state) => {
        state.all = [];
      })
      // CREATE POST
      .addCase(
        createPost.fulfilled,
        (state, { payload }: PayloadAction<PostType>) => {
          state.all = [...state.all, payload].sort(
            (a, b) => a.userId - b.userId,
          );
        },
      )
      // UPDATE POST
      .addCase(
        updatePostById.fulfilled,
        (
          state,
          {
            payload,
          }: PayloadAction<{ id: number; title: string; body: string }>,
        ) => {
          const { id, ...rest } = payload;

          state.all = state.all
            .map((post) => (post.id === id ? { ...post, ...rest } : post))
            .sort((a, b) => a.userId - b.userId);
        },
      )
      // DELETE POST
      .addCase(
        deletePostById.fulfilled,
        (state, { payload }: PayloadAction<{ id: string }>) => {
          const id = Number(payload.id);
          state.all = state.all.filter((post) => post.id !== id);
        },
      )
      // DELETE ALL POSTS
      .addCase(deleteAllPosts.fulfilled, (state) => {
        state.all = [];
      })
      // JSON Placeholder doesn't support DELETE ALL
      // that's I'm using this...
      .addCase(deleteAllPosts.rejected, (state) => {
        state.all = [];
      });
  },
});


export const selectAllPosts = (state: RootState) => state.posts.all;

export default postsSlice.reducer;
