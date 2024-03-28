import { createSlice } from "@reduxjs/toolkit";

type TimerState = {
  count: number;
  max: number;
};

const MAX_SECONDS = 30;

const initialState: TimerState = {
  count: MAX_SECONDS,
  max: MAX_SECONDS,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    countDown: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    resetCount: (state) => {
      state.count = state.max;
    },
  },
});

export const { countDown, resetCount } = timerSlice.actions;
