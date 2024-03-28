import { useDispatch as useReduxDispatch } from "react-redux";
import type { Dispatch } from "@/store";

export const useDispatch = useReduxDispatch.withTypes<Dispatch>();
