import { useEffect } from "react";

export function useKeyDown(handler: (event: KeyboardEvent) => void) {
  useEffect(() => {
    addEventListener("keydown", handler);
    return () => removeEventListener("keydown", handler);
  }, [handler]);
}
