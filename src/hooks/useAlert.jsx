import { useState } from "react";

export default function useAlert() {
  const [alert, setAlert] = useState(false);
  setTimeout(() => {
    setAlert(false);
  }, 5000);
  return {
    alert,
    setAlert,
  };
};
