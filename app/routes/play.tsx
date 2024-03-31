import {
  Card,
  Container,
  ErrorText,
  Flex,
  ScoreText,
  Timer,
} from "@/components/";
import { incrementError } from "@/components/ErrorText/errorSlice";
import { incrementScore } from "@/components/ScoreText/scoreSlice";
import {
  useDispatch,
  useKeyDown,
  useLevel,
  useSelector,
  useTyping,
} from "@/hooks";
import * as styles from "@/styles/page/play.css";
import type { MetaFunction } from "@remix-run/cloudflare";
import { useBeforeUnload, useNavigate } from "@remix-run/react";
import { useCallback, useEffect, useRef } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Simple Typing" },
    { name: "description", content: "Play Simple Typing" },
  ];
};

export default function Play() {
  const dispatch = useDispatch();
  const { getWordLength } = useLevel();
  const navigate = useNavigate();
  useBeforeUnload((event) => {
    event.preventDefault();
    event.returnValue = "";
  });
  const firstRender = useRef(true);
  const level = useSelector((state) => state.level.value);
  const errors = useSelector((state) => state.errors.value);
  const scores = useSelector((state) => state.scores.value);
  const { count, max: maxCount } = useSelector((state) => state.timer);
  const isPlaying = (0 < count && count < maxCount) || errors > 0 || scores > 0;
  const isFinished = count === 0;
  const wordContainerRef = useRef<HTMLDivElement>(null);
  const { currentIndex, typing, word } = useTyping(getWordLength(level));
  useKeyDown((event) => {
    typing({
      letter: event.key,
      onCorrect: () => {
        dispatch(incrementScore());
      },
      onIncorrect: () => {
        dispatch(incrementError());
        playShakeAnimation();
      },
    });
  });

  const playShakeAnimation = useCallback(() => {
    const classList = wordContainerRef.current?.classList;
    if (!classList) return;

    classList.remove(styles.shake);
    window.requestAnimationFrame(() => {
      classList.add(styles.shake);
    });
  }, []);

  useEffect(() => {
    if (firstRender.current && isPlaying) {
      navigate("/start");
    }

    if (isFinished) {
      navigate("/result");
    }

    firstRender.current = false;
  }, [isFinished, isPlaying, navigate]);

  return (
    <Container>
      <Flex align="center" justify="center">
        <Card h={500} w={800}>
          <Flex direction="column" h="100%">
            <section className={styles.timerSection}>
              <Flex gap="xl" p="md">
                <ScoreText />
                <ErrorText />
              </Flex>
            </section>
            <section className={styles.timerSection}>
              <Timer width="100%" />
            </section>
            <section className={styles.inputSection}>
              <div className={styles.wordContainer} ref={wordContainerRef}>
                <Flex align="center" gap={4} justify="center" w="100%">
                  {word.map((letter, index) => (
                    <div
                      className={
                        index < currentIndex
                          ? styles.typedInLetter
                          : styles.willTypeInLetter
                      }
                      // biome-ignore lint: lint/suspicious/noArrayIndexKey
                      key={`${letter}-${index}`}
                    >
                      {letter}
                    </div>
                  ))}
                </Flex>
              </div>
            </section>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}
