import { Flex, type Level, Radio, setLevel } from "@/components";
import { useDispatch, useSelector } from "@/hooks";

export function LevelRadioGroup() {
  const dispatch = useDispatch();
  const level = useSelector((state) => state.level.value);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value as Level;
    dispatch(setLevel(value));
  };

  return (
    <form>
      <Flex direction="column" gap="xs">
        <Radio
          defaultChecked={level === "Easy"}
          label="Easy"
          name="level"
          onChange={onChange}
          value="Easy"
        />
        <Radio
          defaultChecked={level === "Normal"}
          label="Normal"
          name="level"
          onChange={onChange}
          value="Normal"
        />
        <Radio
          defaultChecked={level === "Hard"}
          label="Hard"
          name="level"
          onChange={onChange}
          value="Hard"
        />
      </Flex>
    </form>
  );
}
