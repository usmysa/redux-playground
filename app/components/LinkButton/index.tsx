import { Link, useLocation } from "@remix-run/react";

type Props = {
  label: string;
  to: string;
};

export function LinkButton({ label, to }: Props) {
  const { pathname } = useLocation();

  return (
    <Link to={to} state={{ from: pathname }}>
      <button aria-label={label} type="button">
        {label}
      </button>
    </Link>
  );
}
