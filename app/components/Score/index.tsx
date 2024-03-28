import { Flex } from "@/components";
import { useSelector } from "@/hooks";
import * as styles from "./styles.css";

export function Score() {
  const scores = useSelector((state) => state.scores.value);

  return (
    <Flex align="center" direction="column" w={80}>
      <div className={styles.label}>Scores</div>
      <div className={styles.value}>{scores}</div>
    </Flex>
  );
}
