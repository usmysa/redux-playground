import {
  Card,
  Container,
  ErrorText,
  Flex,
  ScoreText,
  Timer,
  incrementError,
  incrementScore,
} from "@/components/";
import {
  useDispatch,
  useKeyDown,
  useLevel,
  useSelector,
  useTyping,
} from "@/hooks";
import * as styles from "@/styles/page/play.css";
import type { MetaFunction } from "@remix-run/cloudflare";
import { useLocation, useNavigate } from "@remix-run/react";
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
  const { state } = useLocation();
  const isAccessDirectly = !state?.from;
  const firstRender = useRef(true);
  const level = useSelector((state) => state.level.value);
  const count = useSelector((state) => state.timer.count);
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
    if (count === 0) {
      navigate(firstRender.current ? "/start" : "/result");
      return;
    }
    firstRender.current = false;
  }, [count, navigate]);

  useEffect(() => {
    if (isAccessDirectly) {
      navigate("/start");
    }
  }, [isAccessDirectly, navigate]);

  if (isAccessDirectly) {
    return null;
  }

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
