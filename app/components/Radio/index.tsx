import { Flex } from "@/components";
import { labelStyle, radio } from "./styles.css";

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Radio({ label, name, ...props }: Props) {
  const id = `${name}-${label}`;

  return (
    <Flex gap="xs">
      <input className={radio} id={id} name={name} type="radio" {...props} />
      <label className={labelStyle} htmlFor={id}>
        {label}
      </label>
    </Flex>
  );
}
