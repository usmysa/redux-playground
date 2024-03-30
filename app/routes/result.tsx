import {
  Container,
  Flex,
  NavigateButton,
  resetCount,
  resetError,
  resetScore,
} from "@/components/";
import { useDispatch, useSelector } from "@/hooks";
import * as styles from "@/styles/page/result.css";
import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Simple Typing" },
    { name: "description", content: "Result of Simple Typing" },
  ];
};

export default function Result() {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors.value);
  const level = useSelector((state) => state.level.value);
  const scores = useSelector((state) => state.scores.value);

  const onRestart = () => {
    dispatch(resetCount());
    dispatch(resetError());
    dispatch(resetScore());
  };

  return (
    <Container>
      <Flex align="center" direction="column" gap="xl">
        <h1 className={styles.title}>Result</h1>
        <Flex direction="column" gap="xs">
          <Flex align="center" gap="md">
            <div className={styles.label}>Level</div>
            <div className={styles.value}>{level}</div>
          </Flex>
          <Flex align="center" gap="md">
            <div className={styles.label}>Scores</div>
            <div className={styles.value}>{scores}</div>
          </Flex>
          <Flex align="center" gap="md">
            <div className={styles.label}>Errors</div>
            <div className={styles.value}>{errors}</div>
          </Flex>
        </Flex>
        <Flex gap="md">
          <NavigateButton label="Back Top" to="/start" />
          <NavigateButton
            label="Restart"
            onBeforeNavigate={onRestart}
            to="/play"
          />
        </Flex>
      </Flex>
    </Container>
  );
}
