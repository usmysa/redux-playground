import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const LEVELS = ["Easy", "Normal", "Hard"] as const;

export type Level = (typeof LEVELS)[number];

export type LevelState = {
  value: Level;
};

const initialState: LevelState = {
  value: "Normal",
};

export const levelSlice = createSlice({
  name: "level",
  initialState,
  reducers: {
    setLevel: (state, action: PayloadAction<Level>) => {
      state.value = action.payload;
    },
  },
});

export const { setLevel } = levelSlice.actions;
