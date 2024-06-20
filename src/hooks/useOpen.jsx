import { useState } from "react";

export const useOpen = () => {
  const [open, setopen] = useState(false);
  return { open, setopen };
};
