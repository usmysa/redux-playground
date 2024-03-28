import type { Level } from "@/components";
import { useCallback } from "react";

type WordLengthRange = {
  maxLength: number;
  minLength: number;
};

const EASY_LEVEL = { minLength: 3, maxLength: 5 };

export const NORMAL_LEVEL = { minLength: 5, maxLength: 10 };

const HARD_LEVEL = { minLength: 10, maxLength: 20 };

const LEVEL_WORD_LENGTH: {
  [key in Level]: WordLengthRange;
} = {
  Easy: EASY_LEVEL,
  Normal: NORMAL_LEVEL,
  Hard: HARD_LEVEL,
};

export function useLevel() {
  const getWordLength = useCallback(
    (level: Level) => LEVEL_WORD_LENGTH[level],
    []
  );

  return {
    getWordLength,
  };
}
