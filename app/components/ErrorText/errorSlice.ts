import { createSlice } from "@reduxjs/toolkit";

type ErrorState = {
  value: number;
};

const initialState: ErrorState = {
  value: 0,
};

export const errorSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    incrementError: (state) => {
      state.value += 1;
    },
    resetError: (state) => {
      state.value = 0;
    },
  },
});

export const { incrementError, resetError } = errorSlice.actions;
