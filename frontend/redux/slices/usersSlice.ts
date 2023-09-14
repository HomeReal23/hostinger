import { IUser } from "../../models/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: IUser[] = []

export const getUsers = createAsyncThunk('data/fetchUsers', async () => {
  try {
    const { data } = await axios.get(`${process.env.API_HOST}/users/get-users`);
    return data;
  } catch (error) {
    throw new Error('Error fetching users: ' + error);
  }
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      return action.payload
    });
  },
});

export const { reducer: usersReducer } = usersSlice;

export default usersSlice;