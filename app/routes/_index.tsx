import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";

export default function Page() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/start");
  }, [navigate]);

  return null;
}
