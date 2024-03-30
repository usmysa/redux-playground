import type { RootState } from "@/store";
import { useSelector as useReduxSelector } from "react-redux";

export const useSelector = useReduxSelector.withTypes<RootState>();
