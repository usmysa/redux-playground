import { Radio } from "@/components/Radio";
import { useDispatch, useSelector } from "@/hooks";
import { setLevel, type Level } from "./levelSlice";

type Props = {
  value: Level;
};

export function LevelRadio({ value }: Props) {
  const dispatch = useDispatch();
  const defaultValue = useSelector((state) => state.level.value);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value as Level;
    dispatch(setLevel(value));
  };

  return (
    <Radio
      defaultChecked={defaultValue === value}
      label={value}
      name="level"
      onChange={onChange}
      value={value}
    />
  );
}
