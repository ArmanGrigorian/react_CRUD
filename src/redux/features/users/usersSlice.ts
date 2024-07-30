import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mainAPI } from "../../../api/api";
import { RootState } from "../../store";
import { UsersState } from "./types";

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const res = await mainAPI.getAllUsers();
      return res.data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue(err.message || "Failed to fetch users");
      }
    }
  },
);

const initialState: UsersState = {
  all: [],
};

export const usersSlice = createSlice({
  name: "users",

  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchAllUsers.fulfilled,
        (state, { payload }: PayloadAction<UsersType>) => {
          state.all = payload;
        },
      )
      .addCase(fetchAllUsers.rejected, (state) => {
        state.all = [];
      });
  },
});

export const selectAllUsers = (state: RootState) => state.users.all;

export default usersSlice.reducer;
