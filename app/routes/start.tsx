import {
  Container,
  Flex,
  LevelRadioGroup,
  NavigateButton,
  resetCount,
  resetError,
  resetScore,
} from "@/components/";
import { useDispatch } from "@/hooks";
import * as styles from "@/styles/page/start.css";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Simple Typing" },
    { name: "description", content: "Start Simple Typing" },
  ];
};

export default function Start() {
  const dispatch = useDispatch();
  const onRestart = () => {
    dispatch(resetCount());
    dispatch(resetError());
    dispatch(resetScore());
  };

  return (
    <Container>
      <Flex align="center" direction="column" gap="xl">
        <h1 className={styles.title}>Simple Typing</h1>
        <LevelRadioGroup />
        <NavigateButton label="Start" onBeforeNavigate={onRestart} to="/play" />
      </Flex>
    </Container>
  );
}
