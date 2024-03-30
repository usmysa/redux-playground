import { generate } from "random-words";
import { useCallback, useState } from "react";

type TypingParams = {
  letter: string;
  onCorrect: () => void;
  onIncorrect: () => void;
};

type Params = {
  maxLength: number;
  minLength: number;
};

export function useTyping({ maxLength, minLength }: Params) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [word, setWord] = useState<string[]>(
    generateWord(minLength, maxLength),
  );

  const typing = useCallback(
    ({ letter, onCorrect, onIncorrect }: TypingParams) => {
      if (!letter.match(/^[a-z]$/)) {
        return;
      }

      const targetLetter = word[currentIndex];
      if (targetLetter !== letter) {
        onIncorrect();
        return;
      }

      if (currentIndex === word.length - 1) {
        setCurrentIndex(0);
        setWord(generateWord(minLength, maxLength));
        return;
      }
      setCurrentIndex(currentIndex + 1);
      onCorrect();
    },
    [currentIndex, maxLength, minLength, word],
  );

  return {
    currentIndex,
    typing,
    word,
  };
}

export const generateWord = (minLength: number, maxLength: number) => {
  const word = generate({ minLength, maxLength }) as string;
  return word.split("");
};
