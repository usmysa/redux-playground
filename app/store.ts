import { configureStore } from "@reduxjs/toolkit";
import { errorSlice } from "./components/ErrorText/errorSlice";
import { levelSlice } from "./components/LevelRadio/levelSlice";
import { scoreSlice } from "./components/ScoreText/scoreSlice";
import { timerSlice } from "./components/Timer/timerSlice";

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
