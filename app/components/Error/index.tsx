import { Flex } from "@/components";
import { useSelector } from "@/hooks";
import * as styles from "./styles.css";

export function Error() {
  const errors = useSelector((state) => state.errors.value);

  return (
    <Flex align="center" direction="column" w={80}>
      <div className={styles.label}>Errors</div>
      <div className={styles.value}>{errors}</div>
    </Flex>
  );
}
