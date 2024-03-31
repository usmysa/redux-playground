import { useLocation, useNavigate } from "@remix-run/react";

type Props = {
  label: string;
  to: string;
  onBeforeNavigate?: () => void;
};

export function NavigateButton({ label, to, onBeforeNavigate }: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onClick = () => {
    onBeforeNavigate?.();
    navigate(to, { state: { from: pathname } });
  };

  return (
    <button aria-label={label} onClick={onClick} type="button">
      {label}
    </button>
  );
}
