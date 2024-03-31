import { Container, Flex, LinkButton } from "@/components/";
import { useSelector } from "@/hooks";
import * as styles from "@/styles/page/result.css";
import type { MetaFunction } from "@remix-run/cloudflare";
import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Simple Typing" },
    { name: "description", content: "Result of Simple Typing" },
  ];
};

export default function Result() {
  const navigate = useNavigate();
  const timer = useSelector((state) => state.timer.count);
  const errors = useSelector((state) => state.errors.value);
  const level = useSelector((state) => state.level.value);
  const scores = useSelector((state) => state.scores.value);
  const isNotFinished = timer !== 0;

  useEffect(() => {
    if (isNotFinished) {
      navigate("/start");
    }
  }, [isNotFinished, navigate]);

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
          <LinkButton label="Back Top" to="/start" />
          <LinkButton label="Restart" to="/play" />
        </Flex>
      </Flex>
    </Container>
  );
}
