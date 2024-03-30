import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Level = "Easy" | "Normal" | "Hard";

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
