import { errorSlice, levelSlice, scoreSlice, timerSlice } from "@/components";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    errors: errorSlice.reducer,
    level: levelSlice.reducer,
    scores: scoreSlice.reducer,
    timer: timerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
