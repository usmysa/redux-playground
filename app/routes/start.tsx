import { Container, Flex, LevelRadio } from "@/components";
import { resetError } from "@/components/ErrorText/errorSlice";
import { LEVELS } from "@/components/LevelRadio/levelSlice";
import { resetScore } from "@/components/ScoreText/scoreSlice";
import { resetCount } from "@/components/Timer/timerSlice";
import { useDispatch } from "@/hooks";
import * as styles from "@/styles/page/start.css";
import { redirect, type MetaFunction } from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Simple Typing" },
    { name: "description", content: "Start Simple Typing" },
  ];
};

export async function action() {
  return redirect("/play");
}

export default function Start() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCount());
    dispatch(resetError());
    dispatch(resetScore());
  }, [dispatch]);

  return (
    <Container>
      <Form method="POST">
        <Flex align="center" direction="column" gap="xl">
          <h1 className={styles.title}>Simple Typing</h1>
          <Flex direction="column" gap="xs">
            {LEVELS.map((level) => (
              <LevelRadio key={level} value={level} />
            ))}
          </Flex>
          <button type="submit">Start</button>
        </Flex>
      </Form>
    </Container>
  );
}
