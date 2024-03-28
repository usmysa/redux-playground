import { createSlice } from "@reduxjs/toolkit";

type ScoreState = {
  value: number;
};

const initialState: ScoreState = {
  value: 0,
};

export const scoreSlice = createSlice({
  name: "scores",
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.value += 1;
    },
    resetScore: (state) => {
      state.value = 0;
    },
  },
});

export const { incrementScore, resetScore } = scoreSlice.actions;
