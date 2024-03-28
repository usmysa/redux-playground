import { wrapper } from "./styles.css";

export function Container({ children }: React.PropsWithChildren) {
  return <div className={wrapper}>{children}</div>;
}
