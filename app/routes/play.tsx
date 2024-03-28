import {
  Card,
  Container,
  Error,
  Flex,
  incrementError,
  incrementScore,
  Score,
  Timer,
} from "@/components/";
import {
  useDispatch,
  useKeyDown,
  useLevel,
  useSelector,
  useTyping,
} from "@/hooks";
import type { MetaFunction } from "@remix-run/node";
import { useLocation, useNavigate } from "@remix-run/react";
import * as styles from "@/styles/page/play.css";
import { IconClock } from "@tabler/icons-react";
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
                <Score />
                <Error />
              </Flex>
            </section>
            <section className={styles.timerSection}>
              <Flex align="center" gap={4}>
                <IconClock size={20} />
                <Timer width="100%" />
              </Flex>
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
                      key={index}
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
