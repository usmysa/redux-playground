import { useDispatch, useSelector } from "@/hooks";
import { toPixel } from "@/utils";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useEffect, useRef } from "react";
import { styleVars, timer } from "./styles.css";
import { countDown } from "./timerSlice";

type Props = {
  width: number | string;
};

export function Timer({ width }: Props) {
  const { count, max } = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  const interval = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    interval.current = setInterval(() => {
      dispatch(countDown());
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, [dispatch]);

  return (
    <progress
      className={timer}
      max={max}
      style={assignInlineVars({
        [styleVars.width]: toPixel(width),
      })}
      value={count}
    />
  );
}
