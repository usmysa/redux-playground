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
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}
